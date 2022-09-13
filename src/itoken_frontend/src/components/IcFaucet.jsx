import React,{useState} from "react";
import {itoken_backend,canisterId,createActor} from "../../../declarations/itoken_backend"
import { AuthClient} from "@dfinity/auth-client";

function IcFaucet(props){
  const [isdisabled,setdisabled] = useState(false);
   const [text,settext]= useState("request faucet")

  async function handleClick(){
    setdisabled(true)
const authClient= await AuthClient.create();
const identity = await authClient.getIdentity()
        console.log(canisterId);

        const authenticatedcanister= createActor(canisterId, {
agentOptions:{
identity,
}
            })

            const result= await authenticatedcanister.payOut();
             settext(result)

}

    return(
      
<div className="white window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free Cucumbers here! Claim 1,000 ICN tokens to {props.userprincipal}.</label>
      <p className="trade-buttons">
        <button  id="btn-payout" onClick={handleClick}>
      {text}
        </button>
      </p>
    </div>

      
    )
}

export default IcFaucet;