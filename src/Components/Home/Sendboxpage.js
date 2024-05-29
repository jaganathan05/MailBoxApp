import PageList from "../Listof_Pages/Page_List";
import Sendbox from "../SendBox/sendbox";
import styles from './InboxPage.module.css'

function SendboxPage (){

return (
    <div className={styles['inboxpage-container']}>
        <h2>Mail Box</h2>
        <div>
        <PageList /> 
        <Sendbox />
        </div>

    </div>
)
}

export default SendboxPage;