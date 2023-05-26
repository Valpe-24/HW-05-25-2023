import React, {useState} from 'react'
import './GreetMe.css'

export const GreetMe = () => {
    let [name, setName] = useState('')
    let [lastName, setLastName] = useState('')
  return (
    <div>
        <form>
            {/* <div id = 'name'>Name: </div> */}
            <input onChange={e => setName(e.target.value)}type= 'text' value={name} placeholder='Name'/>
            <br/>
            {/* <div id = 'lastName'>Last Name: </div> */}
            <input onChange={e => setLastName(e.target.value)} type= 'text' value={lastName} placeholder='Last Name'/>
            <br/>
            <button onClick={() => alert(`Hello ${name} ${lastName}`)}>Greet Me</button>
        </form>
    </div>
  )
}
