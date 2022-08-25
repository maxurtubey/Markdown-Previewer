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
  const [texto, definirTexto] = useState(initState)

  return (
    <>
      <Editor textToAppend={definirTexto} theText={texto}/>
      <Previewer theText={texto}/>
    </>
  )
}

export default App;
