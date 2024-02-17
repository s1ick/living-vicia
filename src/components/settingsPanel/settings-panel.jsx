import { useState } from "react";
import RangeSlider from "../UI/range-slider/range-slider";
import Tips from "../UI/tips/tips";
import cl from "./settings-panel.module.scss"
const SettingsPanel = () => {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(100)
    const [suffix, setSuffix] = useState('%')
    const [visibleMin, setVisibleMin] = useState(false)
    const [label, setLabel] = useState('')
    
    const [tipsProps, setTipsProps] = useState('')

    return (
        <div>
            <div className={cl.wrapper}>        
                <RangeSlider
                    minValue={234}
                    maxValue={9999}
                    suffix={'$'}
                    visibleMin={true}
                    label={'Price Range'}
                />
               <RangeSlider
                    label={'ТНС, %'}
                />
                <RangeSlider
                    label={'CBD, %'}
                />
            </div>
            <div className={cl.tipsWrapper}>
                <div>
                1034,5 Results
                </div>
                <Tips tipsProps={123}  />
            </div>
        </div>
    )
}
export default SettingsPanel;