import {Link, Outlet} from "react-router-dom";
import Home from "./Home.tsx";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'




export default function Layout(){

    return(
        <>
            <Home/>
                <div id="navbar">
                    <nav >

                        <ul>
                            <li>
                                <Link className="text-decoration-none" to="/"> domů </Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none" to="/about"> o mně </Link>
                            </li>
                            <li >
                                <Link className="text-decoration-none" to="/education"> vzdělání </Link>
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
