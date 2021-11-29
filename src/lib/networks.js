import { nativeCurrencies, POLIS_FANTOM_BRIDGE } from "lib/constants";

export { POLIS_FANTOM_BRIDGE }

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
  ambLiveMonitorPrefix: "http://polis-fantom-alm.acheron.exchange/",
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const ENABLED_BRIDGES = ["polis-fantom"].map((b) => b.toLowerCase());

const bridgeInfo = {
  [POLIS_FANTOM_BRIDGE]: POLIS_FANTOM_BRIDGE_CONFIG,
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
      address: "0xf1498e8103359fD96c5E08fb34b4C249B619025a",
      chainId: 333999,
      symbol: "SOUL",
      name: "Soul Token",
    },
  },
};
