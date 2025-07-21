import { Component } from "react"
import MonsterTile from "./MonsterTile";
import './card-list.styles.css'

class MonsterList extends Component{
    render(){
        //This is how you destructure the given parameters passed to the class
        const {monsters} = this.props
    return(
        <div className = "card-list">
            {monsters.map((monster) => 
            <MonsterTile key = {monster.id} monster = {monster}/>)}
        </div>
    )
    }
}
export default MonsterList;