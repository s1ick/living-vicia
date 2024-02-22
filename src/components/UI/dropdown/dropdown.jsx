
import React, { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CheckboxWithLabel from '../checkbox/checkbox';
import { MarketplaceContext } from "../../../pages/Marketplace";
const Dropdown = ({ title, checkbox }) => {

    const [checkboxText, setCheckboxSet] = useState('sdf')
    const [checked, setChecked] = useState(false)
    const marketplaceContext = React.useContext(MarketplaceContext)
    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    {title}
                </AccordionSummary>
                <AccordionDetails>


                    {checkbox.map(item => (
                        <CheckboxWithLabel
                            checkboxText={item.text}
                            checked={marketplaceContext.filters.filters.chips.indexOf(item.text) > -1}
                            key={item.id}
                            onChange={() => {
                                marketplaceContext.onChipsChange(item.text)
                            }}
                        />
                    ))}



                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default Dropdown;