import { useState } from "react";
import { ethers } from "ethers";
import contract_ABI from "./contract_ABI.json";

function App() {
  const contractAddresss = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const [count, setCount] = useState(0);
  const [connectButtonText, setConnectButtonText] = useState("Connect");
  const [address, setAddress] = useState(null);

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  async function connect() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tempProvider);

        let tempSigner = tempProvider.getSigner();
        setSigner(tempSigner);

        let tempContract = new ethers.Contract(
          contractAddresss,
          contract_ABI,
          tempSigner
        );
        setContract(tempContract);
        setConnectButtonText("Click to show current number");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("absent");
    }
  }

  async function increment() {
    try {
      await contract.increment();
      const newVal = await contract.getNumber();
      console.log(newVal);
      setCount(newVal.toNumber());
    } catch (error) {
      console.error("Error incrementing:", error);
    }
  }

  async function decrement() {
    try {
      await contract.decrement();
      const newVal = await contract.getNumber();
      console.log(newVal);
      setCount(newVal.toNumber());
    } catch (error) {
      console.error("Error decrementing:", error);
    }
  }

  async function reset() {
    try {
      await contract.reset();
      const newVal = await contract.getNumber();
      console.log(newVal);
      setCount(newVal.toNumber());
    } catch (error) {
      console.error("Error resetting:", error);
    }
  }

  const isContractReady = !!contract;
  return (
    <>
      <span className="number">Number: {count}</span>
      <span className="metamask">
        <button
          onClick={() => {
            connect().then(() => {
              contract.getNumber().then((val) => {
                setCount(val.toNumber());
              });
            });
          }}
        >
          {connectButtonText}
        </button>
      </span>
      <div className="buttons">
        {isContractReady && (
          <>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
