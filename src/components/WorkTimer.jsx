import { useEffect, useState } from 'react'

function WorkTimer() {

    const [rerenders, setRerenders] = useState(0)

    const [onOff, setOnOff] = useState(false)
    
    
    useEffect(() => {

        if (onOff) {
            const myInterval = setInterval(() => { 
                console.log("I AM AN INTERVAL AND I AM FIRING")
                setRerenders(currRerenders => currRerenders + 1) 
            }, 1000)

            return () => clearInterval( myInterval ) // CLEANUP FUNCTION
        }

    }, [onOff]) // DEPENDENCY ARRAY DETERMINES WHEN THE USEEFFECT FIRES


    useEffect(() => {
        console.log(`NUMBER OF RERENDERS: ${rerenders}`)
    }, [rerenders])

    return (
        <div>

            <h2>Work Timer</h2>

            <p>Number of Rerenders: {rerenders}</p>

            <button onClick={() => setOnOff(!onOff)}>
                BUTTON IS {onOff ? "ON" : "OFF" }
            </button>

        </div>
    )

}

export default WorkTimer