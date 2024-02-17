import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const CheckboxWithLabel = ({ checkboxText, checked }) => {
    return (
        <>
            <FormControlLabel control={<Checkbox defaultChecked={checked} />} label={checkboxText} />
        </>
    )
}
export default CheckboxWithLabel;