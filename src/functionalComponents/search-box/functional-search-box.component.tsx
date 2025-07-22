import './functional-search-box.styles.css'
import { ChangeEvent } from 'react'; //(a:string)=>void;

//the parameter names has to be the same as the parameters you put for the props
type SearchBoxProps = {
    searchBoxName: string;
    searchBoxPlaceHolder?: string;
    // ChangeEventHandler has a parameter that is passed to changeEvent
    //The htmlinput element helps us define to typescript we tell the library what the parameter type is
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FunctionalSearchBox = ({searchBoxName, searchBoxPlaceHolder, onChangeHandler}: SearchBoxProps) =>(
        <input className = {`functional-search-box ${searchBoxName}`}
        type= 'search'
        placeholder = {searchBoxPlaceHolder}
        //you need to get the event explicitly
        //react has a lot of types by default,
        onChange = {onChangeHandler}
        //^ For onChange, it is of type onchangeEventHandler
        />
);

export default FunctionalSearchBox;