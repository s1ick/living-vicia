import { useState } from "react";
import Dropdown from "../UI/dropdown/dropdown";
import cl from './sidebar.module.scss'
import { classification, ProductionMethod, Size } from '../../data'
const Sidebar = () => {
    const [title, setTitle] = useState('Default Title');
    const [checkbox, setCheckbox] = useState([]);



    return (
        <div className={cl.sidebar}>


            <Dropdown
                title={'Classification'}
                checkbox={classification}
            />
            <Dropdown
                title={'ProductionMethod'}
                checkbox={ProductionMethod}
            />
            <Dropdown
                title={'Size'}
                checkbox={Size}
            />
        </div>
    )
}
export default Sidebar;