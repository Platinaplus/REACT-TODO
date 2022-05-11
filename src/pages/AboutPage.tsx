import React from "react"
import { useNavigate } from "react-router-dom"

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi eum autem iste iure reprehenderit ex assumenda. Dolore, beatae? Explicabo!</p>
            <button className="btn" onClick={() => navigate('/')}>Back to the List</button>
        </>
    )
}