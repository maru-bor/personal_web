import {Link, Outlet} from "react-router-dom";

export default function Layout(){

    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="personal_web/"> Home </Link>
                    </li>
                    <li>
                        <Link to="personal_web/about"> About </Link>
                    </li>
                    <li>
                        <Link to="personal_web/education"> Education </Link>
                    </li>

                </ul>
            </nav>
            <Outlet/>
        </>
    );
}
