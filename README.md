# Burn Contract

## About
Burn Contract is a bare metal Ethereum smart contract template written in Solidity. Its only function is to receive ETH, which then is irrevocably locked in the contract (=burned).
Also, as an eternal epitaph, an event signaling the burning is emitted.

## Developing

This project is configured to use [Hardhat](https://hardhat.org/) as the environment to run tests and to deploy the contract to the blockchain.

Tests use [ethers.js](https://docs.ethers.io/v5/) and [Chai](https://www.chaijs.com/) with [Waffle](https://getwaffle.io/).
As deployment provider, [Alchemy](https://www.alchemy.com/) is used.

Install the required packages via [npm](https://www.npmjs.com/) by running `npm install`.

Create and edit a file named `.env` like shown in the file `.env-example`. You need to fill in your Alchemy API key and private key of your wallet to create the contract from to be able to deploy the contract. If you don't plan on deploying, simply creating the file with dummy values as shown in the example is sufficient to compile and test the contract.

### Compile and Run unit tests

Run `npm test` (this runs `npx hardhat test --network hardhat`). This already compiles the contract. To manually compile, run `npx hardhat compile`.

### Deployment to test net

Run `npx hardhat run scripts/deploy.js --network ropsten`. To configure other networks, edit `hardhat.config.js`.

## Existing instances

This contract is already deployed to Ropsten at [0x78e2ebdd5e8b7522d028608047e4be38fda50064](https://ropsten.etherscan.io/address/0x78e2ebdd5e8b7522d028608047e4be38fda50064). Feel free to add to the burn.
