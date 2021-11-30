import { BigNumber } from "ethers";

export const POLIS_FANTOM_BRIDGE = "polis-fantom";
export const POLIS_BSC_BRIDGE = "polis-bsc";
export const POLIS_POLYGON_BRIDGE = "polis-polygon";

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

export const BNB_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png";

export const FTM_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png";

export const POLYGON_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png";

export const LARGEST_UINT256 = BigNumber.from(
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"
);

export const POLLING_INTERVAL = 5000;

export const DEFAULT_BRIDGE_DIRECTION = POLIS_FANTOM_BRIDGE;

export const nativeCurrencies = {
  56: {
    chainId: 56,
    decimals: 18,
    logoURI: BNB_CURRENCY_LOGO,
    name: "Binance Coin",
    address: ADDRESS_ZERO,
    symbol: "BNB",
    mode: "NATIVE",
    homeTokenAddress:
      "0x99Ce06D2eEf0b1c7A76B897C0439a284bf63eE3f".toLowerCase(),
  },
  137: {
    chainId: 137,
    decimals: 18,
    logoURI: POLYGON_CURRENCY_LOGO,
    name: "Polygon",
    address: ADDRESS_ZERO,
    symbol: "MATIC",
    mode: "NATIVE",
    homeTokenAddress:
      "0xb4b6AB1f26B2Adbf0db2a7399508a7dbf4877c80".toLowerCase(),
  },
  250: {
    chainId: 250,
    decimals: 18,
    logoURI: FTM_CURRENCY_LOGO,
    name: "Fantom",
    address: ADDRESS_ZERO,
    symbol: "FTM",
    mode: "NATIVE",
    homeTokenAddress:
      "0xA5FF89642A1Daaf8E5A3a2610966940b6A5cFC9D".toLowerCase(),
  },
};

export const nativeCurrencyMediators = {
  56: "0x7d5d0ba109a6b9f6dde7d2a89a8150b589d49504".toLowerCase(),
  137: "0xb4b6AB1f26B2Adbf0db2a7399508a7dbf4877c80".toLowerCase(),
  250: "0xB771bA1483Eb9aC628a7E81af060Aed52cE74A53".toLowerCase(),
};

export const networkNames = {
  56: "Binance Smart Chain",
  137: "Polygon",
  250: "Fantom Opera",
  333999: "Polis Olympus Chain",
};

export const networkLabels = {
  56: "BSC",
  137: "Polygon",
  250: "Fantom",
  333999: "Polis",
};

export const networkCurrencies = {
  56: {
    name: "Binance Coin",
    symbol: "BNB",
  },
  137: {
    name: "Polygon",
    symbol: "MATIC",
  },
  250: {
    name: "Fantom",
    symbol: "FTM",
  },
  333999: {
    name: "Polis",
    symbol: "POLIS",
  },
};

export const chainUrls = {
  56: {
    rpc: ["https://bsc-dataseed.binance.org/"],
    explorer: "https://bscscan.com",
    chainId: 56,
    name: networkNames[56],
  },
  137: {
    rpc: ["https://polygon-rpc.com/"],
    explorer: "https://polygonscan.com",
    chainId: 137,
    name: networkNames[137],
  },
  250: {
    rpc: ["https://rpc.ftm.tools/"],
    explorer: "https://ftmscan.com",
    chainId: 250,
    name: networkNames[250],
  },
  333999: {
    rpc: ["https://rpc.polis.tech"],
    explorer: "https://explorer.polis.tech",
    chainId: 333999,
    name: networkNames[333999],
  },
};

export const defaultTokensUrl = {
  56: "https://raw.githubusercontent.com/polischain/bridge-ui/main/tokenlist/bsc/bsc.json",
  137: "https://raw.githubusercontent.com/polischain/bridge-ui/main/tokenlist/polygon/polygon.json",
  250: "https://raw.githubusercontent.com/polischain/bridge-ui/main/tokenlist/fantom/fantom.json",
  333999:
    "https://raw.githubusercontent.com/polischain/bridge-ui/main/tokenlist/polis/polis.json",
};

export const GRAPH_HEALTH_ENDPOINT =
  "https://api.thegraph.com/index-node/graphql";

export const LOCAL_STORAGE_KEYS = {
  DONT_SHOW_CLAIMS: "dont-show-claims",
  FTM_RPC_URL: "ftm-rpc-url",
  POLIS_RPC_URL: "polis-rpc-url",
  BSC_RPC_URL: "bsc-rpc-url",
  POLYGON_RPC_URL: "polygon-rpc-url",
  NEVER_SHOW_CLAIMS: "never-show-claims",
  INFINITE_UNLOCK: "infinite-unlock",
  CUSTOM_TOKENS: "customTokens",
  DISABLE_BALANCE_WHILE_TOKEN_FETCH: "disable-balance-while-token-fetch",
  BRIDGE_DIRECTION: "bridge-direction",
};
