// maxUrtubey 2022 - freeCodeCamp 
import React, { useState } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './App.css';

function App() {

  const initState = `Welcome to my React Markdown Previewer!
  
# This is a heading line...
## And here's a sub-heading:

Heres some code, \`<body></body>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function learnToCode(time, patience) {
  if (time > 0 '\`\`\`' && patience == '\`\`\`') {
    return newCodeSkill;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

This is also my [github page](https://github.com/maxurtubey), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

  let modifEditor = () => modEditor(!editorMaximized)
  let modifPreview = () => modPreviewer(!previewMaximized)

  const [texto, definirTexto] = useState(initState)
  const [editorMaximized, modEditor] = useState(false)
  const [previewMaximized, modPreviewer] = useState(false)

  // let icon = ['<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#ffffff" d="m21 15.344l-2.121 2.121l-3.172-3.172l-1.414 1.414l3.172 3.172L15.344 21H21zM3 8.656l2.121-2.121l3.172 3.172l1.414-1.414l-3.172-3.172L8.656 3H3zM21 3h-5.656l2.121 2.121l-3.172 3.172l1.414 1.414l3.172-3.172L21 8.656zM3 21h5.656l-2.121-2.121l3.172-3.172l-1.414-1.414l-3.172 3.172L3 15.344z" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="white" d="M13.78 3.28a.75.75 0 0 0-1.06-1.06L10.5 4.44V3.25a.75.75 0 0 0-1.5 0v2.9c0 .017 0 .035.002.052a.748.748 0 0 0 .796.796A.86.86 0 0 0 9.85 7h2.9a.75.75 0 0 0 0-1.5h-1.19l2.22-2.22ZM6.25 13.5a.75.75 0 0 1-.75-.75v-1.19l-2.22 2.22a.75.75 0 0 1-1.06-1.06l2.22-2.22H3.25a.75.75 0 0 1 0-1.5h2.9a.86.86 0 0 1 .052.002a.748.748 0 0 1 .796.796A.86.86 0 0 1 7 9.85v2.9a.75.75 0 0 1-.75.75Z"/></svg>']

  const classes = editorMaximized ? ['editorWrap maximizado', 'previewWrap oculto', 1] :
    previewMaximized ? ['editorWrap oculto', 'previewWrap maximizado', 1] : ['editorWrap', 'previewWrap', 0];

  return (
    <>
      <Editor textToAppend={definirTexto} theText={texto} changeEditor={modifEditor} classes={classes} index={classes[2]} />
      <Previewer theText={texto} changePreview={modifPreview} classes={classes} index={classes[2]} />
    </>
  )
}

export default App;
