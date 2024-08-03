import style from "./Contact.module.css"
import Header from "../Component/Header/page"
import Footer from "../Component/Footer/page"
export default function Contact(){
    return(
        <div>
            <Header/>

            <div className={style.containerContact}>
                <div className={style.center}>

                 <p className={style.getInTouch}>Get in touch</p>
                 <p className={style.LetsWorkTogethe}>Let's work together!</p>
                 <form>
                    <input className={style.lable} type="text" placeholder=" Fullname" />
                    <br/>
                    <input className={style.lable} type="text" placeholder=" Email address" />
                    <br/>
                    <input className={style.lable} type="text" placeholder=" Phone number" />
                    <br/>
                    
                   <button className={style.contactButton}>Submit</button>
                 </form>
     
                </div>
            </div>
            <Footer/>
        </div>
    )
}