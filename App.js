import { useEffect, useState } from "react";
import './App.css'
const App=()=>{   
    const[users,setUsers]=useState([]);
  
    useEffect(()=>{
        
     fetchData();
    },[]); 

    const handleClick=()=>{
       fetchData();
    }
    
    const fetchData=()=>{        
        fetch("https://randomuser.me/api/")
        .then((response) => response.json())
            .then((data) => { 
                setUsers(data.results);   
                           
            });        
    }
    return(
        <>
            <h1>App Component</h1>
           
            <input type="button" className="btn" value="Fetch Data" onClick={handleClick} />
            
            {
                 users.map((user,i)=>{return(
                    <div key={i} className="box">
                      
                       <div className="file1">
                       <h2 className="head2">Name: &nbsp; {user.name.title}{user.name.first}{user.name.last}</h2>
                        
                        <img src={user.picture.large} alt={user.name.first} /><br />
                       </div>
                       
                        <div className="file2">
                         
                         <h3> Age: &nbsp;{user.dob.age} </h3><br />
                          <h3> Gender:&nbsp; {user.gender}</h3> <br />
                          <h3> Email:&nbsp; {user.email}</h3> <br />
                          <h3>Country:&nbsp; {user.location.country} </h3><br />
                          <h3>Phone: &nbsp;  {user.phone}</h3><br/>
                          <h3>Password: &nbsp;  {user.login.password}</h3>
                          </div>
                        
                        <hr />
                    </div>
                 )})
            }
        </>
    );  
}
export default App;