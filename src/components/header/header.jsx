import cl from './header.module.scss';
import Search from "../UI/search/search";
import ButtonCheckBox from '../UI/button-checkbox/button-checkbox';
import { useState } from "react";

const Header = () => {
const [buttonText, setButtonText] = useState('');
const [butonColor, setbutonColor] = useState('');
    return (
        <div className={cl.header}>
            <div className={cl.header__logo}>Marketplace</div>
            <Search />
            <ButtonCheckBox butonColor={'red'} buttonText={'Edible'} />
            <ButtonCheckBox butonColor={'yellow'} buttonText={'Buds'} />
            <ButtonCheckBox butonColor={'#fff'} buttonText={'Non Edible'} />
            <ButtonCheckBox butonColor={'teal'} buttonText={'Concentrate'} />
        </div>
    )
}
export default Header;