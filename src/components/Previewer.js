import React from "react";
import Header from "./Header";
import { marked } from "marked";

export default function Previewer({ theText }) {
  return (
    <div className="m-4">
      <h5 className="text-center">Converted text:</h5>
      <div className='container shadow rounded previsualizar'>
        <Header Title={'Previewer'} />
        <div className="row">
          <div id="preview" dangerouslySetInnerHTML={{ __html: marked(theText) }}></div>
        </div>
      </div>
    </div>
  )
}