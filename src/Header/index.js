import React from 'react'
import '../index.css'


export default function Header(props) {
  const headerStyle = {
    textAlign: "right",
    padding: "10px"
  }
  return(
    <nav style={headerStyle}>
      <p>Logged in as {props.username}
        <span className="fake-link" onClick={props.logout}>(Log out)</span>
      </p>
    </nav>
  )
}
