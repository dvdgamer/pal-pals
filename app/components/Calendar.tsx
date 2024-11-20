import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

type CalendarProps = {
  onDateChange: (date: Date) => void;
};

export default function Calendar({ onDateChange }: CalendarProps): JSX.Element {
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event:any, selectedDate: any) => {
    const currentDate = selectedDate || birthdate;
    setBirthdate(currentDate);
    setShowDatePicker(false);
    onDateChange(currentDate);
  };

  return (
    <View>
      <Button title="What's their birthdate ?" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={birthdate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <Text>Your friend's birthday is:</Text>
      <Text style={{ fontWeight: 'bold' }}>{birthdate.toDateString()}</Text>
    </View>
  );
};
