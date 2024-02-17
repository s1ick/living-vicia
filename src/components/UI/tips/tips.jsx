
import React from "react";
import cancellIcon from '../../../assets/cancell.svg'
import cl from './tips.module.scss'
export default function Tips(tipsProps) {
    return (
        <div className={cl.tips}>
            {tipsProps.tipsProps}
            <img src={cancellIcon} alt="" />
        </div>
    )
}