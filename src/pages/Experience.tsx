import {useTranslation} from 'react-i18next';


export default function Experience(){

    const {t} = useTranslation();


    return(
        <>
            <h2>{t('work_exp.title')}</h2>
            <div id="experience">
                <div>
                    <h4 className="fw-bold">{t('work_exp.content.work_1.job_pos')}</h4>
                    <p className="fw-bold">{t('work_exp.content.work_1.job_type')}</p>
                    <p className="fs-5">{t('work_exp.content.work_1.company_pos')}</p>
                    <p className="fs-5">{t('work_exp.content.work_1.time')}</p>
                    <p className="fs-5">{t('work_exp.content.work_1.job_desc')} </p>

                </div>
                <div>
                    <h4 className="fw-bold">{t('work_exp.content.work_2.job_pos')}</h4>
                    <p className="fw-bold">{t('work_exp.content.work_2.job_type')}</p>
                    <p className="fs-5">{t('work_exp.content.work_2.company_pos')}</p>
                    <p className="fs-5">{t('work_exp.content.work_2.time')}</p>
                    <p className="fs-5">{t('work_exp.content.work_2.job_desc')} </p>
                </div>

            </div>
        </>
    );
}