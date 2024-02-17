import cl from './header.module.scss';
import Search from "../UI/search/search";
import ButtonCheckBox from "../UI/button-checkbox/button-checkbox";

const Header = () => {
    return (
        <div className={cl.header}>
            <div className={cl.header__logo}>Marketplace</div>
            <Search />
            <ButtonCheckBox />
        </div>
    )
}
export default Header;