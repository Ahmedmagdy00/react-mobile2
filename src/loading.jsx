import React, {useState, useEffect} from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './Loading.css'

const Loading = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    }, [])


    return (
        <div className="mero">
                <ClimbingBoxLoader
                size={30} 
                />
              

        </div>
    )
}

export default Loading;