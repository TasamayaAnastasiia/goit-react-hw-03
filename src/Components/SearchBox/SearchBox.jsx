import style from '../SearchBox/SearchBox.module.css';

const SearchBox = ({onSearch}) => {
    return (
        <div className={style.boxForSeacrh}>
            <label>Finf contacts by name</label>
            <input onChange={onSearch} type="text" name="search"/>
        </div>
    );
}
export default SearchBox;