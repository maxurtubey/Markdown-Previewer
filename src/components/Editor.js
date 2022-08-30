import React from "react"
import Header from "./Header"

export default function Editor({ textToAppend, theText, changeEditor, classes, index }) {

  let onHandleChange = (e) => textToAppend(e.target.value)

  return (
    <div className={classes[0]}>
      <div className="container shadow mb-2 rounded edicion">
        <Header Title={"Editor - Input desired text below:"} changeView={changeEditor} theIndex={index} />
        <div className="row">
          <textarea id="editor" type="text" onChange={onHandleChange} value={theText} />
        </div>
      </div>
    </div>
  )
}
