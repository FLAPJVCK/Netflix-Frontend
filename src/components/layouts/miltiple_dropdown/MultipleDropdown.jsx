import React from 'react';
import {Multiselect} from "multiselect-react-dropdown";
import './MultipleDropdown.css'

const MultipleDropdown = ({values, selectedValues}) => {
    return (
        <>
            <Multiselect
                isObject={false}
                options={values}
                selectedValues={selectedValues}
                showCheckbox
                placeholder={'Select Genre'}
                hidePlaceholder={true}
                showArrow={true}
                customArrow={<svg xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="#F65261"
                                  className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>}
            />
        </>
    );
};

export default MultipleDropdown;