import React from "react"
import Header from "./Header"

export default function Editor({ textToAppend, theText }) {
  return (
    <div className="m-4">
      <h5 className="text-center">Input desired text below:</h5>
      <div className="container shadow mb-2 rounded edicion">
        <Header Title={"Editor"} />
        <div className="row">
          <textarea id="editor" type="text" onChange={(e) => textToAppend(e.target.value)} value={theText} />
        </div>
      </div>
    </div>
  )
}
