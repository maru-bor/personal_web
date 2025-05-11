import phoneImg from './phone.png';
import emailImg from './email.svg';

export default function Contact(){

    return(
        <>
            <h2>Kontakt</h2>
            <div id="contact" className="mt-5 ">
                <div>
                    <img src={phoneImg} width={100}/>
                    <p className="fw-bold fs-5"> Telefon: +420 773 684 774 </p>

                </div>
                <div>
                    <img src={emailImg} width={100}/>
                    <p className="fw-bold fs-5">E-mail: marie.borisova@gmail.com </p>
                </div>
            </div>
        </>
    );
}