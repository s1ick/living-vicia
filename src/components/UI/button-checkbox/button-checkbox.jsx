import { Button } from "@mui/material";
import React from "react"
import { Camera } from 'lucide-react';
import cl from './button-checkbox.module.scss'
import chroma from "chroma-js";

const ButtonCheckBox = ({buttonText, butonColor}) => {
    return (
        <div>
            <Button className={cl.button} onClick={e=> {
                e.target.classList.toggle('active')
                butonColor = chroma.random().hex();
                console.log(butonColor)
                }}>
                <Camera color={butonColor} size={16} />
                {buttonText}
            </Button>
        </div>
    )
}

export default ButtonCheckBox;