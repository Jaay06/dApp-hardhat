// import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
require('dotenv').config({ path: '.env' });

type HardhatUserConfig = {
  solidity: string;
  networks: {
    goerli: { url: string | undefined; accounts: (string | undefined)[] };
  };
};

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;

// Whitelist Contract Address: 0x79605fEC926088ee8A048ACAbD5C84F14040a99f
