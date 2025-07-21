import { Component } from "react"
import './card.styles.css'

class MonsterTile extends Component{
    render(){
    const {monster} = this.props
    const {id, name, email} = monster
    return (
    <div className = 'card-container' key = {id}>
            
            <img 
            alt = {`monster ${name}`}
            src = {`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
    </div>
    )
    }
}
export default MonsterTile; //If you dont try to destructure the file in order to access other things, give em this component