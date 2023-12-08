import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import MenuAction from './context/MenuAction';
import GraphAction from './context/Graph/GraphAction';
import PeopleAction from './task/context/action';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GraphAction>
      <MenuAction>
        <PeopleAction>
        <App />
        </PeopleAction>
   
  </MenuAction>
  </GraphAction>


 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
