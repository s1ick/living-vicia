import { useState } from "react";
import Dropdown from "../UI/dropdown/dropdown";
import cl from './sidebar.module.scss'
const Sidebar = () => {
    const [title, setTitle] = useState('Default Title');
    const [checkbox, setCheckbox] = useState([])

    const classification = [
        { id: 0, text: '100% Indica', checked: true },
        { id: 1, text: '100% Sativa', checked: false },
        { id: 2, text: '>50% Indica', checked: true },
        { id: 3, text: '>50% Sativa', checked: false },

    ];

    const ProductionMethod = [
        { id: 0, text: 'Indoor', checked: true },
        { id: 1, text: 'Outdoor', checked: false },
        { id: 2, text: 'Greenhouse', checked: false },
        { id: 3, text: 'Light Deprivation', checked: false },
        { id: 4, text: 'Mixed Light', checked: false },
        { id: 5, text: 'Other', checked: false },
    ]

    const Size = [
        { id: 0, text: 'Flower', checked: true },
        { id: 1, text: 'Pre-Roll Flower', checked: false },
        { id: 2, text: 'Pre-Roll Infused', checked: false },
        { id: 3, text: 'Pre-Roll Leaf', checked: false },
        { id: 4, text: 'Shake', checked: false },
        { id: 5, text: 'Smalls', checked: false },
        { id: 6, text: 'Trim', checked: false },
        { id: 7, text: 'Shake', checked: false },
        { id: 8, text: 'Keef', checked: false },
        { id: 9, text: 'Fresh Frozen', checked: false },

    ]


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