// Entry point of a react App
//The following two are the critical reasons why react works
import React from 'react';
//import ReactDOM from 'react-dom/client'; //different tools that help build web applications
//In the update: ReactDOM is not exporting render directly
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import FunctionalComponentApp from './FunctionalComponentApp';
import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode> 
    {/*StrictMode makes sure that its using not deprecated things
    Best Practice, catches weird behaviour in additional calls */}
    <App />
    {/* <FunctionalComponentApp/> */}
  </React.StrictMode>
  
)

reportWebVitals();
