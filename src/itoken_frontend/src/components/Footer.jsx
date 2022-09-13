import React from "react";

function Header() {
  return (
    <header>
      <div className="white window" id="logo">
        <h1>
          <span role="img" aria-label="tap emoji">
            💎
          </span>
       copy and send claimed faucet tokens here 
       <h6> ukloh-7dkc7-ukxka-g5iqb-2ozug-6lzrf-4lfv4-vmpn4-ls4uq-ud3lp-nqe <button onClick={()=>navigator.clipboard.writeText('ukloh-7dkc7-ukxka-g5iqb-2ozug-6lzrf-4lfv4-vmpn4-ls4uq-ud3lp-nqe')} > copy</button></h6>
        </h1>
      </div>
    </header>
  );
}

export default Header;
