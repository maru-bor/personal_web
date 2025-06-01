import phoneImg from './phone.svg';
import emailImg from './email.svg';
import {useTranslation} from 'react-i18next';

export default function Contact(){

    const {t} = useTranslation();


    return(
        <>
            <h2>{t('contact.title')}</h2>
            <div id="contact" className="mt-5 ">
                <div>
                    <img src={phoneImg} width={100}/>
                    <p className="fw-bold fs-5"> {t('contact.phone')} </p>

                </div>
                <div>
                    <img src={emailImg} width={100}/>
                    <p className="fw-bold fs-5">{t('contact.email')}</p>
                </div>
            </div>
        </>
    );
}