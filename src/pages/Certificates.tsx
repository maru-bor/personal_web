import {useTranslation} from 'react-i18next';


export default function Certificates(){

    const {t} = useTranslation();

    return(
        <>
            <h2>{t('certs.title')}</h2>
            <div id="certificates" className="mt-5">
                <div className="fs-4 border border-dark border-4">
                    <h4><strong> JavaScript Essentials 1 </strong> </h4>
                    <p> Cisco Networking Academy program </p>
                    <p> Datum dokončení: 20.01.2025 </p>
                </div>
                <div className="fs-4 border border-dark border-4">
                    <h4> <strong> JavaScript Essentials 2 </strong> </h4>
                    <p> Cisco Networking Academy program </p>
                    <p> Datum dokončení: 03.03.2025 </p>
                </div>
                <div className="fs-4 border border-dark border-4">
                    <h4> <strong> Linux Essentials </strong> </h4>
                    <p> Cisco Networking Academy program </p>
                    <p> Datum dokončení: 24.03.2025 </p>
                </div>



            </div>

        </>
    );
}