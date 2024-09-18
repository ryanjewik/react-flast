import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { InputField } from "./inputfield";
import ChatPage from './chatpage';
import HomePage from './homepage';

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const Main = () => {
  return(
    <Routes>
      <Route exact path="/homepage" element={<HomePage/>}></Route>
      <Route exact path="/chatpage" element={<ChatPage/>}></Route>
    </Routes>
  )
}
export default Main;
