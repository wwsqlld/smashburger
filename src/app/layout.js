
import "./styles/globals.css";
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Sour_Gummy } from 'next/font/google';


const sour_gummy = Sour_Gummy({
  subsets: ['latin'],
  variable: '--font-sour_gummy',
  display: 'swap',
})





export const metadata = {
  title: "Homemade Smashburger",
  description: "Wir teilen uns Zeit, Raum und noch viele andere Dinge und Nicht- Dinge.",
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
