
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
  title: "HOMEMADE SMASHBURGER",
  description: "",
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
