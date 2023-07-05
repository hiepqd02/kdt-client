import './App.css'
import React, { useState } from 'react'
import axios from 'axios'
export default function App() {
  const [words, setWords] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:8080/chat', { words })
      .then((res) => {
        setResponse(res.data)
      })
      .catch((error) => {
        console.log(error)
      })

    setWords('')
  }

  const handlePrompt = (e) => {
    setWords(e.target.value)
  }

  return (
    <div className="container container-sm p-1">
      {' '}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Input words</label>
          <input
            className="shadow-sm"
            type="text"
            placeholder="Enter text"
            value={words}
            onChange={handlePrompt}
          />
        </div>{' '}
        <button className="btn btn-accept w-100" type="submit">
          Go
        </button>
      </form>
      <div className="bg-darkGreen  mt-2 p-1 border-5">
        <p className="text-light">{response ? response : 'Wait...'}</p>
      </div>
    </div>
  )
}
