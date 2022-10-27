import React,{useContext} from 'react'
import { data } from './MobileData'
const DisplayMobiles = () => {
    const dataReceived = useContext(data);
    console.log(dataReceived);
    return (
        <div style={{"margin":"5%"}}>
            <table border={"2px"}>
                {
                    dataReceived.map((mobiledata)=>{
                        return (
                            <tr>
                                <td>{mobiledata.name}</td>
                                <td>{mobiledata.brand}</td>
                                <td>{mobiledata.release}</td>
                            </tr>
                        )
                    })
                }
            </table> 
        </div>
    )
} 
export default DisplayMobiles