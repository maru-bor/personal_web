import {useTranslation} from 'react-i18next';


export default function Portfolio(){

    const {t} = useTranslation();

    return(
        <>
            <h2>{t('portfolio.title')}</h2>
            <div id="projects" className="mt-5 ">
                <div >
                    <h4><a className="text-decoration-none fw-bold" href="https://github.com/maru-bor/tamagotchi.git"> {t('portfolio.content.project_1.name')} </a></h4>
                    <p className="fs-5"> {t('portfolio.content.project_1.desc')}  </p>
                </div>
                <div>
                    <h4><a className="text-decoration-none fw-bold" href="https://github.com/maru-bor/passwd_game.git"> {t('portfolio.content.project_2.name')} </a></h4>
                    <p className="fs-5"> {t('portfolio.content.project_2.desc')} </p>
                </div>
                <div>
                    <h4><a className="text-decoration-none fw-bold" href="https://github.com/maru-bor/db_project.git"> {t('portfolio.content.project_3.name')} </a></h4>
                    <p className="fs-5"> {t('portfolio.content.project_3.desc')}  </p>
                </div>
            </div>
        </>
    );
}
