import '../css/OddsOn.css';
import { useNavigate } from "react-router-dom"

// TODO: Fix skeleton layout of page 
export const OddsOn = () => {
  var navigate = useNavigate()
  const openHowToPlay = () => {
    navigate('/howtoplay')
  }

    return (
        <button onClick = {openHowToPlay}> open htp</button>

    )
}

export default OddsOn