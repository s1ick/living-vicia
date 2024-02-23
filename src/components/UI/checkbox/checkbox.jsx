import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';
const CheckboxWithLabel = ({ checkboxText, checked, onChange }) => {
    return (
        <>
            <FormControlLabel control={<Checkbox 
            onChange={onChange} 
            checked={checked}
            sx={{
          color: green[900],
          '&.Mui-checked': {
            color: green[300],
          },
        }} />} label={checkboxText} />
        </>
    )
}
export default CheckboxWithLabel;