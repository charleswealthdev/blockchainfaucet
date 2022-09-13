import React, {useState} from "react";
import { Principal } from "@dfinity/principal";
import {hello , canisterId,createActor } from "../../../declarations/itoken_backend"
import { AuthClient} from "@dfinity/auth-client"

function Transfer(props) {
  const [recipientid, setid] = useState("");
  const [amount,setamount]= useState("");
  const [feedbackme,setfeedback]= useState("transfer")
  
  async function handleClick() {
    const recipient = Principal.fromText(recipientid);
    const amounttotransfer = Number(amount)

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();
     console.log(canisterId)

    const authenticatedcanister = createActor( canisterId, {
agentOptions:{
  identity,
}
    })

    const feedback =await authenticatedcanister.transfer(recipient ,amounttotransfer);
setfeedback(feedback)
console.log(feedback,feedbackme)
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientid}
                onChange ={(e)=>setid(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"

                value={amount}
                onChange ={(e)=>setamount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} >
            {feedbackme}
          </button>
          
        </p>
      </div>
    </div>
  );
}

export default Transfer;
