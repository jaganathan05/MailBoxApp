import React from 'react';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../App.css';


function Controlled_Editor(props) {
 
  

  return (
    <div className="App">
      
      <Editor
        editorState={props.editorState}
        onEditorStateChange={props.onEditorStateChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
}

export default Controlled_Editor;
