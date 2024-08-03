import style from "./Projects.module.css"
import Header from "../Component/Header/page"
import Footer from "../Component/Footer/page"
async function Projects(){
    const respanse=await fetch("http://localhost:3000/Projects");
    const data=await respanse.json();
    return(
        <div>
            <Header/>

            <section className={style.sec}>
            <div class="text-center pt-16">
                <span className={style.Resume}>Resume</span>
                </div>

                {
                    data.map((item)=>(
                        <div className={style.constainer1}>
                            <div className={style.main}>
                            <div className={style.image}>
                                    <img className={style.image} src={item.image} />
                                </div>
                                <div className={style.titleAndDescription}>
                                    <h2 className={style.title}>{item.title}</h2>
                                    <p className={style.Description}>{item.Description}</p>
                                    <br/><br/>
                                </div>
                               
                            </div>
                        </div>
                    ))
                }


                <div className={style.onFooter}>
                    <p className={style.build}>Let's build something together</p>
                    <div class="text-center pb-12">
                    <button className={style.contact}>Contact me</button>
                    </div>
                    
                </div>


            </section>

            <Footer/>

        </div>
    );
}
export default Projects;