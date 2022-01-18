import { useNavigate } from "react-router-dom"

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