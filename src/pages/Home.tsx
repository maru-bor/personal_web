import {useTranslation} from 'react-i18next';

export default function Home(){

    const {t} = useTranslation();


    return(
        <>
            <div>
                <h1><strong>{t('home.name')}</strong></h1>
            </div>



        </>
    );
}