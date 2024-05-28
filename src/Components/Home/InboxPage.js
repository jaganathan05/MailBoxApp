import Inbox from "../Inbox/Inbox"
import PageList from "../Listof_Pages/Page_List";
import styles from './InboxPage.module.css'

function InboxPage (){

return (
    <div className={styles['inboxpage-container']}>
        <h2>Mail Box</h2>
        <div>
        <PageList /> 
        <Inbox />
        </div>

    </div>
)
}

export default InboxPage;