import React,{ useRef } from 'react'

const HookUseRef = () => {

    const inputRef = useRef();

    const handleClick = () => {
      alert(inputRef.current.value)
    }

  return (
    <div>
      <h1>Hello useRef</h1>
      <input type="text" name="" id="" ref={inputRef} />
      <button onClick={handleClick}>useRef</button>
    </div>
  )
}

export default HookUseRef