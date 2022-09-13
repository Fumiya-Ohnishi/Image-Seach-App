import React from "react"

const Form = ({ setWord, getPhotoData }) => {
  return (
    <form action="">
      <input
        type="text"
        name="keyword"
        placeholder="e.g. cat"
        onChange={(e) => setWord(e.target.value)}
      />
      <button type="Submit" value="Submit" onClick={getPhotoData}>
        Search
      </button>
    </form>
  )
}

export default Form
