import { BigNumber } from "ethers";

export const POLIS_BSC_BRIDGE = "polis-bsc";
export const BSC_POLIS_BRIDGE = "bsc-polis";

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

export const BNB_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png";
export const POLIS_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/2359.png";

export const LARGEST_UINT256 = BigNumber.from(
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"
);

export const POLLING_INTERVAL = 5000;

export const DEFAULT_BRIDGE_DIRECTION = POLIS_BSC_BRIDGE;

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
  56: "Binance Smart Chain",
  333999: "Polis Olympus Chain",
};

export const networkLabels = {
  56: "BSC",
  333999: "Polis",
};

export const networkCurrencies = {
  56: {
    name: "Binance Coin",
    symbol: "BNB",
  },
  333999: {
    name: "Polis",
    symbol: "POLIS"
  },
};

export const chainUrls = {
  56: {
    rpc: ["https://bsc-dataseed.binance.org/"],
    explorer: "https://bscscan.com",
    chainId: 56,
    name: networkNames[56],
  },
  333999: {
    rpc: ["https://rpc.polis.tech"],
    explorer: "https://explorer.polis.tech",
    chainId: 333999,
    name: networkNames[333999],
  },
};

export const defaultTokensUrl = {
  56: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/tokenlist.json",
  333999:
    "https://raw.githubusercontent.com/hadeswap/hadeswap-interface/master/src/constants/token-lists/hadeswap-tokenlist.json",
};

export const GRAPH_HEALTH_ENDPOINT =
  "https://api.thegraph.com/index-node/graphql";

export const LOCAL_STORAGE_KEYS = {
  DONT_SHOW_CLAIMS: "dont-show-claims",
  BSC_RPC_URL: "bsc-rpc-url",
  POLIS_RPC_URL: "polis-rpc-url",
  NEVER_SHOW_CLAIMS: "never-show-claims",
  INFINITE_UNLOCK: "infinite-unlock",
  CUSTOM_TOKENS: "customTokens",
  DISABLE_BALANCE_WHILE_TOKEN_FETCH: "disable-balance-while-token-fetch",
  BRIDGE_DIRECTION: "bridge-direction",
};
