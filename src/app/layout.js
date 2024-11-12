
import "./styles/globals.css";
import {Navbar} from './components/nav';
import {Footer} from './components/footer';
import { Sour_Gummy } from 'next/font/google';


const sour_gummy = Sour_Gummy({
  subsets: ['latin'],
  variable: '--font-sour_gummy',
  display: 'swap',
})





export const metadata = {
  title: "Homemade Smashburger",
  description: "Wir teilen uns Zeit, Raum und noch viele andere Dinge und Nicht- Dinge. Wir helfen und unterstützen voneinander, uns gegenseitig, lernen motivieren uns und lachen ziemlich viel. Gemeinsam geht einfach viel mehr als alleine! Das ist auch noch nicht alles. Nun kommen alle, die Lust auf absurd leckeres Essen haben an sieben Tage die Woche in den Genuss eines vielfältiges und einzigartiges Speiseangebot!",
  keywords: ['homemade smashburger', 'HOMEMADE SMASHBURGER', 'Smashburger göttingen', 'Homemade smashburger gottingen', 'Smashburger göttingen'],
  creator: 'Vladyslav Bazchenko',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${sour_gummy.variable}`}>
      <body >
        <main>
        <Navbar />
          {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
