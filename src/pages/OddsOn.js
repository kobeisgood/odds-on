import '../css/OddsOn.css';
import { useNavigate } from "react-router-dom"

// TODO: 2ND PRIO add a method for starting countdown 
// TODO: 3RD PRIO css styling everywhre 
export const OddsOn = () => {
  var navigate = useNavigate()
  const openHowToPlay = () => {
    navigate('/howtoplay')
  }

  return (
    <div> 
      <button onClick = {openHowToPlay}> open htp</button>
        <p>Welcome to Odds On! </p>
        <p> Test your luck by inputting a number below and then pressing the button</p>
        
        <p>What Are Your Odds? </p>

        {/* FIRST PRIO add a form and input here (ask lupis)*/}

        <button> Odds On! </button>
        
    </div>
  )

}

export default OddsOn

