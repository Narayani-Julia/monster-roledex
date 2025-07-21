import { Component } from "react";
//When you import a styles.css file, other components will be affected even if they are outside the file because react creates a centralized single css file at the end, css bundle
import './search-box.styles.css'

export default class SearchBox extends Component{
    render(){
        const {onChangeHandler, searchBoxName, searchBoxPlaceHolder} = this.props
        return(
            // Having search-box there allows all searchboxes to have the 
            // same properties when you reference it in the css file
            <input className = {`search-box ${searchBoxName}`}
             type= 'search'
             placeholder = {searchBoxPlaceHolder}
             onChange = {onChangeHandler}
             />
        );
    }
}