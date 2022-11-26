import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Counter from "./Counter";

const App = () => <div><Counter/></div>

ReactDOM.render(<App/>, document.querySelector('#root'));