import { BigNumber } from "ethers";

export const POLIS_BSC_BRIDGE = "polis-bsc";
export const BSC_POLIS_BRIDGE = "bsc-polis";

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export const ETHER_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png";
export const BNB_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png";
export const POLIS_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/2359.png";

export const LARGEST_UINT256 = BigNumber.from(
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"
);

export const POLLING_INTERVAL = 5000;

export const DEFAULT_BRIDGE_DIRECTION = POLIS_BSC_BRIDGE;

export const NON_ETH_CHAIN_IDS = [56];

export const XDAI_CHAIN_IDS = [333999];

export const nativeCurrencies = {
  56: {
    chainId: 56,
    decimals: 18,
    logoURI: BNB_CURRENCY_LOGO,
    name: "Binance Coin",
    address: ADDRESS_ZERO,
    symbol: "BNB",
    mode: "NATIVE",
    homeTokenAddress: "".toLowerCase(),
  },
  333999: {
    chainId: 333999,
    decimals: 18,
    logoURI: POLIS_CURRENCY_LOGO,
    name: "Polis",
    address: ADDRESS_ZERO,
    symbol: "POLIS",
    mode: "NATIVE",
    homeTokenAddress: "".toLowerCase(),
  },
};

export const nativeCurrencyMediators = {
  1: "0xa6439ca0fcba1d0f80df0be6a17220fed9c9038a".toLowerCase(),
  42: "0x227a6f13aa0dba8912d740c0f88fb1304b2597e1".toLowerCase(),
  56: "0xefc33f8b2c4d51005585962be7ea20518ea9fd0d".toLowerCase(),
  99: "0xF6a1Ad94d29679388e533B63bfE1Fd6f1680D23B".toLowerCase(),
};

export const networkNames = {
  1: "ETH Mainnet",
  42: "Kovan Testnet",
  56: "Binance Smart Chain",
  77: "Sokol Testnet",
  99: "POA Network",
  100: "xDai Chain",
};

export const networkLabels = {
  1: "Mainnet",
  3: "Ropsten",
  4: "Rinkeby",
  5: "Görli",
  42: "Kovan",
  56: "BSC",
  77: "Sokol",
  99: "POA",
  100: "xDai",
};

export const networkCurrencies = {
  1: {
    name: "Ethereum",
    symbol: "ETH",
  },
  42: {
    name: "Ethereum",
    symbol: "ETH",
  },
  56: {
    name: "Binance Coin",
    symbol: "BNB",
  },
  77: {
    name: "Sokol POA",
    symbol: "SPOA",
  },
  99: {
    name: "POA",
    symbol: "POA",
  },
  100: {
    name: "xDai",
    symbol: "xDai",
  },
};

const {
  REACT_APP_MAINNET_RPC_URL,
  REACT_APP_XDAI_RPC_URL,
  REACT_APP_POA_RPC_URL,
  REACT_APP_SOKOL_RPC_URL,
  REACT_APP_KOVAN_RPC_URL,
  REACT_APP_BSC_RPC_URL,
} = process.env;

export const chainUrls = {
  1: {
    rpc: REACT_APP_MAINNET_RPC_URL.split(" "),
    explorer: "https://blockscout.com/eth/mainnet",
    chainId: 1,
    name: networkNames[1],
  },
  42: {
    rpc: REACT_APP_KOVAN_RPC_URL.split(" "),
    explorer: "https://blockscout.com/eth/kovan",
    chainId: 42,
    name: networkNames[42],
  },
  56: {
    rpc: REACT_APP_BSC_RPC_URL.split(" "),
    explorer: "https://bscscan.com",
    chainId: 56,
    name: networkNames[56],
  },
  77: {
    rpc: REACT_APP_SOKOL_RPC_URL.split(" "),
    explorer: "https://blockscout.com/poa/sokol",
    chainId: 77,
    name: networkNames[77],
  },
  99: {
    rpc: REACT_APP_POA_RPC_URL.split(" "),
    explorer: "https://blockscout.com/poa/core",
    chainId: 99,
    name: networkNames[99],
  },
  100: {
    rpc: REACT_APP_XDAI_RPC_URL.split(" "),
    explorer: "https://blockscout.com/xdai/mainnet",
    chainId: 100,
    name: networkNames[100],
  },
};

export const defaultTokensUrl = {
  100: "https://tokens.honeyswap.org",
  1: "https://tokens.uniswap.org",
  42: "",
  77: "",
  99: "",
  56: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/tokenlist.json",
};

export const GRAPH_HEALTH_ENDPOINT =
  "https://api.thegraph.com/index-node/graphql";

export const LOCAL_STORAGE_KEYS = {
  DONT_SHOW_CLAIMS: "dont-show-claims",
  MAINNET_RPC_URL: "mainnet-rpc-url",
  XDAI_RPC_URL: "xdai-rpc-url",
  POA_RPC_URL: "poa-rpc-url",
  BSC_RPC_URL: "bsc-rpc-url",
  KOVAN_RPC_URL: "kovan-rpc-url",
  SOKOL_RPC_URL: "sokol-rpc-url",
  NEVER_SHOW_CLAIMS: "never-show-claims",
  INFINITE_UNLOCK: "infinite-unlock",
  CUSTOM_TOKENS: "customTokens",
  DISABLE_BALANCE_WHILE_TOKEN_FETCH: "disable-balance-while-token-fetch",
  BRIDGE_DIRECTION: "bridge-direction",
};
