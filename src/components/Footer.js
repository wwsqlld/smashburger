import Image from "next/image";
import Link from 'next/link';


export function Footer() {
    return (
        <div className="footer">
            <div className="info-container">
                <div className="info-log-container">
                        <Image 
                        alt="short logo"
                        src='/shortlogo.webp'
                        width={160}
                        height={62.8}
                        draggable="false"
                        quality={100}
                        unoptimized
                        />
                        
                </div>
                <div className="info-text-container">
                    <p className="invite-text">Besuche uns</p>
                </div>
                
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.9477227595457!2d9.927285572045422!3d51.53251867097252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4d51be4583ef7%3A0xd6fe49a601e6fecc!2sThommy&#39;s%20Smash%20Burger!5e0!3m2!1sde!2sde!4v1740666827807!5m2!1sde!2sde" 
                
                className="maps-integration"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
                <div className="info-contacts-container">
                    <div className="info-location">
                        <p>Papendiek 1, 37073 Göttingen</p>
                    </div>
                    <div className="info-contacts">
                        <p>Tel: 055138103737</p>
                    </div>
                    <div className="info-time">
                        <p>
                           Öffnungszeiten
                            <br/>
                            Mi - So
                            <br />
                            16:00 - 21:30  
                        </p>
                    </div>
                </div>
                
            </div>
            
            <div className="uk-container">
                <div className="info-uk-links">
                    <Link  href="/impressum">
                        <p>Impressum</p>
                    </Link>
                    <Link  href="/datenschutz">
                        <p>Datenschutz</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
