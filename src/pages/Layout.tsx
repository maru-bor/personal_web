import {Link, Outlet} from "react-router-dom";
import Home from "./Home.tsx";
import './App.css';
import {useTranslation} from "react-i18next";
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
                                <Link className="text-decoration-none" to="/"> {t('home_nav')} </Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none" to="/about"> {t('about_nav')}  </Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none" to="/education"> {t('edu_nav')}  </Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none"  to="/certificates"> certifikáty </Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none" to="/experience"> zkušenosti </Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none" to="/portfolio"> portfolio </Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none" to="/contact"> kontakt </Link>
                            </li>
                        </ul>

                    </nav>

                </div>




            <Outlet/>
        </>
    );
}
