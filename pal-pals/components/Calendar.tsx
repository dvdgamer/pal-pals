import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Calendar(): JSX.Element {
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <View>
      <Button title="What's their birthdate ?" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={(event: any, selectedDate: any) => {
            const currentDate = selectedDate || startDate;
            setStartDate(currentDate);
            setShowDatePicker(false);
          }}
        />
      )}
      <Text>Your friend's birthday is:</Text>
      <Text style={{ fontWeight: 'bold' }}>{startDate.toDateString()}</Text>
    </View>
  );
};
































// This doesn't work


// import { getMonth, getYear } from "date-fns";
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import range from "lodash/range";
// import { View, Button } from "react-native";

// export default function Calendar(): JSX.Element {
//   const [startDate, setStartDate] = useState(new Date());

//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const years = range(1920, getYear(new Date()) + 1, 1);
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   return (
//     <View>
//       <Button title="Show date picker" onPress={() => setShowDatePicker(true)} />
//       {showDatePicker && (
//       <DatePicker
//         renderCustomHeader={({
//           date,
//           changeYear,
//           changeMonth,
//           decreaseMonth,
//           increaseMonth,
//           prevMonthButtonDisabled,
//           nextMonthButtonDisabled,
//         }) => (
//           <div
//             style={{
//               margin: 10,
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
//               {"<"}
//             </button>
//             <select
//               value={getYear(date)}
//               onChange={({ target: { value } }) => changeYear(Number(value))}
//             >
//               {years.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>

//             <select
//               value={months[getMonth(date)]}
//               onChange={({ target: { value } }) =>
//                 changeMonth(months.indexOf(value))
//               }
//             >
//               {months.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>

//             <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
//               {">"}
//             </button>
//           </div>
//         )}
//         selected={startDate}
//         onChange={(date) => setStartDate(date || new Date())}
//       />
//     )}
//     </View>
//   );
// };
