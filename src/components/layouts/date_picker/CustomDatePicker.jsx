import React, {useState} from 'react';
import './CustomDatePicker.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = () => {
    const [startDate, setStartDate] = useState();

    return (
        <>
            <DatePicker
                todayButton = 'Current Year'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText='Select Date'
                showYearPicker
                dateFormat="yyyy"
            />
        </>
    );
};

export default CustomDatePicker;