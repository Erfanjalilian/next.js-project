import style from "./Footer.module.css"
import Link from "next/link";
export default function Footer(){
    return(
        <div>
             <footer className={style.footer}>
                <div className={style.elemontFooter}>
                    <div>
                        <p className={style.copy}>Copyright © Your Website 2023</p>
                    </div>
                    <div className={style.forRespansive}>
                        <span className={style.footerLink}><Link className={style.colorFooterLink} href="/">Privacy</Link> </span>
                        <span> .</span>
                        <span className={style.footerLink}> <Link  className={style.colorFooterLink} href="/">Terms</Link> </span>
                        <span>.</span>
                        <span className={style.footerLink}> <Link className={style.colorFooterLink} href="/">Contact</Link></span>
                    </div>
                </div>
            </footer>
        </div>
    )
}