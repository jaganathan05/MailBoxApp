import { useEffect, useState } from 'react';
import styles from './Inbox.module.css'
import axios from 'axios';
import { ArrowLeftCircleFill, BriefcaseFill, CircleFill, EnvelopeAtFill,    PersonCircle } from 'react-bootstrap-icons';
import  Button  from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMails } from '../../Store/Slices/Mails';
function Inbox (){
    const [mails , setmails]= useState([])
    const dispatch =useDispatch()
    const MailSelector = useSelector(state=> state.Mail.Mails)
    const token = useSelector(state=> state.Auth.Token)
    const [selectedMail, setSelectedMail] = useState(null);
    const [refresh , setrefresh]= useState(false)

    useEffect(() => {
        dispatch(fetchMails(token))
       
    }, [dispatch,token , refresh]);

    useEffect(()=>{
        
        setmails(MailSelector)
    },[MailSelector])

    const singleMailPageHandler =async(mail) => {
        try{
            console.log(token)
            setSelectedMail(mail);
            if(!mail.read){
                const response = await axios.post(`http://localhost:4000/Mailupdate/${mail.id}`,{}, {
                    headers :{
                        Authorization : token
                    }
                });
                if(response.data.success){
                    console.log(response)
                    setrefresh(true)
                }
            }
            
           
        }
        catch{

        }
        
      
    };

    const backToInboxHandler = () => {
        setSelectedMail(null);
    };

    

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const formatTime = (dateString) => {
    const updatedAtDate = new Date(dateString);
    const today = new Date();

    if (updatedAtDate.toDateString() === today.toDateString()) {
        const options = { hour: '2-digit', minute: '2-digit' };
        return updatedAtDate.toLocaleTimeString(undefined, options);
    } else {
        const options = { month: 'short', day: 'numeric' };
        return updatedAtDate.toLocaleDateString(undefined, options);
    }
};

    return (
                <div className={styles["inbox-container"]}>
                    <div className={styles["inbox-box"]} >
                        <h4>INBOX</h4>
                        {selectedMail ? (
                    <div className={styles["mail-content"]}>
                        <Button onClick={backToInboxHandler} className={styles["back-button"]}><ArrowLeftCircleFill/>  Back to Inbox</Button><p>
                            Date :  {formatDate(selectedMail.updatedAt)}
                        </p>
                        <h5>From: <span className={styles['email']}><PersonCircle/> {selectedMail.sender}</span> </h5>
                        <h6>Subject: <span className={styles['subject']}> {selectedMail.subject}</span> </h6>
                        <p className={styles['content']} dangerouslySetInnerHTML={{__html: selectedMail.content}}></p>
                    </div>
                ) : (
                    mails.map(mail => (
                        <div key={mail.id} className={styles['singlemail']} onClick={() => singleMailPageHandler(mail)}>
                            <p>
                                {!mail.read && <CircleFill className={styles['circle']} />}
                                <i className={styles['mailhead']}><EnvelopeAtFill  /> {mail.sender} </i><i className={styles['time']}>{formatTime(mail.updatedAt)}</i><br />
                                <i className={styles['mailhead-subject']}>< BriefcaseFill/> {mail.subject}</i>
                            </p>
                        </div>
                    ))
                )}
                        
                    </div>
                </div>
    )

}

export default Inbox;