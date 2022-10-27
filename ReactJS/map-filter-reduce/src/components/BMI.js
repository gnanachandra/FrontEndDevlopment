import React, { useState } from 'react'

const BMI = () => {
    const [name,setName] = useState("");
    const [weight,setWeight] = useState("");
    const [height,setHeight] = useState("");
    const calculateBMI =()=>{
        
        const heightSquare = parseFloat(height)*parseFloat(height);
        const BMIValue = parseFloat(weight)/parseFloat(heightSquare);
        window.alert(BMIValue);
        if(BMIValue <16)
        {
            window.alert("Severe thickness");
        }
        else if(BMIValue >= 16 && BMIValue < 17)
        {
            window.alert("Moderate Thickness");
        }
        else if(BMIValue >=17 && BMIValue < 18.5)
        {
            window.alert("Mild Thickness");
        }
        else if(BMIValue >= 18.5 && BMIValue < 25)
        {
            window.alert("Normal");
        }
        else if(BMIValue >=25 && BMIValue < 30)
        {
            window.alert("Over weight");
        }
        else if(BMIValue >=30 && BMIValue < 35)
        {
            window.alert("Obese CLASS-1");
        }
        else{
            window.alert("Invalid Data received");
        }
        
    }
    const formSubmitted=(e)=>{
        e.preventDefault();
        calculateBMI();
    }
  return (
    <div>
        <form onSubmit={formSubmitted}>
            <label>Enter your Name :</label>
            <input type="text" placeholder='Enter name : ' value={name} onChange={(e)=>setName(e.target.value)} required/><br/>
            <label>Enter Weight (in kg)</label>
            <input type="text" placeholder='Enter name : ' value={weight} onChange={(e)=>setWeight(e.target.value)} required/><br/>
            <label>Enter Height (in m)</label>
            <input type="text" placeholder='Enter name : ' value={height} onChange={(e)=>setHeight(e.target.value)} required/><br/>
            <input type="submit" value = "Calculate BMI"/>
            <input type="reset"/>
        </form>
        <div>
            <h1>Your Result : </h1>
            {/*<p>{result}</p>*/}
        </div>
    </div>
  )
}

export default BMI