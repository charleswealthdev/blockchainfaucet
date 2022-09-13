import React from "react";
import Header from "./Header";
import IcFaucet from "./IcFaucet";
import Balance from "./Balance";
import Transfer from "./Transfer";
import Footer from "./Footer"


function App(props) {

  return (
    <div id="screen">
      <Header />
      <IcFaucet userprincipal={props.userprincipal} />
      <Balance />
      <Transfer userprincipal={props.userprincipal}/>
      <Footer/>
    </div>
  );
}

export default App;
