export default function Portfolio(){
    return(
        <>
            <h2>Portfolio</h2>
            <div id="projects" className="mt-5 ">
                <div >
                    <h4><a className="text-decoration-none fw-bold" href="https://github.com/maru-bor/tamagotchi.git"> Tamagotchi </a></h4>
                    <p className="fs-5"> Digitální verze hry Tamagotchi, kde se uživatel stará o virtuálního mazlíčka.
                        Mazlíček má několik základních potřeb, které uživatel musí pravidelně uspokojovat. (TypeScript, React)  </p>
                </div>
                <div>
                    <h4><a className="text-decoration-none fw-bold" href="https://github.com/maru-bor/passwd_game.git"> Password Game </a></h4>
                    <p className="fs-5"> Hra v prohlížeči ve které uživatel musí zadat heslo podle zadaných kritérií. (TypeScript, React) </p>
                </div>
                <div>
                    <h4><a className="text-decoration-none fw-bold" href="https://github.com/maru-bor/db_project.git"> Database Project </a></h4>
                    <p className="fs-5"> Konzolové uživatelské rozhraní pro databázi. (C#, MSSQL)  </p>
                </div>
            </div>
        </>
    );
}
