import "../css/logo.css";
import {Title} from "../components/Title"
import {Header} from "../components/Header"
import "../css/header.css";
import {Footer} from "../components/Footer"
import "../css/footer.css";
import {Top_Header} from "../components/Top_Header"
import "../css/top_header.css";


export default function Server({ Component, pageProps }) {
    return(    

      <>
        <Title />
        <Top_Header />
        <Header />
        <Component {...pageProps} />
        <Footer />

      </>
    ) 
  }
  
