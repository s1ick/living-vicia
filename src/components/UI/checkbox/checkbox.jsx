import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const CheckboxWithLabel = ({ checkboxText, checked, onChange }) => {
    return (
        <>
            <FormControlLabel control={<Checkbox onChange={onChange} checked={checked} />} label={checkboxText} />
        </>
    )
}
export default CheckboxWithLabel;