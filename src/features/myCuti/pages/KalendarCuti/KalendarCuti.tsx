import React, {FC, Fragment} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Calendar, CalendarUtils} from 'react-native-calendars';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const INITIAL_DATE = new Date().toDateString();

const KalendarCuti: FC = () => {
  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const renderCalendarWithMultiDotMarking = () => {
    return (
      <Calendar
        style={styles.calendar}
        current={INITIAL_DATE}
        markingType={'multi-dot'}
        markedDates={{
          [getDate(2)]: {
            selected: true,
            dots: [
              {key: 'vacation', color: 'blue', selectedDotColor: 'red'},
              {key: 'massage', color: 'red', selectedDotColor: 'white'},
            ],
          },
          [getDate(3)]: {
            disabled: true,
            dots: [
              {key: 'vacation', color: 'green', selectedDotColor: 'red'},
              {key: 'massage', color: 'red', selectedDotColor: 'green'},
            ],
          },
        }}
      />
    );
  };

  const renderExamples = () => {
    return <Fragment>{renderCalendarWithMultiDotMarking()}</Fragment>;
  };

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView>{renderExamples()}</ScrollView>
    </SafeAreaView>
  );
};

export default KalendarCuti;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  switchText: {
    margin: 10,
    fontSize: 16,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16,
  },
  disabledText: {
    color: 'grey',
  },
  defaultText: {
    color: 'purple',
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  customDay: {
    textAlign: 'center',
  },
  customHeader: {
    backgroundColor: '#FCC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -4,
    padding: 8,
  },
  customTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  customTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BBF2',
  },
});
