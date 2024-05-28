import { useEffect, useState } from 'react';
import styles from './Inbox.module.css'
import axios from 'axios';
import { EnvelopeAtFill, EnvelopeCheckFill, InboxFill } from 'react-bootstrap-icons';

function Inbox (){
    const [mails , setmails]= useState([])

    useEffect(() => {
        const fetchMails = async () => {
            try {
                const response = await axios.get('http://localhost:4000/receivedmails', {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                });
                // You can use response.data here to update state or do something with the data
                console.log(response.data); // For example, logging the response data
                if(response.data){
                    setmails(response.data.mails)
                }
            } catch (error) {
                console.error("Error fetching mails:", error);
            }
        }

        fetchMails();
    }, []);

    return (
                <div className={styles["inbox-container"]}>
                    <div className={styles["inbox-box"]}>
                        <h4>INBOX</h4>
                    {
                    mails.map(mail => (
                        <div className={styles['singlemail']}>
                           <EnvelopeAtFill/> {mail.sender} <br/>
                           <InboxFill/>{mail.subject}
                            </div>
                        
                    ))
                },
                        
                    </div>
                </div>
    )

}

export default Inbox;