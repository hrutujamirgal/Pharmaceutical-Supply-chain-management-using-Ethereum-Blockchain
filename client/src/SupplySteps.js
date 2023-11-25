import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Web3 from "web3";
import SupplyChainABI from "./artifacts/SupplyChain.json";

function SupplySteps() {
  const history = useHistory();

  useEffect(() => {
    loadWeb3();
    loadBlockchaindata();
  }, []);

  const [currentaccount, setCurrentaccount] = useState("");
  const [loader, setloader] = useState(true);
  const [SupplyChain, setSupplyChain] = useState();
  const [MED, setMED] = useState();
  const [MedStage, setMedStage] = useState();
  const [ID, setID] = useState();
  const [BatchID, setBatchID] = useState();
  const [verified, setVerfied] = useState(false);
  const [expirydate, setExpiryDate] = useState("");

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };
  const loadBlockchaindata = async () => {
    setloader(true);
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentaccount(account);
    const networkId = await web3.eth.net.getId();
    const networkData = SupplyChainABI.networks[networkId];
    if (networkData) {
      const supplychain = new web3.eth.Contract(
        SupplyChainABI.abi,
        networkData.address
      );
      setSupplyChain(supplychain);
      var i;
      const medCtr = await supplychain.methods.medicineCtr().call();
      const med = {};
      const medStage = [];
      for (i = 0; i < medCtr; i++) {
        med[i] = await supplychain.methods.MedicineStock(i + 1).call();
        medStage[i] = await supplychain.methods.showStage(i + 1).call();
      }
      setMED(med);
      setMedStage(medStage);
      setloader(false);
    } else {
      window.alert("The smart contract is not deployed to current network");
    }
  };
  if (loader) {
    return (
      <div>
        <h1 className="wait">Loading...</h1>
      </div>
    );
  }
  const redirect_to_home = () => {
    history.push("/");
  };

  const handleBtn1 =()=>{
    localStorage.setItem("step", "RMS");
    history.push("/checkSupply")
  }

  const handleBtn2 = () => {
    localStorage.setItem("step", "MAN");
    history.push("/checkSupply");
  };

  const handleBtn3 =()=>{
    localStorage.setItem("step", "DIS");
    history.push("/checkSupply")
  }

  const handleBtn4 = () => {
    localStorage.setItem("step", "RET");
    history.push("/checkSupply");
  };

  return (
    <div>
      <span className="address">
        <b>Current Account Address:</b> {currentaccount}
      </span>
      <span
        onClick={redirect_to_home}
        className="btn btn-outline-danger btn-sm btn-left"
      >
        {" "}
        HOME
      </span>
      <br />
      <br />
      <br />
      <h1>
        <b>Supply Chain Flow:</b>
      </h1>
      <p className="supply-chain-flow">
        Medicine Order <span>&rarr;</span> Raw Material Supplier{" "}
        <span>&rarr;</span> Manufacturer <span>&rarr;</span> Distributor{" "}
        <span>&rarr;</span> Retailer <span>&rarr;</span> Consumer
      </p>

      <br />

      <table className="table table-sm table-dark">
        <thead>
          <tr>
            <th scope="col">Medicine ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Current Processing Stage</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(MED).map(function (key) {
            return (
              <tr key={key}>
                <td>{MED[key].id}</td>
                <td>{MED[key].name}</td>
                <td>{MED[key].description}</td>
                <td>{MedStage[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <br />
      <br />
      <br />

      <div className="supplySteps">
        <h3>Step Wise flow of the Supply Chain</h3>
        <br />
        <div className="step">
          <button onClick={() => handleBtn1()}>
            Step 1: Raw Material Supplier
          </button>
        </div>
        <div className="step">
          <button onClick={() => handleBtn2()}>Step 2: Manufacturer</button>
        </div>
        <div className="step">
          <button onClick={() => handleBtn3()}>Step 3: Distributer</button>
        </div>
        <div className="step">
          <button onClick={() => handleBtn4()}>Step 4: Retailer</button>
        </div>
      </div>
    </div>
  );
}

export default SupplySteps;
