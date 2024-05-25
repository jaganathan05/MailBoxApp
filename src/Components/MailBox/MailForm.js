import  Form from "react-bootstrap/Form";
import classes from './MailForm.module.css'
import Button from "react-bootstrap/Button";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import ControlledEditor from "./Controlled_Editor";
import { EditorState, convertToRaw } from 'draft-js';
import { useRef ,useState} from "react";
import draftToHtml from 'draftjs-to-html';
import axios from "axios";



function MailForm (){
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const emailref = useRef()
  const subjectref = useRef()
  const sendmailhandler = async()=>{
    if (!emailref.current.value.trim().includes('@')){
      alert('Enter Email correctly')
    }
    const data = {
email : emailref.current.value,
subject: subjectref.current.value,
content : draftToHtml(convertToRaw(editorState.getCurrentContent()))
    }
    console.log(data)

    const response = await axios.post('http://localhost:4000/sendmail',data,{
      headers : {
        Authorization : localStorage.getItem('token')
      }
    })
    if(response){
      alert(response.data.message); 
      emailref.current.value=''
      subjectref.current.value=''
      setEditorState(
        EditorState.createEmpty()
      )
    }
    else {
      alert(response.data.message); 
  } 
  }
    


    return (
        <div className={classes["mailbox-container"]}>

        <Form  className={classes['mail-box']}>
            <Row className="mb-3"> 
                <Col className="col-1" >
                <Form.Label className="text-light">TO: </Form.Label>
                </Col>
                <Col className="col-11">
                <Form.Control type="email" required ref={emailref}></Form.Control>
                </Col>
                
           </Row >
            <Form.Control type='text' placeholder="Subject" className="mb-4" ref={subjectref}></Form.Control>
            
            <ControlledEditor 
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />
            <div className="d-flex justify-content-center">
            <Button className="btn-primary" onClick={sendmailhandler}>Send</Button>
            </div>
            
        </Form>
    </div>
    )
}

export default MailForm ;
