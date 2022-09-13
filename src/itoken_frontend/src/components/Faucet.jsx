import {React,useState} from "react";
// import {itoken} from "../../../declarations/itoken_backend";
// import { AuthClient} from "@dfinity/auth-client"


function Faucet() {
  // const [isdisabled,setdisabled] = useState(false);
  // const [stext,settext]= useState("request faucet")

  async function handleClick() {
    setdisabled(true)

    // const authClient = await AuthClient.create();
    // const identity = await authClient.getIdentity();
    

    // console.log(canisterId,identity
    // )
  //  const identity = props.identity;

//     const authenticatedcanister = createActor( canisterId, {
// agentOptions:{
//   identity,
// }
//     })

  //   console.log(authenticatedcanister)
  //  const result= await itoken.payOut();
  //  settext(result)
  }
  

  return (
    <div className="white window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free Cucumbers here! Claim 1,000 ICN tokens to .</label>
      <p className="trade-buttons">
        <button disabled={isdisabled} id="btn-payout" onClick={handleClick}>
         faucet
        </button>
      </p>
    </div>
  );
}

// export default Faucet;
