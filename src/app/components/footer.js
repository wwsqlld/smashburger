import Image from "next/image";
import Link from 'next/link';


export function Footer() {
    return (
        <div className="footer">
            <div className="info-container">
                <div className="info-log-container">
                        <Image 
                        alt="short logo"
                        src='/shortlogo.jpg'
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
                            Mi - So  16:00 - 21:30  
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
