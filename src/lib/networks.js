import { nativeCurrencies, POLIS_BSC_BRIDGE,POLIS_FANTOM_BRIDGE, POLIS_POLYGON_BRIDGE } from "lib/constants";

export { POLIS_BSC_BRIDGE,POLIS_FANTOM_BRIDGE, POLIS_POLYGON_BRIDGE };

const POLIS_FANTOM_BRIDGE_CONFIG = {
  label: "polis⥊fantom",
  homeChainId: 333999,
  foreignChainId: 250,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0xf4Ce1C6d4eF79d5661AfAA6678892446822Cb558".toLowerCase(),
  homeMediatorAddress:
    "0x26f898A29CD9Ea4c327037547DF6FA7E2967b8D6".toLowerCase(),
  foreignAmbAddress: "0xF34029CD8A376f30d65Bf8f71C3bBFA01Fab91a3".toLowerCase(),
  homeAmbAddress: "0x9411446287A9DE0Fc02B8bB0201E3d401d7615F4".toLowerCase(),
  foreignGraphName: "polischain/polis-to-fantom-bridge",
  homeGraphName: "polischain/fantom-to-polis-bridge",
  ambLiveMonitorPrefix: "http://polis-ftm-alm.acheron.exchange",
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
  ambLiveMonitorPrefix: "http://polis-bsc-alm.acheron.exchange",
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
  ambLiveMonitorPrefix: "http://polis-polygon-alm.acheron.exchange",
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
      address: "0x03C7A86e14e9BC71d84A4DBe6352b1561402e29C",
      chainId: 333999,
      symbol: "WFTM",
      name: "Wrapped Fantom on Polis",
    },
  },
  [POLIS_BSC_BRIDGE]: {
    56: nativeCurrencies[56],
    333999: {
      address: "0xDb6D07410F3b4e73553Ede8aFc2FC6922B19863E",
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
