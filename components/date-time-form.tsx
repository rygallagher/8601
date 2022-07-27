/* eslint-disable react/jsx-key */
import { FormControl, FormLabel, Select, Flex } from "@chakra-ui/react";

export const Months = [
  {value: 1, text: 'January'},
  {value: 2, text: 'February'},
  {value: 3, text: 'March'},
  {value: 4, text: 'April'},
  {value: 5, text: 'May'},
  {value: 6, text: 'June'},
  {value: 7, text: 'July'},
  {value: 8, text: 'August'},
  {value: 9, text: 'September'},
  {value: 10, text: 'October'},
  {value: 11, text: 'November'},
  {value: 12, text: 'December'},
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export function DateTimeForm() {
  const today = new Date();
  let daysInMonth = getDaysInMonth(today.getFullYear(), today.getMonth());

  const years = Array.from({length: 400}, (_v,k) => (1800 + k));
  const months = [...Months];
  const days = Array.from({length: daysInMonth}, (_v,k) => k);
  const hours = Array.from({length: 24}, (_v,k) => k);
  const minutes = Array.from({length: 60}, (_v,k) => k);;
  const seconds = Array.from({length: 60}, (_v,k) => k);

  const yearOptions = years.map((option: number) => <option value={option}>{option}</option>);
  const monthOptions = months.map((option: any) => <option value={option.value}>{option.text}</option>);
  const dayOptions = days.map((option: number) => <option value={option}>{option}</option>);
  const hourOptions = hours.map((option: number) => <option value={option}>{option}</option>);
  const minuteOptions = minutes.map((option: number) => <option value={option}>{option}</option>);
  const secondOptions = seconds.map((option: number) => <option value={option}>{option}</option>);

  return (
    <form>
      <Flex mb={5}>
        <FormControl mr={5}>
          <FormLabel>Year</FormLabel>
          <Select defaultValue={today.getFullYear()}>{yearOptions}</Select>
        </FormControl>

        <FormControl mr={5}>
          <FormLabel>Month</FormLabel>
          <Select defaultValue={today.getMonth()}>{monthOptions}</Select>
        </FormControl>

        <FormControl>
          <FormLabel>Day</FormLabel>
          <Select defaultValue={today.getDate()}>{dayOptions}</Select>
        </FormControl>
      </Flex>
      
      <Flex mb={5}>
        <FormControl mr={5}>
          <FormLabel>Hours</FormLabel>
          <Select defaultValue={today.getHours()}>{hourOptions}</Select>
        </FormControl>

        <FormControl mr={5}>
          <FormLabel>Minutes</FormLabel>
          <Select defaultValue={today.getMinutes()}>{minuteOptions}</Select>
        </FormControl>

        <FormControl>
          <FormLabel>Seconds</FormLabel>
          <Select defaultValue={today.getSeconds()}>{secondOptions}</Select>
        </FormControl>
      </Flex>
    </form> 
  ); 
}

  