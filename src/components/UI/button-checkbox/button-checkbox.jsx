import { Button } from "@mui/material";
import React from "react"
import { Camera } from 'lucide-react';
import cl from './button-checkbox.module.scss'
import chroma from "chroma-js";
const ButtonCheckBox = ({buttonText, butonColor}) => {
    const [stateButtonColor, setStateButtonColor] = React.useState(butonColor)
    return (
        <div>
            <Button className={cl.button} style={{borderColor: stateButtonColor, color: stateButtonColor}} onClick={e=> {
                e.target.classList.toggle('active')
                setStateButtonColor(chroma.random().hex())
                }}>
                <Camera color={stateButtonColor} size={16} />
                {buttonText}
            </Button>
        </div>
    )
            }
export default ButtonCheckBox;