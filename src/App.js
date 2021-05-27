import React,{useState} from 'react'
import './index.css'
import './mystyle.css'

function App(){
  const [pin,setPin]=useState(0);
  const [data,setData]=useState([]);
  const today=new Date();
  const date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
  const getUsers=async()=>{
    const response=await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+pin+"&date="+date);
    const info=await response.json();
    setData(info.sessions);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(pin!==0)
    {
      getUsers();
      console.log(data);
    }
  }
  return (
  <>
  <div className="container font-link">
  <div className="row">
   <div className="col-sm-12">
  <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="PIN">Enter PIN</label>
    <input type="text" className="form-control" id="pin" aria-describedby="pin" placeholder="Enter PIN: "
    value={pin} onChange={(e)=>setPin(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <br/>
  </form>
  {
    data.map((inf)=>{
      const {center_id,name,address,block_name,available_capacity,available_capacity_dose1,available_capacity_dose2,min_age_limit,fee,date}=inf;
      return (
              <div className="rowli row">
              <ul className="list-group" key={center_id}>
              <li className="list-group-item list-group-item-info">Name: {name}</li>
              <li className="list-group-item list-group-item-info">Address: {address}</li>
              <li className="list-group-item list-group-item-info">Block Name:{block_name}</li>
              <li className="list-group-item list-group-item-success">Capacity: {available_capacity}</li>
              <li className="list-group-item list-group-item-success">Dose1: {available_capacity_dose1}</li>
              <li className="list-group-item list-group-item-success">Dose2: {available_capacity_dose2}</li>
              <li className="list-group-item list-group-item-warning">Min Age: {min_age_limit}</li>
              <li className="list-group-item list-group-item-warning">Fee: {fee}</li>
              <li className="list-group-item list-group-item-dark">Date: {date}</li>
              </ul>
              </div>
      );
    })
  }
  </div>
  </div>
  </div>
  </>
  )
}

export default App