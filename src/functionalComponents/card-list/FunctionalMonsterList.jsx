import { Component } from "react"
import './functional-card-list.styles.css'
import FunctionalMonsterTile from "./FunctionalMonsterTile"

/*
Syntax: 
const <functional component name> = ({}) => {<statements>; return ();} export default <functional component name>
if implicit return: 
const <functional component name> = ({}) => (); export default <functional component name>
*/

const FunctionalMonsterList = ({monsters}) => (
    //You don't need to say this.props for these functional components
    //Can be an implicit return
        <div className = "functional-card-list">
            {monsters.map((monster) => 
            //For lists you need a key to reference the elements
            <FunctionalMonsterTile key = {monster.id} monster = {monster}/>)
            }
        </div>
);
export default FunctionalMonsterList;