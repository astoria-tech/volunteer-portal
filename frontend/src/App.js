import React, { useState, useEffect } from "react";
import SignIn from "./SignIn";
import Form from "./Form";
import "./App.css";

function App() {
  const [token, setToken] = useState(false);
  const [tokenChecked, setTokenChecked] = useState(false)
  useEffect(() => {
    if (!tokenChecked) {
      fetch("/api/v1/initial").then((res) => {
        if (res.status === 202) {
          setToken(true);
        }
      });
      setTokenChecked(true);
    }
  }, []); 
  return (
    <div className="App">
      <div className="header-container">
        <img src="https://uploads-ssl.webflow.com/5ed01da8465a6b1be64f9b8e/5ed17ad2b3da10416aa59570_AMAN%20Color%20Logo.svg" width="108" alt="" className="logo-image" />
        <div className="header orange">Astoria Mutual Aid Network</div>
        <div className="header slate">Volunteer Portal</div>
      </div>
      {token ? <Form />:<SignIn />}
      <div className="footer">
        <div className="footer-content">
          <div className="div-block">
            <img src="https://uploads-ssl.webflow.com/5ed01da8465a6b1be64f9b8e/5ed051930b4ead13225b7a8e_AMAN%20White%20Logo.svg" alt="" className="footer-logo" />
          </div>
          <div className="div-block">
            <h1 className="footer-link-header">Contact Us</h1>
            <a href="tel:646-397-8383" className="phone-number-link">646-397-8383</a>
          </div>
          <div className="div-block">
            <h1 className="footer-link-header">For Emergencies</h1>
            <a href="tel:911" className="phone-number-link">Call 911</a>
          </div>
          <div className="div-block">
            <h1 className="footer-link-header">Social Media</h1>
            <div className="link-block">
              <a href="https://www.facebook.com/AstoriaMutualAid/" target="_blank" rel="noopener noreferrer" className="link-block-5 w-inline-block">
                <img src="https://uploads-ssl.webflow.com/5ed01da8465a6b1be64f9b8e/5ed4525cc6c978354ce44490_Icon-Facebook.svg" alt="" className="image-12" />
              </a>
              <a href="https://www.instagram.com/astoria_mutual_aid/" target="_blank" rel="noopener noreferrer" className="link-block-6 w-inline-block">
                <img src="https://uploads-ssl.webflow.com/5ed01da8465a6b1be64f9b8e/5ed4525c4b317b006b7de60e_Icon-Instagram.svg" alt="" className="image-13"/>
              </a>
            </div>
          </div>
        </div>
        <p className="paragraph-4-copy">Please be aware of individuals or organizations claiming to be affiliated with Astoria Mutual Aid Network. Any and all correspondence from Astoria Mutual Aid Network should come directly from an email address with Astoriamutualaid@gmail.com or Team@astoriamutualaid.com</p>
      </div>
    </div>
  );
}

export default App;