import {useTranslation} from 'react-i18next';

export default function Education(){

    const {t} = useTranslation();


    return(
        <>
            <h2>{t('edu.title')}</h2>
            <div id="education" className="mt-5">
                <div className="fs-4 text-start">
                    <h4><strong>{t('edu.content.school_name')}</strong> </h4>
                    <p>{t('edu.content.year')}</p>
                    <p>{t('edu.content.major')}</p>
                    <p>{t('edu.content.student_year')}</p>
                    <p>{t('edu.content.web')} <a href="https://www.spsejecna.cz/">www.spsejecna.cz</a></p>
                </div>

            </div>
        </>
    );
}