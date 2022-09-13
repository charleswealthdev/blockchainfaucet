import React ,{ useState}from "react";
import {Principal} from "@dfinity/principal";
import {itoken_backend} from "../../../declarations/itoken_backend"

// import { useState } from "../../../../dist/index.eb718896";

function Balance() {

  const [input,setinput] = useState("")
  const [balanceresult,setbalance]= useState("");
  const [symbol,setsymbol]= useState("");
  // const [ishidden,sethidden] = useState(true);

  
  async function handleClick() {
  const principal = Principal.fromText(input)

 const balance= await itoken_backend.balanceOf(principal);
setbalance(balance.toLocaleString())
console.log(balance)


setsymbol(await itoken_backend.getSymbol())
// sethidden(false);
  }


  return (
    <div className="window white">
      <label>Check token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          input={input}
          onChange={(e)=>setinput(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
          
        >
          Check Balance
        </button>
      </p>
      <p >This principal has a balance of {balanceresult} {symbol}.</p>
    </div>
  );
}

export default Balance;
