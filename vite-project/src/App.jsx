// import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'
// import IndexPage from './pages/IndexPage.jsx';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

function App() {

  return (
    <Routes>
      <Route path='/' element = {<Layout/>}>
      <Route path='/' element= {<IndexPage/>}/>
      <Route path='/login' element = {<LoginPage/>}/>
      <Route path='/register' element = {<RegisterPage/>}/>
      </Route>
    </Routes>  
  )
}

export default App;

//steps to start this project
// npm create vite@latest
// npm create vite@latest my-project -- --template react

//cd vite-project
//npm install
//npm run dev
//npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init -p
//npm i react-router-dom
//npm install react-router-dom
//npm install -g create-react-app  