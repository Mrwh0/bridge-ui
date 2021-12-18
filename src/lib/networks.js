import {
  nativeCurrencies,
  POLIS_AVALANCHE_BRIDGE,
  POLIS_BSC_BRIDGE,
  POLIS_FANTOM_BRIDGE,
  POLIS_IOTEX_BRIDGE,
  POLIS_MAINNET_BRIDGE,
  POLIS_POLYGON_BRIDGE,
} from "lib/constants";

export {
  POLIS_AVALANCHE_BRIDGE,
  POLIS_BSC_BRIDGE,
  POLIS_FANTOM_BRIDGE,
  POLIS_IOTEX_BRIDGE,
  POLIS_MAINNET_BRIDGE,
  POLIS_POLYGON_BRIDGE,
};

const POLIS_AVALANCHE_BRIDGE_CONFIG = {
  label: "polis⥊avalanche",
  homeChainId: 333999,
  foreignChainId: 43114,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0xfB59876201405Aee8D8aDa645b168AFEdb442F76".toLowerCase(),
  homeMediatorAddress:
    "0xfB59876201405Aee8D8aDa645b168AFEdb442F76".toLowerCase(),
  foreignAmbAddress: "0xd66650Db783296918d11EdaE2FA6F191e9F7f884".toLowerCase(),
  homeAmbAddress: "0xd66650Db783296918d11EdaE2FA6F191e9F7f884".toLowerCase(),
  foreignGraphName: "mrwh0/polistoavalance",
  homeGraphName: "polischain/avalanche-to-polis-bridge",
  ambLiveMonitorPrefix: "http://polis-avalanche-alm.acheron.exchange",
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
const POLIS_IOTEX_BRIDGE_CONFIG = {
  label: "polis⥊iotex",
  homeChainId: 333999,
  foreignChainId: 4689,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0x18a5D68BA3Ad47405CC2fFCB0C57E47A519C140a".toLowerCase(),
  homeMediatorAddress:
    "0x9308B28A0bcCA5645DA0C3C15732871432ab646d".toLowerCase(),
  foreignAmbAddress: "0xB632A2c05A1880da0a870FD5BDD650059F3A0383".toLowerCase(),
  homeAmbAddress: "0xC150C423A9624b7ae40749d63B869c2B9e968a96".toLowerCase(),
  foreignGraphName: "polischain/polis-to-iotex-bridge",
  homeGraphName: "polischain/iotex-to-polis-bridge",
  ambLiveMonitorPrefix: "http://polis-iotex-alm.acheron.exchange",
  claimDisabled: false,
  tokensClaimDisabled: [],
};
const POLIS_MAINNET_BRIDGE_CONFIG = {
  label: "polis⥊eth",
  homeChainId: 333999,
  foreignChainId: 1,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0x4f7488D150eA5295d20c8f0E3524b7897b1b7021".toLowerCase(),
  homeMediatorAddress:
    "0x96ba6eFcF8c12547fd4a069370602904D50e4d34".toLowerCase(),
  foreignAmbAddress: "0x5172747f21EE6D4065CE9a36691D3b579bfCDf20".toLowerCase(),
  homeAmbAddress: "0x651581b964A22bCE9eAfCE0a762189d2D04cAe6a".toLowerCase(),
  foreignGraphName: "polischain/polis-to-mainnet",
  homeGraphName: "polischain/mainnet-to-polis-bridge",
  ambLiveMonitorPrefix: "http://polis-mainnet-alm.acheron.exchange",
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

const ENABLED_BRIDGES = [
  POLIS_AVALANCHE_BRIDGE,
  POLIS_BSC_BRIDGE,
  POLIS_FANTOM_BRIDGE,
  POLIS_IOTEX_BRIDGE,
  POLIS_MAINNET_BRIDGE,
  POLIS_POLYGON_BRIDGE,
].map((b) => b.toLowerCase());

const bridgeInfo = {
  [POLIS_AVALANCHE_BRIDGE]: POLIS_AVALANCHE_BRIDGE_CONFIG,
  [POLIS_BSC_BRIDGE]: POLIS_BSC_BRIDGE_CONFIG,
  [POLIS_FANTOM_BRIDGE]: POLIS_FANTOM_BRIDGE_CONFIG,
  [POLIS_IOTEX_BRIDGE]: POLIS_IOTEX_BRIDGE_CONFIG,
  [POLIS_MAINNET_BRIDGE]: POLIS_MAINNET_BRIDGE_CONFIG,
  [POLIS_POLYGON_BRIDGE]: POLIS_POLYGON_BRIDGE_CONFIG,
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
    250: {
      address: "0xc8cc8371e0b0e02f53d6f96ea35f0a9a627c16e0",
      chainId: 250,
      symbol: "SOUL",
      name: "Soul Token on Fantom",
    },
    333999: {
      address: "0xf1498e8103359fD96c5E08fb34b4C249B619025a",
      chainId: 333999,
      symbol: "SOUL",
      name: "Soul Token",
    },
  },
  [POLIS_BSC_BRIDGE]: {
    56: {
      address: "0x17b70f87054985144513e33daf265908ead50230",
      chainId: 56,
      symbol: "SOUL",
      name: "Soul Token on BSC",
    },
    333999: {
      address: "0xf1498e8103359fD96c5E08fb34b4C249B619025a",
      chainId: 333999,
      symbol: "SOUL",
      name: "Soul Token",
    },
  },
  [POLIS_POLYGON_BRIDGE]: {
    137: {
      address: "0x7cc8711922029165af30232bca282e8ff3ff1bb3",
      chainId: 137,
      symbol: "SOUL",
      name: "Soul Token on Polygon",
    },
    333999: {
      address: "0xf1498e8103359fD96c5E08fb34b4C249B619025a",
      chainId: 333999,
      symbol: "SOUL",
      name: "Soul Token",
    },
  },
  [POLIS_IOTEX_BRIDGE]: {
    4689: nativeCurrencies[4689],
    333999: {
      address: "0xf1498e8103359fD96c5E08fb34b4C249B619025a",
      chainId: 333999,
      symbol: "SOUL",
      name: "Soul Token",
    },
  },
  [POLIS_MAINNET_BRIDGE]: {
    1: {
      address: "0xd958d021622283b9179e754332f58bdb8ce8a356",
      chainId: 1,
      symbol: "SOUL",
      name: "Soul Token on Mainnet",
    },
    333999: {
      address: "0xf1498e8103359fD96c5E08fb34b4C249B619025a",
      chainId: 333999,
      symbol: "SOUL",
      name: "Soul Token",
    },
  },
  [POLIS_AVALANCHE_BRIDGE]: {
    43114: {
      address: "0x8af201118c7f06ca3225fbd8e166f54d3fa5ff93",
      chainId: 43114,
      symbol: "SOUL",
      name: "Soul Token on Avalanche",
    },
    333999: {
      address: "0xf1498e8103359fD96c5E08fb34b4C249B619025a",
      chainId: 333999,
      symbol: "SOUL",
      name: "Soul Token",
    },
  },
};
