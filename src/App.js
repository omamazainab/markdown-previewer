import { useState } from 'react';
import marked from 'marked';
import Prism from 'prismjs';
import './App.css';

function App() {
  const initialState = '';
  
  const [content, setContent] = useState(initialState);


  return (
    <>
      <textarea id="editor" onChange={(e) => {
        setContent(marked(e.target.value));
      }}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: content}}></div>
    </>
  );
}

export default App;
