import { Component } from "react"
import { Monster } from "../../FunctionalComponentApp"
import FunctionalMonsterList from "./FunctionalMonsterList"

type TileProps = {
    monster: Monster
};

const FunctionalMonsterTile = ({monster}: TileProps) => {
    const {id, name, email} = monster;
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