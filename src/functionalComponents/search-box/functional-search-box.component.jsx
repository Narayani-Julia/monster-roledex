import './functional-search-box.styles.css'

const FunctionalSearchBox = ({onChangeHandler, searchBoxName, searchBoxPlaceHolder}) =>(
        <input className = {`functional-search-box ${searchBoxName}`}
        type= 'search'
        placeholder = {searchBoxPlaceHolder}
        onChange = {onChangeHandler}
        />
    );
export default FunctionalSearchBox;