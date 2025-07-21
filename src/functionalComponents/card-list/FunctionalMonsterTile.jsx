import { Component } from "react"
import './functional-card.styles.css'

const FunctionalMonsterTile = ({monster: {id, name, email}}) => {
    return (
    <div className = 'functional-card-container' key = {id}>
            
            <img 
            alt = {`monster ${name}`}
            src = {`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
    </div>
    )
}
export default FunctionalMonsterTile; //If you dont try to destructure the file in order to access other things, give em this component