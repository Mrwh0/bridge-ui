import { BigNumber } from "ethers";

export const POLIS_FANTOM_BRIDGE = "polis-fantom";

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

export const BNB_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png";

export const FTM_CURRENCY_LOGO =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png";

export const LARGEST_UINT256 = BigNumber.from(
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"
);

export const POLLING_INTERVAL = 5000;

export const DEFAULT_BRIDGE_DIRECTION = POLIS_FANTOM_BRIDGE;

export const nativeCurrencies = {
  250: {
    chainId: 250,
    decimals: 18,
    logoURI: FTM_CURRENCY_LOGO,
    name: "Fantom",
    address: ADDRESS_ZERO,
    symbol: "FTM",
    mode: "NATIVE",
    homeTokenAddress:
      "0xE4EC05e0c77ED75318519E6F65110AE67D72CdCc".toLowerCase(),
  },
};

export const nativeCurrencyMediators = {
  250: "0x07a05d4167cffc2a974eade4a57c01909c1b6335".toLowerCase(),
};

export const networkNames = {
  250: "Fantom Opera",
  333999: "Polis Olympus Chain",
};

export const networkLabels = {
  250: "Fantom",
  333999: "Polis",
};

export const networkCurrencies = {
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
  NEVER_SHOW_CLAIMS: "never-show-claims",
  INFINITE_UNLOCK: "infinite-unlock",
  CUSTOM_TOKENS: "customTokens",
  DISABLE_BALANCE_WHILE_TOKEN_FETCH: "disable-balance-while-token-fetch",
  BRIDGE_DIRECTION: "bridge-direction",
};
