import '../public/styles/globals.css';
import Header from "../components/Header";

export default function App({ Component, pageProps }){
 
  return(
    <>
      <Header />
      <div id="container">
        <Component {...pageProps} />
      </div>
    </>
  )
}