import style from "./Resume.module.css"
import Header from "../Component/Header/page"
import Footer from "../Component/Footer/page"
async function Resume(){
    const respanse=await fetch("http://localhost:3000/Experience")
    const data=await respanse.json();

    const respanse2=await fetch("http://localhost:3000/Education");
    const data2=await respanse2.json();
    return(
        <div>
            <Header/>
            <section className={style.sec}>
                 <div class="text-center pt-16">
                <span className={style.Resume}>Resume</span>
                </div>

                <div className={style.container1}>
                    <div class="flex justify-between">
                        <span className={style.handel}>Experience</span>


                        <button class="bg-blue-700 hover:bg-blue-800 text-white-800 font-bold py-4 px-4 rounded inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className={style.iconDonlowd} viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg>
                            <span class="text-white">Download Resume</span>
                         </button>



                    </div>
                </div>

                {
                    data.map((item)=>(
                        <div className={style.container2}>
                           
                            <div className={style.main}>

                                <div className={style.box}>
                                    <p className={style.time}>{item.time}</p>
                                    <p className={style.title}>{item.title}</p>
                                    <p className={style.nameC}>{item.nameC}</p>
                                </div>

                                <p className={style.Description}>{item.Description}</p>

                            </div>
                            
                           
                        </div>
                    ))
                }

                <br/><br/>
                <div className={style.container3}>
                <p className={style.Education}>Education</p>
                </div>
                {
                    data2.map((item)=>(
                        <div className={style.container2}>
                           
                            <div className={style.main}>

                                <div className={style.box}>
                                    <p className={style.time2}>{item.time}</p>
                                    <p className={style.title}>{item.title}</p>
                                    <p className={style.nameC}>{item.nameC}</p>
                                </div>

                                <p className={style.Description}>{item.Description}</p>

                            </div>
                            
                           
                        </div>
                    ))
                }

                

                

            </section>
            <Footer/>
         
        </div>
    );
}
export default Resume;