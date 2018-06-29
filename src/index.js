import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import Title from './components/UI';
import './components/UI.css';
import {RealTime} from './components/Function';
import {ToDoList} from './components/Function';
import {News} from './components/Function';
import {Weather} from './components/Function';
import {Stocks} from './components/Function';

ReactDOM.render(
  <Title />,
  document.getElementById('root')
);

ReactDOM.render(
  <RealTime />,
  document.getElementById('Date')
);

ReactDOM.render(
  <ToDoList />,
  document.getElementById('List')
);

ReactDOM.render(
  <News />,
  document.getElementById('News')
);

ReactDOM.render(
  <Weather />,
  document.getElementById('Weather')
);

ReactDOM.render(
  <Stocks />,
  document.getElementById('Stocks')
);
