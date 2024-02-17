
import React, { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CheckboxWithLabel from '../checkbox/checkbox';
const Dropdown = ({ title, checkbox }) => {

    const [checkboxText, setCheckboxSet] = useState('sdf')
    const [checked, setChecked] = useState(false)

    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    {title}
                </AccordionSummary>
                <AccordionDetails>
                    {checkbox.map(item => (
                        <CheckboxWithLabel
                            checkboxText={item.text}
                            checked={item.checked}
                            key={item.id} />
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default Dropdown;