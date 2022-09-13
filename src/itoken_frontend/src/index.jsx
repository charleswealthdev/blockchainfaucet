import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import {AuthClient} from "@dfinity/auth-client";
const init = async () =>{
    const authClient = await AuthClient.create();

    if (await authClient.isAuthenticated()){

        handleauthenticated(authClient);
        // console.log("logged")
    }
    else{
    await authClient.login({

        identityProvider: "https://identity.ic0.app/#authorize",
        onSuccess:() => {
handleauthenticated(authClient);

        }
    });
}
}

async function handleauthenticated(authClient){

    // console.log(authClient.getIdentity());
   const identity = await authClient.getIdentity();
   console.log(identity)
   const userprincipal = identity._principal.toString();
   console.log(userprincipal)
    ReactDOM.render(<App userprincipal={userprincipal}   identity={identity}/>, document.getElementById("root"));

}
init();

