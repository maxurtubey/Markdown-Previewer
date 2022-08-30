import React from "react";
import Header from "./Header";
import { marked } from "marked";
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

marked.setOptions({
  breaks: true,
  highlight: (code) =>  Prism.highlight(code, Prism.languages.javascript, 'javascript')
});

export default function Previewer({ theText, changePreview, classes, index }) {
  return (
    <div className={classes[1]}>
      <div className='container shadow rounded previsualizar'>
        <Header Title={'Previewer - Converted text:'} changeView={changePreview} theIndex={index} />
        <div className="row">
          <div id="preview" dangerouslySetInnerHTML={{ __html: marked(theText) }}></div>
        </div>
      </div>
    </div>
  )
}