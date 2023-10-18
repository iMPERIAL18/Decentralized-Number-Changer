# AVAX Intermediate Module 2

This repository contains a simple Web App that allows users to interact with a smart contract deployed on a local Hardhat network using Remix and MetaMask.

## Getting Started

Follow these steps to set up and run the Web App on your local environment:

1. Connect MetaMask to your local Hardhat network.

- Ensure you have MetaMask installed in your browser.
- Connect MetaMask to your local Hardhat network.

2. Install dependencies.

```bash
npm install
```

## Execution

1. Run Remixd to connect Remix to your local project.

2. Start the local Hardhat node.

```bash
npx hardhat node
```

3. Open Remix and change the environment to the Hardhat node.
4. Compile the smart contract in Remix.
5. Copy the deployed contract address.
6. Paste the deployed contract address into the `contractAddress` variable in `App.jsx`.
7. Start the development server.
8. Go to http://localhost:5173 in your browser and click the "Connect" button in MetaMask.

## Usage

Once you have connected your Web App to the local network and MetaMask, you can interact with the smart contract using the provided buttons:

- Increment: Increases a value in the smart contract.
- Decrement: Decreases a value in the smart contract.
- Reset: Resets the value in the smart contract.

## Authors

- Hemin Patel
- GitHub: [https://github.com/iMPERIAL18](https://github.com/iMPERIAL18)
