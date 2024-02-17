import styles  from './search.module.scss';
import searchIcon from "../../../assets/search.svg";
const Search = () => {
    return (
        <div className={styles.search}>
            <img src={searchIcon} alt="searchIcon" />
            <input type="text" placeholder="Search for a product, flower, etc" />
        </div>
    )
}
export default Search;