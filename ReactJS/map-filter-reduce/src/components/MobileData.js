import React from 'react'
import DisplayMobiles from './DisplayMobiles';
const mobiles = [{
    "name":"realme gt me",
    "brand":"realme",
    "release":"2021"
},
{
    "name":"realme 7",
    "brand":"realme",
    "release":"2020"
},
{
    "name":"iphone 14 pro",
    "brand":"apple",
    "release":"2022"
}]

export const data = React.createContext();
const MobileData = () => {
  return (
    <div>
        <data.Provider value={mobiles}>
            <DisplayMobiles/>
        </data.Provider>
    </div>
  )
}

export default MobileData