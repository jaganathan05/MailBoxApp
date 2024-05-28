
import  styles from './Home.module.css'
import PageList from "../Listof_Pages/Page_List";

function Home (){

    return (
        <div className={styles['Homepage-container']}>
            <h2> MAIL BOX</h2>
            <br></br>
            <h2>Welcome to Mail Box App</h2>
            <div >
            <PageList />
            
            </div>
            
           
            
           
           
        </div>
    )
}

export default Home;