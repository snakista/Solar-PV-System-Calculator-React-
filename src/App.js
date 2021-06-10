import React,{useState} from 'react'
import './prestyle.css'
import './style.css'

function App(){
  const [bt,setBt]=useState(6);
  const [tt,setTt]=useState(5);
  const [ft,setFt]=useState(8);
  const [ledt,setLedt]=useState(3.3);
  const [crtt,setCrtt]=useState(3.3);
  const [frt,setFrt]=useState(24);

  const [bulb,setBulb]=useState(1);
  const [tube,setTube]=useState(1);
  const [fan,setFan]=useState(1);
  const [led,setLed]=useState(1);
  const [crt,setCrt]=useState(1);
  const [fridge,setFridge]=useState(1);
  const bulbR=10,tubeR=36,fanR=70,ledR=62,crtR=125,fridgeR=45.66;
  const [totalConsumption,setTotalConsumption]=useState(0);
  const [solarneeded,setSolarneeded]=useState(0);
  const [sizeofinverter,setSizeofinverter]=useState(0);
  const [sizeofbattery,setSizeofbattery]=useState(0);
  const [sizeofcontroller,setSizeofcontroller]=useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault();
    let pcd=(bulbR*bt*bulb+tubeR*tt*tube+fanR*ft*fan+ledR*ledt*led+crtR*crtt*crt+fridgeR*fridge*frt);
    let pvPannelEnergy=pcd*1.3;
    let wpofPanel=pvPannelEnergy/4.32;
    let pvNeeded=wpofPanel/150;
    let inverterSize=(bulbR*bulb+tubeR*tube+fanR*fan+ledR*led+crtR*crt+fridgeR*fridge);
    inverterSize=inverterSize*1.3;
    let batteryRating=(pcd*5)/(0.85*0.6*12);
    let controllerSize=8.9*pvNeeded*1.3;
    setTotalConsumption(pcd.toFixed(2));
    setSolarneeded(pvNeeded.toFixed(0));
    setSizeofinverter(inverterSize.toFixed(2));
    setSizeofbattery(batteryRating.toFixed(0));
    setSizeofcontroller(controllerSize.toFixed(2));
  }
  return (
   <>
   <div className="jumbotron jumbotron-fluid">
     <div className="container">
       <h1 className="display-4">Solar PV System Calculator</h1>
       <p className="lead">Check your daily power consumption</p>
     </div>
   </div>
   <div className="container">
    <form onSubmit={handleSubmit}>

      <div className="form-group">
      <div className="row">
        <div className="col">
          <label htmlFor="bulb">Appliances </label>
        </div>
        <div className="col">
      <label htmlFor="bulb">Daily usage (in hrs) Time </label>
      </div>
      <div className="col">
      <label htmlFor="bulb">Quantity </label>
      </div>
      </div>
      </div>

      <div className="form-group">
      <div className="row">
        <div className="col">
          <label htmlFor="bulb">Bulb: </label>
        </div>
        <div className="col">
      <input type="text" className="form-control" id="bulbTime" name="bt" value={bt} onChange={(e)=>setBt(e.target.value)}></input>
      </div>
      <div className="col">
      <input type="text" className="form-control" id="bulbCount" name="bn" value={bulb} onChange={(e)=>setBulb(e.target.value)}></input>
      </div>
      </div>
      </div>

      <div className="form-group">
      <div className="row">
        <div className="col">
         <label htmlFor="tube">Tubelight: </label>
        </div>
        <div className="col">
      <input type="text" className="form-control" id="tubeTime" name="tt" value={tt} onChange={(e)=>setTt(e.target.value)}></input>
      </div>
      <div className="col">
      <input type="text" className="form-control" id="bulbCount" name="bn" value={tube} onChange={(e)=>setTube(e.target.value)}></input>
      </div>
      </div>
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col">
            <label htmlFor="bulb">FAN: </label>
          </div>
        <div className="col">
      <input type="text" className="form-control" id="ft" name="ft" value={ft} onChange={(e)=>setFt(e.target.value)}></input>
      </div>
      <div className="col">
      <input type="text" className="form-control" id="fancnt" name="fan" value={fan} onChange={(e)=>setFan(e.target.value)}></input>
      </div>
      </div>
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col"><label htmlFor="bulb">LED: </label></div>
        <div className="col">
      <input type="text" className="form-control" id="ledt" name="ledt" value={ledt} onChange={(e)=>setLedt(e.target.value)}></input>
      </div>
      <div className="col">
      <input type="text" className="form-control" id="ledcnt" name="ledcnt" value={led} onChange={(e)=>setLed(e.target.value)}></input>
      </div>
      </div>
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col"><label htmlFor="bulb">CRT: </label></div>
        <div className="col">
      <input type="text" className="form-control" id="ime" name="bty" value={crtt} onChange={(e)=>setCrtt(e.target.value)}></input>
      </div>
      <div className="col">
      <input type="text" className="form-control" id="crtCount" name="crtn" value={crt} onChange={(e)=>setCrt(e.target.value)}></input>
      </div>
      </div>
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col"><label htmlFor="bulb">Fridge: </label></div>
        <div className="col">
      <input type="text" className="form-control" id="fTime" name="ft" value={frt} onChange={(e)=>setFrt(e.target.value)}></input>
      </div>
      <div className="col">
      <input type="text" className="form-control" id="frCount" name="bn" value={fridge} onChange={(e)=>setFridge(e.target.value)}></input>
      </div>
      </div>
      </div>

      <div className="form-group">
      <button type="submit" className="btn btn-primary">Submit</button><br></br><br></br>
      
        <div className="row">
      <h6>Daily total consumption in watt-hrs:</h6> <input type="text" disabled="disabled" value={totalConsumption+' W-hr/day'}></input>
      </div>
      <div className="row">
      <h6>No of Solar pannel needed: </h6><input type="text" disabled="disabled" value={solarneeded+' solar'}></input>
      </div>
      <div className="row">
      <h6>Size of Inverter: </h6><input type="text" disabled="disabled" value={sizeofinverter+' Watts'}></input>
      </div>
      <div className="row">
      <h6>Size of Battery: </h6><input type="text" disabled="disabled" value={sizeofbattery+' Ah'}></input>
      </div>
      <div className="row">
      <h6>Size of Solar charge controller: </h6><input type="text" disabled="disabled" value={sizeofcontroller+' A'}></input>
      </div>
      </div>

    </form>
    </div>
   </>
  );
}

export default App