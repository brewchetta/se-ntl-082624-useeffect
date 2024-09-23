import { useState, useEffect } from 'react'

function PlanetsContainer() {

    const [planetsList, setPlanetsList] = useState([])
    
    
    useEffect(() => {

        fetch('http://localhost:3000/planets')
        .then( response => {
            if (response.ok) {
                return response.json()
            }
        } )
        .then( data => setPlanetsList(data) )
        .catch( err => console.log(err) )

    }, [])

    return (
        <>
        
        <h2>Planets of the Solar System</h2>
        
        <div className='planets-container'>
            { planetsList.map(planet => <h3>{planet.name}</h3>) }        
        </div>
        
        </>
    )

}

export default PlanetsContainer