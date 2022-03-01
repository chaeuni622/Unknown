import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from "jquery";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let mode = 'light';

function setTheme(theme) {
  mode = theme;
  document.body.dataset.theme = theme;
}

setTheme('light');

const btn = document.querySelector('i');

btn.addEventListener('click', () => {
  const nextMode = mode === 'light' ? 'dark' : 'light';
  setTheme(nextMode);
});

var i = 0;
$('.bi-brightness-low-fill').on('click',function() {
  if(i === 0){
    $(this).removeClass('bi-brightness-low-fill');
    $(this).addClass('bi-sun-fill');
    i++;
  } else if(i === 1) {
    $(this).removeClass('bi-sun-fill');
    $(this).addClass('bi-brightness-low-fill');
    i--;
  }
});

reportWebVitals();