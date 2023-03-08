import React from 'react'
import './MessageSquare.css'

const MessageSquare = ({ icon, title, description, link, linkText }) => (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link}>{linkText}</a>
    </div>
  )

export { MessageSquare }