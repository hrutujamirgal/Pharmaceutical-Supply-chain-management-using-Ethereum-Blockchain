import React from "react";
import { useHistory } from "react-router-dom";

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#f5f5f5",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const flexStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};

const flexStyleButton = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const titleStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#000435",
};

const stepStyle = {
  marginTop: "30px",
  width: "250px",
  maxWidth: "1000px",
  margin: "0 auto",
};

const stepTitleStyle = {
  fontSize: "28px",
  marginBottom: "10px",
  color: "#333",
};

const noteStyle = {
  fontSize: "16px",
  color: "#888",
  marginBottom: "20px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "15px 30px",
  fontSize: "18px",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const btnSpace = {
  marginLeft: "4%",
};

function Home() {
  const history = useHistory();

  const handleSUP = () => {
    localStorage.setItem("role", "SUP");
    history.push("/roles");
  };

  const handleMAN = () => {
    localStorage.setItem("role", "MAN");
    history.push("/roles");
  };

  const handleDIS = () => {
    localStorage.setItem("role", "DIS");
    history.push("/roles");
  };

  const handleRET = () => {
    localStorage.setItem("role", "RET");
    history.push("/roles");
  };

  const redirectToAddMed = () => {
    history.push("/addmed");
  };

  const redirectToSupply = () => {
    history.push("/supply");
  };

  const redirectToTrack = () => {
    history.push("/track");
  };

  return (
    <>
      <div className="heading-head"><br />
        <h1>Pharmaceutical supply chain management using Blockchain</h1>
        <br />
        <br />
        <nav className="nav-head ">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#supplyChain">Supply Chain</a>
        </nav>
      </div>

      <div className="home" id="home">
        <div className="front">
          <div className="intro-text">Ensuring Wellness, Link by Link:</div>
          <div className="work-text emphasis-text">
            The Trusted Guardian of Health in Pharmaceutical Supply Chains
          </div>
        </div>
      </div>

      <div className="features" id="features">
        <div className="heading">
          <p>Why Ethereum BlockChain ?</p>
        </div>
        <div className="underword"></div>
        <div className="feat">
          <div className="p1" id="p1">
            <div className="box">
              <img
                src={process.env.PUBLIC_URL + "/images/smartContract.png"}
                alt="face detection"
              />
            </div>
            <h1>Smart Contract</h1>
            <p>
              Self-executing contracts with the terms of the agreement directly
              written into code.
            </p>
          </div>

          <div className="p1" id="p1">
            <div className="box">
              <img
                src={process.env.PUBLIC_URL + "/images/daApps.png"}
                alt="attendance system"
              />
            </div>
            <h1>Decentralized Applications (DApps)</h1>
            <p>
              DApps operate on a peer-to-peer network, providing transparency,
              security, and resilience against censorship.{" "}
            </p>
          </div>

          <div className="p1" id="p1">
            <div className="box">
              <img
                src={process.env.PUBLIC_URL + "/images/token.png"}
                alt="projects"
              />
            </div>
            <h1>Token Standards</h1>
            <p>
              The creation of a wide range of tokens representing various
              assets, from cryptocurrencies to digital collectibles.
            </p>
          </div>
        </div>
      </div>

      <div style={containerStyle} id="supplyChain">
        <h1 style={titleStyle}>Pharmaceutical Supply Chain Flow</h1>
        <p style={noteStyle}>
          (Note:<u>Owner</u> can only deployed the smart contract on the
          blockchain)
        </p>

        <div style={stepStyle}>
          <h2 style={stepTitleStyle}>Step 1: Role Registration</h2>
          <p style={noteStyle}>
            (Note: This is a one-time step. Skip to step 2 if already done)
          </p>
          <br />
          <br />
          <div style={flexStyle}>
            <div style={flexStyleButton}>
              <button style={buttonStyle} onClick={() => handleSUP()}>
                Supplier
              </button>
              <button
                style={{ ...buttonStyle, ...btnSpace }}
                onClick={() => handleMAN()}
              >
                Manufacturer
              </button>
              <button
                style={{ ...buttonStyle, ...btnSpace }}
                onClick={() => handleDIS()}
              >
                Distributer
              </button>
              <button
                style={{ ...buttonStyle, ...btnSpace }}
                onClick={() => handleRET()}
              >
                Retailer
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div style={flexStyle}>
          <div style={stepStyle}>
            <h2 style={stepTitleStyle}>Step 2: Order Medicines</h2>
            <br />
            <button style={buttonStyle} onClick={redirectToAddMed}>
              Order Medicines
            </button>
          </div>

          <div style={stepStyle}>
            <h2 style={stepTitleStyle}>Step 3: Control Supply Chain</h2>
            <br />
            <button style={buttonStyle} onClick={redirectToSupply}>
              Control Supply Chain
            </button>
          </div>
        </div>

        <br />
        <br />
        <br />

        <hr />

        <br />
        <br />

        <div style={stepStyle}>
          <h2 style={stepTitleStyle}>Track the Medicines</h2>
          <button style={buttonStyle} onClick={redirectToTrack}>
            Track Medicines
          </button>
        </div>
      </div>

      <p>All copyrights reserved @2023 to Vit TY-31</p>
    </>
  );
}

export default Home;
