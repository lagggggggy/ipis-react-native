import usePreviousProps from '../usePreviousProps';
import React, {useRef, useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {
  TextInput,
  TextInputProps,
  HelperText,
  Text,
  Menu,
} from 'react-native-paper';

export interface AutocompleteRenderOptionState {
  index: number;
  selected: boolean;
}

export interface AutocompleteRenderOptionProps<Value> {
  key: number | string;
  selected: boolean;
  label: string;
  value: Value;
}

interface DropdownProps<Value> {
  multiple?: boolean;
  label: string;
  placeholder?: string;
  helperText?: string;
  options: ReadonlyArray<Value>;
  value?: Value;
  disabled?: boolean;
  error?: boolean;
  onChange?: (value: Value | Value[] | null, reason: string) => void;
  getOptionLabel?: (option: Value) => string;
  isOptionEqualToValue?: (option: Value, value: Value) => boolean;
  renderOption?: (
    option: Value,
    state: AutocompleteRenderOptionState,
  ) => React.ReactNode;
  InputProps?: TextInputProps;
  containerStyle?: StyleProp<ViewStyle>;
}

const Dropdown: React.FC<DropdownProps<any>> = ({
  multiple = false,
  label,
  placeholder,
  helperText,
  options,
  value: valueProp,
  disabled,
  error,
  onChange,
  getOptionLabel: getOptionLabelProp,
  isOptionEqualToValue = (option, value) => option === value,
  renderOption: renderOptionProp,
  InputProps,
  containerStyle,
}) => {
  const inputRef = useRef<any>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState(valueProp || multiple ? [] : null);
  const [inputValue, setInputValue] = useState<string>('');

  const openMenu = () => setFocused(true);
  const closeMenu = () => {
    inputRef.current?.blur();
    setFocused(false);
    setIsEditing(false);
  };

  const defaultGetOptionLabel = (option: any) => {
    let _option$label;
    return (_option$label = option.label) != null ? _option$label : option;
  };
  const getOptionLabel = getOptionLabelProp || defaultGetOptionLabel;

  const getOptionValue = (option: any) => {
    let _option$value;
    return (_option$value = option.value) != null ? _option$value : option;
  };

  const filteredOptions = isEditing
    ? options.filter(option => {
        const optionValue = getOptionValue(option);
        if (typeof optionValue !== 'string') {
          return false;
        }
        return optionValue.toLowerCase().includes(inputValue.toLowerCase());
      })
    : options;
  const previousProps = usePreviousProps({
    filteredOptions,
    value,
    inputValue,
  });

  const resetInputValue = React.useCallback(
    (newValue: any) => {
      // retain current `inputValue` if new option isn't selected and `clearOnBlur` is false
      // When `multiple` is enabled, `newValue` is an array of all selected items including the newly selected item
      // const isOptionSelected = multiple
      //   ? value!.length < newValue.length
      //   : newValue !== null;
      // if (!isOptionSelected) {
      //   return;
      // }
      let newInputValue;
      if (multiple) {
        newInputValue = '';
      } else if (newValue == null) {
        newInputValue = '';
      } else {
        const optionLabel = getOptionLabel(newValue);
        newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
      }
      if (inputValue === newInputValue) {
        return;
      }
      setInputValue(newInputValue);
    },
    [getOptionLabel, inputValue, multiple, setInputValue],
  );

  React.useEffect(() => {
    const valueChange = value !== previousProps.value;
    if (focused && !valueChange) {
      return;
    }

    resetInputValue(value);
  }, [value, resetInputValue, focused, previousProps.value]);

  const handleInputChange = (newValue: string) => {
    setIsEditing(true);
    if (inputValue !== newValue) {
      setInputValue(newValue);
    }
    if (newValue === '') {
      if (!multiple) {
        handleValue(null, 'clear');
      }
    } else {
      openMenu();
    }
  };

  const handleOptionClick = (option: any) => {
    selectNewValue(option, 'selectOption');
    if (!multiple) {
      closeMenu();
    }
  };

  const handleValue = (newValue: any, reason: string) => {
    if (multiple) {
      if (
        value!.length === newValue.length &&
        value!.every((val: any, i: number) => val === newValue[i])
      ) {
        return;
      }
    } else if (value === newValue) {
      return;
    }
    if (onChange) {
      onChange(newValue, reason);
    }
    setValue(newValue);
  };

  const selectNewValue = (option: any, reason = 'selectOption') => {
    let newValue = option;
    if (multiple) {
      if (!Array.isArray(value)) {
        newValue = [option];
      } else {
        if (value.some(val => isOptionEqualToValue(val, option))) {
          newValue = value.filter(val => !isOptionEqualToValue(val, option));
        } else {
          newValue = [...value, option];
        }
      }
    } else {
      if (isOptionEqualToValue(value, option)) {
        newValue = null;
      }
    }
    resetInputValue(newValue);
    handleValue(newValue, reason);
  };

  const defaultRenderOption = (
    option: any,
    state: AutocompleteRenderOptionState,
  ) => {
    const props: AutocompleteRenderOptionProps<any> = {
      key: state.index,
      selected: state.selected,
      value: option,
      label: getOptionLabel(option),
    };

    return (
      <Menu.Item
        key={props.key}
        onPress={() => handleOptionClick(option)}
        title={props.label}
        style={{
          backgroundColor: props.selected ? '#E9FBEA' : 'transparent',
        }}
      />
    );
  };

  const renderOption = renderOptionProp || defaultRenderOption;

  const renderAutocompletePopper = () => {
    if (filteredOptions.length === 0) {
      return <Menu.Item title="No option" disabled />;
    }

    return filteredOptions.map((option, idx) => {
      return renderOption(option, {
        index: idx,
        selected: multiple
          ? value!.some((val: any) => isOptionEqualToValue(val, option))
          : isOptionEqualToValue(option, value),
      });
    });
  };

  let autocompletePopper = null;
  autocompletePopper = renderAutocompletePopper();

  return (
    <View style={containerStyle}>
      <Text style={{marginBottom: 8, fontSize: 16}}>{label}</Text>
      <TextInput
        ref={inputRef}
        dense
        disabled={disabled}
        mode="outlined"
        placeholder={placeholder}
        value={inputValue}
        onChangeText={handleInputChange}
        onFocus={openMenu}
        onBlur={closeMenu}
        style={{
          backgroundColor: 'white',
        }}
        outlineStyle={{
          borderRadius: 8,
        }}
        right={<TextInput.Icon icon="chevron-down" />}
        {...InputProps}
      />
      <Menu
        visible={focused}
        onDismiss={closeMenu}
        contentStyle={{
          backgroundColor: 'white',
        }}
        anchor={
          <View
            style={{
              height: 2,
            }}
          />
        }>
        {autocompletePopper}
      </Menu>
      {helperText && (
        <HelperText
          type={error ? 'error' : 'info'}
          style={{marginTop: 2, paddingLeft: 0}}>
          {helperText}
        </HelperText>
      )}
    </View>
  );
};

export default Dropdown;
