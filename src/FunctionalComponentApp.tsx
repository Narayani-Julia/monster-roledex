//Impure: same parameters, result in different outputs depending on external factors
//Pure: Parameter deChanges another variable outside of the function scope

import { Component } from 'react'; 
import './App.css';
import { getData } from './utils/data.util';
import { useState, useEffect, ChangeEvent } from 'react';
import FunctionalMonsterList from './functionalComponents/card-list/FunctionalMonsterList';
import FunctionalSearchBox from './functionalComponents/search-box/functional-search-box.component';

export type Monster = {
  id: string;
  name: string;
  email: string;
}
//For a functional component, you do not have:
// - Render: these components ae m, constructor, lifeCycle Methods
const FunctionalComponentApp = () => {
        //States are declared at the top
        //Use setField instead of this.setState
        const [searchField, setSearchField] = useState(''); //value, setValue()

        //setting a parameter as [] is not typesafe since we dont know the type. so ts has an error message shown if later on in the code it updates this empty array
        //never is a datatype
        const[monsters, setMonsters] = useState<Array<Monster>>([]);
        const [filteredMonsters, setFilteredMonsters] = useState(monsters);

        useEffect(()=>{
            // fetch('https://jsonplaceholder.typicode.com/users')
            // .then((response) => response.json())
            // .then((users)=>setMonsters(users)) 
            const fetchUsers = async() =>{
              //Array<datatype> = array
              //datatype[]
              const users = await getData<Array<Monster>>('https://jsonplaceholder.typicode.com/users');
              setMonsters(users);
              //never keyword: is opposite of not any datatype
            };
            fetchUsers();
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
          
        const OnStringChange = (event: ChangeEvent<HTMLInputElement>):void => 
          {
            setSearchField(event.target.value.toLowerCase());
          };

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
