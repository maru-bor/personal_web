import './App.css'
import {useTranslation} from 'react-i18next';


export default function App(){

    const {t} = useTranslation();


    return(
        <>
            <h2>{t('about.title')}</h2>
            <div id="about-cont" className="mt-5" >
                <p id="about" className="fs-4"> {t('about.content')}
                </p>
            </div>

        </>
    );
}