import "../css/Logo.css";
import {Title} from "../components/Title"
import "../css/header.css";
import {Footer} from "../components/Footer"
import "../css/footer.css";
import "../css/top_header.css";
import "../css/globals.css";
import "../css/home.css";
import "../css/auth.css";
import "../css/loginregister.css";
import "../css/loginform.css";


export default function Server({ Component, pageProps }) {
  return(    

      <>
        <Title />
        <Component {...pageProps} />
        <Footer />
      </>
    ) 
  }
  
