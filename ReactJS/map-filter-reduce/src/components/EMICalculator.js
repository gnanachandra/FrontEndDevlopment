import React,{useState} from 'react'

const EMICalculator = () => {
    const [amount,setAmount] = useState("");
    const [intrestRate,setIntrestRate] = useState("");
    const [tenure,setTenure] = useState("");
    const [tenureType,setTenureType] = useState("months");
    const [answer,setAnswer] = useState("");
    const [emivalue,setEMIValue] = useState("");
    const calculateEMI = () =>
    {
        const P = amount;
        const r = intrestRate;
        let n;
        if(tenureType==="months")
        {
            n = tenure;
        }
        else{
            n = tenure *12;
        }
        const val = Math.pow((1+parseFloat(r)),n);
        const val2 = val - 1;
        const EMI = parseFloat(P) * parseFloat(r) * (val/val2);
        setEMIValue(EMI);
        setAnswer(`Monthly payment is ${emivalue}`)

    }
    const formSubmitted = (e)=>{
        e.preventDefault();
        calculateEMI();
    }
  return (
    <div>
        <h1>EMI loan Calculator</h1><br/>
        <form onSubmit={formSubmitted}>
        <label> Loan Amount : </label> <input type="number" onChange={(e)=>setAmount(e.target.value)} placeholder="LoanAmount" required/><br/>

        <label>Loan Tenure</label> <input type="number" onChange = {(e)=>setTenure(e.target.value)} required/><br/>

        <select onChange={(e)=>setTenureType(e.target.value)}>
            <option value="months" selected>Months</option>
            <option value="years">years</option>
        </select><br/>
        <label>Interest rate : %</label>
        <input type="number" step="0.1" onChange={(e)=>setIntrestRate(e.target.value)} required/>
        <br/>
        <input type="submit" value = "calculate"/>
        <input type="reset" value="Clear"/>
        <br/><br/>
        <div style={{"border":"2px solid black" , "height":"40%" ,"width":"20%"}}>
            <p>Answer : </p>
            <p>{answer}</p>
        </div>
        </form>
    </div>
  )
}

export default EMICalculator