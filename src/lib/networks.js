import { nativeCurrencies, POLIS_BSC_BRIDGE,POLIS_FANTOM_BRIDGE, POLIS_POLYGON_BRIDGE } from "lib/constants";

export { POLIS_BSC_BRIDGE,POLIS_FANTOM_BRIDGE, POLIS_POLYGON_BRIDGE };

const POLIS_FANTOM_BRIDGE_CONFIG = {
  label: "polis⥊fantom",
  homeChainId: 333999,
  foreignChainId: 250,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0x5210297D69359939F36f8Fda38D1E0fE82fDb02B".toLowerCase(),
  homeMediatorAddress:
    "0xdbcEB62c9f00B1BFF0B34a85e19f6EE8A3e88BA3".toLowerCase(),
  foreignAmbAddress: "0x0513Ff273f3e861604031959d68c7537885921d3".toLowerCase(),
  homeAmbAddress: "0xA9Dd226959A7c4f08858702d68ee26c4c95F7FD8".toLowerCase(),
  foreignGraphName: "polischain/polis-to-fantom-bridge",
  homeGraphName: "polischain/fantom-to-polis-bridge",
  ambLiveMonitorPrefix: "http://polis-ftm-alm.acheron.exchange/",
  claimDisabled: false,
  tokensClaimDisabled: [],
};
const POLIS_BSC_BRIDGE_CONFIG = {
  label: "polis⥊bsc",
  homeChainId: 333999,
  foreignChainId: 56,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
      "0x75fBF4e5aD4b725Bb4E300B6b2572596f87CA2D3".toLowerCase(),
  homeMediatorAddress:
      "0x9CEBA3f59CE10F65311B56D5eF3895Ffbc3245e3".toLowerCase(),
  foreignAmbAddress: "0xF34029CD8A376f30d65Bf8f71C3bBFA01Fab91a3".toLowerCase(),
  homeAmbAddress: "0x731885890fdF7e53311A7271eb0713E7dbC25E8a".toLowerCase(),
  foreignGraphName: "polischain/polis-to-bsc-bridge",
  homeGraphName: "polischain/bsc-to-polis-bridge",
  ambLiveMonitorPrefix: "http://polis-bsc-alm.acheron.exchange/",
  claimDisabled: false,
  tokensClaimDisabled: [],
};
const POLIS_POLYGON_BRIDGE_CONFIG = {
  label: "polis⥊polygon",
  homeChainId: 333999,
  foreignChainId: 137,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
      "0xDA4Afcd8c7305AbedEb676768b04D29412d60eFB".toLowerCase(),
  homeMediatorAddress:
      "0x0306BcA3Ea988112acf420aA58EBAbA40040A1Fd".toLowerCase(),
  foreignAmbAddress: "0x5F05B526a5226A8270b078c3569EEb4e95a66a28".toLowerCase(),
  homeAmbAddress: "0xa85f128B9cb883AaC4DF5272f206890D623EC2f8".toLowerCase(),
  foreignGraphName: "polischain/polis-to-polygon-bridge",
  homeGraphName: "polischain/polygon-to-polis-bridge",
  ambLiveMonitorPrefix: "http://polis-polygon-alm.acheron.exchange/",
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const ENABLED_BRIDGES = [POLIS_FANTOM_BRIDGE, POLIS_BSC_BRIDGE, POLIS_POLYGON_BRIDGE].map((b) => b.toLowerCase());

const bridgeInfo = {
  [POLIS_FANTOM_BRIDGE]: POLIS_FANTOM_BRIDGE_CONFIG,
  [POLIS_POLYGON_BRIDGE]: POLIS_POLYGON_BRIDGE_CONFIG,
  [POLIS_BSC_BRIDGE]: POLIS_BSC_BRIDGE_CONFIG
};

const getNetworkConfig = (bridges) => {
  if (bridges && bridges.length > 0 && bridgeInfo) {
    return bridges.reduce((t, b) => ({ ...t, [b]: bridgeInfo[b] }), {});
  }
  return bridgeInfo;
};

export const networks = getNetworkConfig(ENABLED_BRIDGES);

export const defaultTokens = {
  [POLIS_FANTOM_BRIDGE]: {
    250: nativeCurrencies[250],
    333999: {
      address: "0xE4EC05e0c77ED75318519E6F65110AE67D72CdCc",
      chainId: 333999,
      symbol: "WFTM",
      name: "Wrapped Fantom on Polis",
    },
  },
  [POLIS_BSC_BRIDGE]: {
    56: nativeCurrencies[56],
    333999: {
      address: "0x99Ce06D2eEf0b1c7A76B897C0439a284bf63eE3f",
      chainId: 333999,
      symbol: "WBNB",
      name: "Wrapped BNB on Polis",
    },
  },
  [POLIS_POLYGON_BRIDGE]: {
    137: nativeCurrencies[137],
    333999: {
      address: "0xb4b6AB1f26B2Adbf0db2a7399508a7dbf4877c80",
      chainId: 333999,
      symbol: "WMATIC",
      name: "Wrapped Polygon on Polis",
    },
  },
};
