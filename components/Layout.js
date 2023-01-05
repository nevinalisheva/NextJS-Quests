import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({children, pageTitle}) => {
    return (
      <div className="content">
        <Head>
          <title>{pageTitle}</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        {children}
        <Footer />
      </div>
    );
}
 
export default Layout;