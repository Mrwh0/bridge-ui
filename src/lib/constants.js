import { BigNumber } from "ethers";

export const POLIS_FANTOM_BRIDGE = "polis-fantom";
export const POLIS_BSC_BRIDGE = "polis-bsc";
export const POLIS_POLYGON_BRIDGE = "polis-polygon";
export const POLIS_MAINNET_BRIDGE = "polis-mainnet";
export const POLIS_AVALANCHE_BRIDGE = "polis-avalanche";

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

export const ETHEREUM_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png";

export const BNB_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png";

export const FTM_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png";

export const POLYGON_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png";

export const AVALANCHE_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png";

export const LARGEST_UINT256 = BigNumber.from(
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"
);

export const POLLING_INTERVAL = 5000;

export const DEFAULT_BRIDGE_DIRECTION = POLIS_FANTOM_BRIDGE;

export const nativeCurrencies = {
  1: {
    chainId: 1,
    decimals: 18,
    logoURI: ETHEREUM_CURRENCY_LOGO,
    name: "Ethereum",
    address: ADDRESS_ZERO,
    symbol: "ETH",
    mode: "NATIVE",
    homeTokenAddress:
      "0x5B5B05D93c7e374a6D223BFA9591281fbf48237F".toLowerCase(),
  },
  56: {
    chainId: 56,
    decimals: 18,
    logoURI: BNB_CURRENCY_LOGO,
    name: "Binance Coin",
    address: ADDRESS_ZERO,
    symbol: "BNB",
    mode: "NATIVE",
    homeTokenAddress:
      "0xDb6D07410F3b4e73553Ede8aFc2FC6922B19863E".toLowerCase(),
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
      "0xD045aC01FFB46d42ba923b9E7866F5e3519e6723".toLowerCase(),
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
      "0x03C7A86e14e9BC71d84A4DBe6352b1561402e29C".toLowerCase(),
  },
  43114: {
    chainId: 43114,
    decimals: 18,
    logoURI: AVALANCHE_CURRENCY_LOGO,
    name: "Avalanche",
    address: ADDRESS_ZERO,
    symbol: "AVAX",
    mode: "NATIVE",
    homeTokenAddress:
      "0x3126cadD2d364612E49B4c7779116037EF9fCe91".toLowerCase(),
  },
};

export const nativeCurrencyMediators = {
  1: "0xa05924cbd2a8434b3993394b9bed122583a783ad".toLowerCase(),
  56: "0x7d5d0ba109a6b9f6dde7d2a89a8150b589d49504".toLowerCase(),
  137: "0x594e8e761c509101decd0953dbfebd2f73cb075a".toLowerCase(),
  250: "0xB771bA1483Eb9aC628a7E81af060Aed52cE74A53".toLowerCase(),
  43114:"pending".toLowerCase(),
};

export const networkNames = {
  1: "Mainnet",
  56: "Binance Smart Chain",
  137: "Polygon",
  250: "Fantom Opera",
  43114: "Avalanche C chain",
  333999: "Polis Olympus Chain",
};

export const networkLabels = {
  1: "Mainnet",
  56: "BSC",
  137: "Polygon",
  250: "Fantom",
  43114: "Avalanche",
  333999: "Polis",
};

export const networkCurrencies = {
  1: {
    name: "Ethereum",
    symbol: "ETH",
  },
  56: {
    name: "Binance Coin",
    symbol: "BNB",
  },
  137: {
    name: "Matic",
    symbol: "MATIC",
  },
  250: {
    name: "Fantom",
    symbol: "FTM",
  },
  43114: {
    name: "Avalanche",
    symbol: "AVAX",
  },
  333999: {
    name: "Polis",
    symbol: "POLIS",
  },
};

export const chainUrls = {
  1: {
    rpc: process.env.REACT_APP_MAINNET_RPC_URL.split(
      " "
    ),
    explorer: "https://etherscan.io",
    chainId: 1,
    name: networkNames[1],
  },
  56: {
    rpc: process.env.REACT_APP_BSC_RPC_URL.split(
      " "
    ),
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
  43114: {
    rpc: ["https://api.avax.network/ext/bc/C/rpc"],
    explorer: "https://snowtrace.io",
    chainId: 43114,
    name: networkNames[43114],
  },
  333999: {
    rpc: ["https://rpc.polis.tech"],
    explorer: "https://explorer.polis.tech",
    chainId: 333999,
    name: networkNames[333999],
  },
};

export const defaultTokensUrl = {
  1: "https://raw.githubusercontent.com/polischain/bridge-ui/main/tokenlist/mainnet/mainnet.json",
  56: "https://raw.githubusercontent.com/polischain/bridge-ui/main/tokenlist/bsc/bsc.json",
  137: "https://raw.githubusercontent.com/polischain/bridge-ui/main/tokenlist/polygon/polygon.json",
  250: "https://raw.githubusercontent.com/polischain/bridge-ui/main/tokenlist/fantom/fantom.json",
  43114: "https://raw.githubusercontent.com/polischain/bridge-ui/main/tokenlist/avalanche/avalanche.json",
  333999:
    "https://raw.githubusercontent.com/polischain/bridge-ui/main/tokenlist/polis/polis.json",
};

export const GRAPH_HEALTH_ENDPOINT =
  "https://api.thegraph.com/index-node/graphql";

export const LOCAL_STORAGE_KEYS = {
  DONT_SHOW_CLAIMS: "dont-show-claims",
  MAINNET_RPC_URL: "mainnet-rpc-url",
  FTM_RPC_URL: "ftm-rpc-url",
  POLIS_RPC_URL: "polis-rpc-url",
  BSC_RPC_URL: "bsc-rpc-url",
  POLYGON_RPC_URL: "polygon-rpc-url",
  AVALANCHE_RPC_URL: "avalanche-rpc-url",
  NEVER_SHOW_CLAIMS: "never-show-claims",
  INFINITE_UNLOCK: "infinite-unlock",
  CUSTOM_TOKENS: "customTokens",
  DISABLE_BALANCE_WHILE_TOKEN_FETCH: "disable-balance-while-token-fetch",
  BRIDGE_DIRECTION: "bridge-direction",
};
