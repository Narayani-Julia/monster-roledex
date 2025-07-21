//Impure: same parameters, result in different outputs depending on external factors
//Pure: Parameter deChanges another variable outside of the function scope

import { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import FunctionalMonsterList from './functionalComponents/card-list/FunctionalMonsterList';
import FunctionalSearchBox from './functionalComponents/search-box/functional-search-box.component';

//For a functional component, you do not have:
// - Render: these components ae m, constructor, lifeCycle Methods
const FunctionalComponentApp = () => {
        //States are declared at the top
        //Use setField instead of this.setState
        const [searchField, setSearchField] = useState(''); //value, setValue()
        const[monsters, setMonsters] = useState([]);
        const [filteredMonsters, setFilteredMonsters] = useState(monsters);

        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users)=>setMonsters(users)) 
        }, []);

        //If useEffect modifies something that is depends on, it forms a recursive loop
        useEffect(()=>{
          //For some reason it was giving me an error because I did not put a return in there. I wonder why
                const newFilteredMonsters = monsters.filter((monster)=> {return monster.name
                .toLowerCase()
                .includes(searchField)});
                setFilteredMonsters(newFilteredMonsters);
            }, [monsters, searchField]);
        //JS will re-render/call this functional component again everytime this function is called
        //render: state or props change
        //Everything except useState will run again. UseState only runs if parameters sent to it are changed
          
        const OnStringChange = (event)=> 
          {
          setSearchField(event.target.value);
          }

    return(
        <div className = 'App'>
        <h1 className = 'app-title'>Monsters Rolodex</h1>
        <FunctionalSearchBox searchBoxName = 'search-monsters' searchBoxPlaceHolder = 'search monsters' 
        onChangeHandler = { OnStringChange }/>
        <FunctionalMonsterList monsters = {filteredMonsters}/> 
        </div>
    );
  };
export default FunctionalComponentApp;
