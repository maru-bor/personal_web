import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home(){

    return(
        <>
            <h1>home :3</h1>

            <div className="container text-center">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-2">
                        1 of 3
                    </div>
                    <div className="col-md-auto">
                        Variable width content
                    </div>
                    <div className="col col-lg-2">
                        3 of 3
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        1 of 3
                    </div>
                    <div className="col-md-auto">
                        Variable width content
                    </div>
                    <div className="col col-lg-2">
                        3 of 3
                    </div>
                </div>
            </div>

        </>
    );
}