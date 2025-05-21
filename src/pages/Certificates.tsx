import {useTranslation} from 'react-i18next';
import jsCert1 from '../../public/js_1_cert.webp';
import jsCert2 from '../../public/js_2_cert.webp';
import linuxCert from '../../public/linux_cert.webp';


export default function Certificates(){

    const {t} = useTranslation();

    return(
        <>
            <h2>{t('certs.title')}</h2>
            <div id="certificates" className="mt-5">

                <img src={jsCert1} width={500}/>
                <img src={jsCert2} width={500}/>
                <img src={linuxCert} width={500}/>

            </div>

        </>
    );
}