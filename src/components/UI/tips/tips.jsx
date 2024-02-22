
import React from "react";
import cancellIcon from '../../../assets/cancell.svg'
import cl from './tips.module.scss'
export default function Tips(props) {
    return (
        <div className={cl.tips} onClick={()=>{props.onClear(props.value)}}>
            {props.value}
            <img src={cancellIcon} alt="" />
        </div>
    )
}