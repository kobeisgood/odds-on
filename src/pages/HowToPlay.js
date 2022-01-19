import { useNavigate } from "react-router-dom"

export const HowToPlay = () => { 

    var navigate = useNavigate()
    const openOddsOnPage = () => {
        navigate('/')
    }

    // TODO: add a description of how to play + layout
    return (
        <div> 
            <button onClick={openOddsOnPage}> Home </button>
            <p>this is how you play </p>
        </div>
    ) 
}

export default HowToPlay