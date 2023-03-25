import { useState, useMemo, useEffect } from 'react';
import { format, parse } from 'date-fns';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { Body, Container, DatetimeText, Title } from './styles';

type DateState = Date | undefined;

type Props = {
  title: string;
  mode: 'date' | 'time';
  onDateChange?: (date: string) => void;
  defaultValue?: string;
}

export const DateTimeInput = ({ title, mode, onDateChange = () => { }, defaultValue }: Props) => {
  const [selectedDate, setSelectedDate] = useState<DateState>();
  const [show, setShow] = useState(false);

  const formattedDate = useMemo(() => {
    if (!selectedDate) {
      return null;
    }
    if (mode === 'date') {
      return format(selectedDate, 'dd.MM.yyyy');
    }
    if (mode === 'time') {
      return format(selectedDate, 'HH:mm');
    }
  }, [selectedDate]);

  const onChange = (_: DateTimePickerEvent, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate;
    setShow(false);
    setSelectedDate(currentDate);
  };

  useEffect(() => {
    if (formattedDate) {
      onDateChange(formattedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (!defaultValue) return;
    if (mode === 'date') {
      setSelectedDate(parse(defaultValue, 'dd.MM.yyyy', new Date()))
    }
    if (mode === 'time') {
      setSelectedDate(parse(defaultValue, 'HH:mm', new Date()))
    }
  }, [defaultValue]);

  return (
    <Container onPress={() => setShow(prev => !prev)}>
      <Title>
        {title}
      </Title>
      <Body>
        <DatetimeText>
          {formattedDate}
        </DatetimeText>
      </Body>
      {show && (
        <DateTimePicker
          value={selectedDate ? selectedDate : new Date()}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </Container>
  )
};
