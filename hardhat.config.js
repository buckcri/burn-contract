require('dotenv').config();

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const { API_URL, PRIVATE_KEY } = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

   solidity: "0.8.11",

   defaultNetwork: "hardhat",

   networks: {

      hardhat: {},

      ropsten: {

         url: API_URL,

         accounts: [`0x${PRIVATE_KEY}`]

      }

   },

}

