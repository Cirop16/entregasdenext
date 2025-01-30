import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

import AuthContextProvider from "@/providers/AuthProvider";


export const metadata = {
  title: "Pagina con next",
  authors: [{ name: "Ciro Pupillo" }],
  description: "Aplicacion de comercio electrónico",
  keywords: "comercio electrónico, aplicación, nextjs, tailwind, react, lucide, tailwindcss, Ciro Pupillo, programador, argentina, ecommerce"
}

function RootLayout({ children }) {

  return (
    <html lang="en">
           {/* <meta name="author" content="Ciro Pupillo" />
                  <title>Pagina con next</title> */}
      <body className="bg-background min-h-screen flex flex-col">
        <AuthContextProvider>
        <Header />
        <main className="grow p-4">
          {children}
        </main>
        <Footer/>
        </AuthContextProvider>
      </body>
    </html>
  );
}
export default RootLayout