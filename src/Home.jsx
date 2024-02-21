import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './home.css'
import Button from 'react-bootstrap/Button';

export default function Home() {

  const [indat,setIndat]=useState({
    empid:'',
    name:'',
    dob:'',
    age:"",
    dept:'',
    gender:'',
    salary:'',
   desg:''
  })
 
  const [dat,setDat]=useState([]);
  useEffect(() => {
    axios.get('https://emp-backend-1.onrender.com/')
        .then(response => {
            console.log('Response:', response.data);
            setDat(response.data);
        })
        .catch(err => console.log(err));
}, [dat,indat]);

  const hs = (e)=>{
    e.preventDefault();
    console.log(indat)
    axios.post('https://emp-backend-1.onrender.com/ser',indat)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
  }
  const de = (i) => {
    console.log(i);
    axios.delete('https://emp-backend-1.onrender.com/del', { data: { i } }) 
        .then(res => console.log(res))
        .catch(err => console.log(err));
};


  return <>
  <div className="mcon">
  <h1>Employee Registration</h1>
  <div className='con'>
   
         <form onSubmit={hs}>
<div className='form'>

  
<div>
    <h3>Emp ID:-</h3>
        <input type='number' placeholder='Emp ID' name='' className='form-control' onChange={(e)=>{
          setIndat({...indat,empid:e.target.value})
      }}></input>

     <h3>Name</h3>
           <input type='text' placeholder='Name' name='name' className='form-control' onChange={(e)=>{
               setIndat({...indat,name:e.target.value})
           }}></input>

    <h3>Department</h3>
    <select id="dept"  onChange={(e)=>{
      setIndat({...indat,dept:e.target.value})
    }}>
        <option value="IT">IT</option>
        <option value="Marketing">Marketing</option>
        <option value="Accounts">Accounts</option>
      </select>

      <div className="mi">
        <div className='im'>
          <label>Male
          <input  type='radio' value='Male'
          onChange={(e)=>{
            setIndat({...indat,gender:e.target.value})
          }}
          ></input>
          </label>
    </div>
    <div className='im' >
          <label>Female
          <input className='mf' type='radio' value='Female' onChange={(e)=>{
            setIndat({...indat,gender:e.target.value})
          }}
          ></input>
          </label> 
        </div>
          </div>
           
      
 
      
 </div>

    <div>
       
              <h3>Age:-</h3>
              <input type='number' placeholder='age' name='age' className='form-control' onChange={(e)=>{
                setIndat({...indat,age:e.target.value})
            }}></input>

    
     <h3>Date of Birth:-</h3>
            <input type='date' placeholder='date' name='dob' className='form-control' onChange={(e)=>{
                setIndat({...indat,dob:e.target.value})
            }}></input>

  
   <h3>Designation:-</h3>
        <input type='text' placeholder='Designation' name='Designation' className='form-control' onChange={(e)=>{
          setIndat({...indat,desg:e.target.value})
      }}></input>
      
       <h3>Salary:-</h3>
        <input type='number' placeholder='Salary' name='salary' className='form-control' onChange={(e)=>{
          setIndat({...indat,salary:e.target.value})
      }}></input>
   
   </div>
   
       
      </div>
      <div className='btn'>
      <Button variant="dark" type='submit'>Submit</Button>
      </div>
      
    </form>
  </div>



  <div>
    <h1 className='sh'>Employee Details</h1>
    <table className='table'>
      <thead>
    <tr>
      <th>EmpID</th> 
      <th>Name</th>
      <th>Department</th>
      <th>DOB</th>
      
      <th>age</th> 
      <th>Designation</th>
      <th>Gender</th> 
      <th>Salary</th> 
      <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {dat.map((con, i) => {
    return (
        <tr key={i} style={{ backgroundColor: i % 2 === 1 ? 'rgb(2, 2, 251,0.6)' : '' }}>
            <td>{con.empid}</td>
            <td>{con.name}</td>
            <td>{con.dept}</td>
            <td>{con.dob.slice(0, 10)}</td>
            <td>{con.age}</td>
            <td>{con.desg}</td>
            <td>{con.gender}</td>
            <td>{con.salary}</td>
            <td><button onClick={() => de(con.empid)}>Delete</button></td>
        </tr>
    );
})}
      
    </tbody>
    </table>
  </div>
  </div>
  </>
    
  
}
