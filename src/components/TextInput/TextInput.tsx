import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {TextInput, TextInputProps, HelperText, Text} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

interface IpisTextInputProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  icon?: IconSource;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  onChangeText?: (text: string) => void;
  InputProps?: TextInputProps;
  containerStyle?: StyleProp<ViewStyle>;
}

const IpisTextInput: React.FC<IpisTextInputProps> = ({
  label,
  placeholder,
  helperText,
  icon,
  value,
  disabled,
  error,
  onChangeText,
  InputProps,
  containerStyle,
}) => {
  return (
    <View style={containerStyle}>
      {label && <Text style={{marginBottom: 8, fontSize: 16}}>{label}</Text>}
      <TextInput
        dense
        disabled={disabled}
        mode="outlined"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{
          backgroundColor: 'white',
        }}
        outlineStyle={{
          borderRadius: 8,
        }}
        right={icon ? <TextInput.Icon icon={icon} /> : null}
        {...InputProps}
      />
      {helperText && (
        <HelperText
          type={error ? 'error' : 'info'}
          style={{marginTop: 4, paddingLeft: 0}}>
          {helperText}
        </HelperText>
      )}
    </View>
  );
};

export default IpisTextInput;
