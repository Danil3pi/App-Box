import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let navData = [
  {to: "/MyProfile", iconClass: "fas fa-user-alt", nameLink: "Profile"},
  {to: "/Friends", iconClass: "fas fa-users", nameLink: "Friends"},
  {to: "/Messages", iconClass: "far fa-comment-dots", nameLink: "Messages"},
  {to: "/News", iconClass: "far fa-newspaper", nameLink: "News"},
  {to: "/Applications", iconClass: "fas fa-rocket", nameLink: "Apps"},

];

ReactDOM.render(
  <React.StrictMode>
    <App nav={navData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
