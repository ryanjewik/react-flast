import React, {useState, useEffect} from 'react'
import Main from './index';
import HomePage from './homepage';
import { Link } from 'react-router-dom';
function App(){

    const [data, setData] = useState([{}])
    useEffect(() => {
      fetch("/members").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
      
    }, [])
    return (
      <div>
        {/*
        {(typeof data.members ==='undefined') ? (
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )}
        
        <Link to ="/homepage">
          <button variant = "outlined">
            homepage
          </button>
        </Link>
        */}
        <Main />
        
      </div>
      
    )
}
export default App
