import {Link, Outlet} from "react-router-dom";

export default function Layout(){

    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> home </Link>
                    </li>
                    <li>
                        <Link to="/about"> o mně </Link>
                    </li>
                    <li>
                        <Link to="/education"> vzdělání </Link>
                    </li>
                    <li>
                        <Link to="/certificates"> certifikáty a kurzy </Link>
                    </li>
                    <li>
                        <Link to="/experience"> zkušenosti </Link>
                    </li>
                    <li>
                        <Link to="/portfolio"> portfolio </Link>
                    </li>
                    <li>
                        <Link to="/contact"> kontakt </Link>
                    </li>

                </ul>
            </nav>
            <Outlet/>
        </>
    );
}
