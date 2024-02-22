import React from 'react';
import Slider from '@mui/material/Slider';
import cl from './range-slider.module.scss';
function valuetext(value) {
  return `${value}°C`;
}
const RangeSlider = ({ minValue, maxValue, suffix, visibleMin }) => {
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={cl.wrapperSlider}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={undefined}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        size="27px"
        min={minValue}
        step={1}
        max={maxValue}
        sx={{
          width: 225,
          color: '#7acb22',
          '& .MuiSlider-thumb': {
            width: '16px',
            height: '16px',
            background: 'linear-gradient(150deg, #85d62d 0%, #6bab2b 100%)',
            boxShadow: 'inset 3px 5px 12px 0 rgba(255, 255, 255, 0.2), 0 10px 27px 0 rgba(30, 29, 46, 0.3)'
          },
          '& .MuiSlider-rail': {
            boxShadow: '0 3px 15px 0 rgba(132, 213, 44, 0.31)',
            opacity: 1,
            background: '#30303d'
          },
          '& .MuiSlider-valueLabel': {
            font: '400 16px var(--font-family)',
            backgroundColor: '#30303D',
            borderRadius: '3px',
            padding: '2px 5px',
            width: '51px',
            height: '26px',
            lineHeight: '26px',
            '&::before': {
            },
          },
        }}
      />
      <span className={cl.value}>
        {value}
      </span>
    </div>

  )
}
export default RangeSlider;