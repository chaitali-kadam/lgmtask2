import classes from './App.css';
import logo from './Capture.PNG';
import React, { useState} from 'react';

const App = () => {
  const [isDataLoad, setisDataLoad] = useState(false);
  const [users, setUsers] = useState([]);
  const [isBtnClicked, setisBtnClicked] = useState(false);

  const loadUsers = async () => {
    setisBtnClicked(true);
    const response = await fetch('https://reqres.in/api/users?');
    const res = await response.json();
    // console.log(res)
    setUsers(res.data);
    setInterval(() => {
      setisDataLoad(true);
    }, 2000);
  }
  return ( 
    <>
     <div className="App">
    <header className="App-header">
        <nav className = {classes.Topbar}>
        <img src = {logo} alt ="logo" width="140px" height="60px" style={{marginLeft:"40px"}}></img> 
         <button className="Get-user" onClick={loadUsers}><b> Get Users </b></button> 
      </nav>
      </header>
    {
      isBtnClicked ? (
        isDataLoad ? ( 
          <div className="row">
          {users?.map((current, index) => {
            return (
              <div className="card column" key={index}>
                <img src={current.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title">
                    {current.first_name} {current.last_name}
                  </h3>
                  <h4 className="card-text">{current.email}</h4>
                </div>
              </div>
            );
          })}
        </div>
     
        ) : (
          <div className ="loader">
          </div>
        )
      ) : ( 
        <section > 
        </section>
      )
    } 
    </div>
    </>
    
  );
}
export default App;