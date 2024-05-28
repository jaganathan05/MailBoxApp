import PageList from "../Listof_Pages/Page_List"
import MailForm from "../MailBox/MailForm"
import './Composs.css'

function Composs (){

    return (
        <div className="composs-container">
            <h2> MAIL BOX</h2>
            <div>
                <PageList /> 
                <MailForm />
            </div>

        </div>
    )

}

export default Composs