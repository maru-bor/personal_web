import {Link, Outlet} from "react-router-dom";
import Home from "./Home.tsx";
import './App.css';
import {useTranslation} from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css'




export default function Layout(){

    const {t} = useTranslation();

    return(
        <>
            <Home/>
                <div id="navbar">
                    <nav >

                        <ul>
                            <li>
                                <Link className="text-decoration-none" to="/"> {t('home.nav_title')} </Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none" to="/about"> {t('about.nav_title')}  </Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none" to="/education"> {t('edu.nav_title')}  </Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none"  to="/certificates"> {t('certs.nav_title')}</Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none" to="/experience"> {t('work_exp.nav_title')}</Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none" to="/portfolio"> {t('portfolio.nav_title')} </Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none" to="/contact"> {t('contact.nav_title')} </Link>
                            </li>
                        </ul>

                    </nav>

                </div>




            <Outlet/>
        </>
    );
}
