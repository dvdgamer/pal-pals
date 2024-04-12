// // This works but the callendar is automatically launched

// import { getMonth, getYear } from "date-fns";
// import React, { useState } from "react";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import range from "lodash/range";

// export default function Calendar(): JSX.Element {
//   const [startDate, setStartDate] = useState(new Date());
//   const years = range(1990, getYear(new Date()) + 1, 1);
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
//     <DateTimePicker
//       value={startDate}
//       mode="date"
//       display="default"
//       onChange={(event: any, selectedDate: any) => {
//         const currentDate = selectedDate || startDate;
//         setStartDate(currentDate);
//       }}
//     />
//   );
// };


import { getMonth, getYear } from "date-fns";
import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import range from "lodash/range";

export default function Calendar(): JSX.Element {
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <View>
      <Button title="Add their birthdate" onPress={() => setShowDatePicker(true)} />
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
