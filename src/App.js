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
  const [updated,setUpdated]=useState(false);

  const [bulb,setBulb]=useState(0);
  const [tube,setTube]=useState(0);
  const [fan,setFan]=useState(0);
  const [led,setLed]=useState(0);
  const [crt,setCrt]=useState(0);
  const [fridge,setFridge]=useState(0);
  const bulbR=10,tubeR=36,fanR=70,ledR=62,crtR=125,fridgeR=45.66;
  const [totalConsumption,setTotalConsumption]=useState(0);
  const [solarneeded,setSolarneeded]=useState(0);
  const [sizeofinverter,setSizeofinverter]=useState(0);
  const [sizeofbattery,setSizeofbattery]=useState(0);
  const [costOfGrid,setCostOfGrid]=useState(0);

  const handleSubmit=(e)=>{
    setUpdated(true);
    e.preventDefault();
    let pcd=(bulbR*bt*bulb+tubeR*tt*tube+fanR*ft*fan+ledR*ledt*led+crtR*crtt*crt+fridgeR*fridge*frt);
    let pvPannelEnergy=pcd*1.3;
    let wpofPanel=pvPannelEnergy/4.32;
    let pvNeeded=wpofPanel/330;
    let inverterSize=(bulbR*bulb+tubeR*tube+fanR*fan+ledR*led+crtR*crt+fridgeR*fridge);
    inverterSize=inverterSize*1.3;
    let batteryRating=(pcd*3)/(0.85*0.6*12);
    let costgrid=inverterSize*1.2*80;
    costgrid=costgrid/1.3;
    setTotalConsumption(pcd.toFixed(2));
    setSolarneeded(pvNeeded.toFixed(0));
    setSizeofinverter(inverterSize.toFixed(2));
    setSizeofbattery(batteryRating.toFixed(0));
    setCostOfGrid(costgrid.toFixed(2));
    setTimeout(()=>{
      setUpdated(false);
    },2000);
  }
  return (
   <>
   <div className="jumbotron jumbotron-fluid">
     <div className="container">
       <h1 className="display-4">Solar PV System Calculator</h1>
       <p className="lead">Check your daily power consumption - ©Snakista</p>
     </div>
   </div>
   <div className="container">
    <form onSubmit={handleSubmit}>
      
      <div className="form-group">
      <div className="row">
        <div className="col">
          <label htmlFor="bulb">Appliances </label>
        </div>
        <div className="col"></div>
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
        <div className="col"><img className="myimg"
        src="data:image/png;base64,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siHZULjP5+grXEbyTX7g/UDJCfvcfUPTEZuzLzIdedovc047Zf0zTnsek1mdDpfL2edzOe17rkhhvucr5L0F/tp13V9X0A0W0FcKOvQmPl6iNWTLexxOmScSwfocl7ZCX3460qdzulwFH+aSYSORfgyzmzx93WchLtizZxsqDBUKl315nezStnc5lIfPpmGtezp4pFAY2nO4885IZHrP3je9F5l2TEcw+1AVLdlexJbvv/Q4IkM6x6VzaKjPDW6JYf3TPuwJhrkiTqBl78d6R0tWAOexe6b3+iORiH3Pyf/v3PNFsMglfOSettkiQ5E8PFr4xH+xEJnu33PX0Brqt/U59/YK8J635Z15516kz+acHin4ItN2p082Mj1jh5851Dtafe5Lm2dves+N6Mx7bPz/e87pPKJli3jgC0POywiwc/TvTTunIw5HxOMrVNPSOUALIhH0rrsE283LwNQRG3iBB/OACQu2PUdBFumlvhd0uj1doVAAlyvAauD/oUK+UMjzTgjLL+Rle7K8Dh7e4581tDck/tXFdFzOSvCuQ9KHwD9Nx6cv2RD/xR6yuhX+t6uM/zX8P62HhP8DXaYPV0fIyKwAAAAASUVORK5CYII="></img></div>
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
        <div className="col"><img className="myimg" src="data:image/jpeg;base64,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"></img></div>
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
          <div className="col"><img className="myimg" src="data:image/jpeg;base64,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"></img></div>
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
          <div className="col"><label htmlFor="bulb">LED TV: </label></div>
          <div className="col"><img className="myimg" src="data:image/jpeg;base64,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"></img></div>
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
          <div className="col"><label htmlFor="bulb">CRT TV: </label></div>
        <div className="col"><img className="myimg" src="data:image/jpeg;base64,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"></img></div>
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
        <div className="col"><img className="myimg" src="data:image/jpeg;base64,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"></img></div>
        <div className="col">
      <input type="text" className="form-control" id="fTime" name="ft" value={frt} onChange={(e)=>setFrt(e.target.value)}></input>
      </div>
      <div className="col">
      <input type="text" className="form-control" id="frCount" name="bn" value={fridge} onChange={(e)=>setFridge(e.target.value)}></input>
      </div>
      </div>
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col">
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      <div className="col">{updated&&<h6 className="dangertxt">Results are updated!</h6>}</div>
      </div>
      <br></br><br></br>
      <div className="row">
          <div className="col"><h6>Daily total consumption in watt-hrs:</h6></div>
          <div className="col"><input className="cntr" type="text" disabled="disabled" value={totalConsumption+' W-hr/day'}></input></div>
          <div className="col"><p className="successtxt"></p></div>
      </div>
      <div className="row">
        <div className="col">
        <h6>No of Solar panel needed: </h6>
        </div>
        <div className="col"><input className="cntr" type="text" disabled="disabled" value={solarneeded+' panels'}></input></div>
        <div className="col"><p className="successtxt">[Specifications: 330 watt solar panels. 14-21.6 volts]</p></div>
      </div>
      <div className="row">
        <div className="col"><h6>Size of Inverter: </h6></div>
        <div className="col"><input className="cntr" type="text" disabled="disabled" value={sizeofinverter+' watts or greater'}></input></div>
        <div className="col"><p className="successtxt">[Specifications: {sizeofinverter} watts, 12-volt solar inverters.]</p></div>
      </div>
      <div className="row">
        <div className="col"><h6>Size of Battery: </h6></div>
        <div className="col"><input className="cntr" type="text" disabled="disabled" value={sizeofbattery+' Ah for 3 days autonomy'}></input></div>
        <div className="col"><p className="successtxt">[Specifications: 12V, {sizeofbattery} Ah, for 3day autonomy]</p></div>
      </div>
      <div className="row">
        <div className="col"><h6 className="imp">Total cost of grid: </h6></div>
        <div className="col"><input className="cntr" type="text" disabled="disabled" value={costOfGrid+' Rs'}></input></div>
        <div className="col"><p className="successtxt"></p></div>
      </div>
      </div>

    </form>
    </div>
   </>
  );
}

export default App