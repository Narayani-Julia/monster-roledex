import { Component } from 'react'; 
//render only when a new object is created. thus useState needs functions
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import MonsterList from './components/MonsterList';
// JSX is syntactic sugar. jsx is a syntax extension of js, they extended js stuff to create html objects
//function 
//explicitly telling react the render

//Constructor, render, mounts, re-renders because state changes(props will be affected), or when a new props are created too!
//Class is run once, render runs everytime

class App extends Component {

  constructor(){
    super();
    this.state = {
      //json object
      name:{
      firstName: 'Hein Ptet',
      lastName: 'Pyi Soe'
      },
      monsters: [
      ],
      searchField: ''
    };
  }

  //lifecycle methods
  //usually for data fetching
    //runs the first time = mounted. once react is created
    componentDidMount(){
      //promise that some data will come back
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users)=>this.setState(()=>{
        return {monsters: users}
      }, ()=>{}))
    }

    OnWelcomeButtonClicked = () =>{
            // setState is a shallow merge, it only changes the keys with the same value, overriting the previous structure.*/
              // /* Updates happen asynchronously. React optimizes the renders amd stacks things together 

          this.setState(()=>{ //setState means render will be called again
            return {
              name:{firstName:'Ryan', lastName:'Chen'},
            }
          }, ()=>{
            ///call back: runs after state is changed and there is a re-render
          })
    }

    OnSearchChange = (event)=> //javascript sees there is a function and it creates this function.
          {
            console.log("search first");
          const searchField = event.target.value.toLowerCase();
          this.setState(()=>{
          // Key is name of variable, value is value of the variable
          return {searchField};
          });
          };

    render(){
      console.log("rendered")
      //Best practice: Just to make code more readable
      const {monsters, searchField} = this.state
      const {firstName, lastName} =this.state.name
      const {OnSearchChange} = this //You can't say this.state for functions!!
      const {OnWelcomeButtonClicked} = this

      const filteredMonsters = monsters //Want to filter from the full list
      .filter((monster)=>{ return monster.name
      .toLowerCase()
      .includes(searchField);}) //using the state variable here
      
      return (
        //when you render make sure ypu render just one parent component
    <div className="App"> 
      {/*classname is used here coz jsx has a class keyword already defined*/}
      <header className="App-header">
        <h4>
          Hi {firstName} {lastName}!
        </h4>
        <button className = 'welcome-button' onClick={OnWelcomeButtonClicked}>Change Name
        </button>
        <h1 className = 'app-title'>Monsters Rolodex</h1>
        {/* Best practice => Mutability: to use a non-modifying function */}
        <SearchBox searchBoxName = 'search-monsters' searchBoxPlaceHolder = 'search monsters' 
        onChangeHandler = { //defining a function, would mean that every single time render is called, it is created and then thrown away
          OnSearchChange //Anonymous function is one that gets defined in here instead of being made a class function. This is not good. 
          }/>
          
        <MonsterList monsters = {filteredMonsters}/> 
        {/* Components render: props are re-rendered, and when set-state is called. This is the unidirectional flow, the tree*/}
      </header>
    </div>
  )
  }
}

export default App;

        /**

 */