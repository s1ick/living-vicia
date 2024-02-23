import { useState } from "react";
import React from "react";
import RangeSlider from "../UI/range-slider/range-slider";
import Tips from "../UI/tips/tips";
import cl from "./settings-panel.module.scss"
import { Value } from "sass";
import { MarketplaceContext } from "../../pages/Marketplace";
import { render } from "react-dom";
const SettingsPanel = () => {

    const marketplaceContext = React.useContext(MarketplaceContext)
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(100)
    const [suffix, setSuffix] = useState('%')
    const [visibleMin, setVisibleMin] = useState(false)
    const [label, setLabel] = useState('')

    const [tipsProps, setTipsProps] = useState('')

    function myTips(arr) {
        let newMyTips = [];
        for (const el of arr) {
            if (el.checked === false) {
                newMyTips.push(el.text)
            }
        }
        return newMyTips
    }

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
                <div className={cl.results}>
                    {marketplaceContext.filters.filters.chips.length} Results
                </div>
                {marketplaceContext.filters.filters.chips.map(chip => {
                    return <Tips
                        value={chip}
                        onClear={marketplaceContext.onChipsChange}
                    />
                })}

            </div>
        </div>
    )
}
export default SettingsPanel;