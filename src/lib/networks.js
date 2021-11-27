import { BSC_POLIS_BRIDGE, POLIS_BSC_BRIDGE } from "lib/constants";

export { BSC_POLIS_BRIDGE, POLIS_BSC_BRIDGE };

const POLIS_BSC_BRIDGE_CONFIG = {
  label: "polis⥊bsc",
  homeChainId: 333999,
  foreignChainId: 56,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0xecEAF9ef026f5f2614f10248920e33aF266CeD40".toLowerCase(),
  homeMediatorAddress:
    "0xa69E679A9A57884dCc20A45B543232325dfC869a".toLowerCase(),
  foreignAmbAddress: "0x1D5609d5098bD5C802ab2580B89D926B021f3d30".toLowerCase(),
  homeAmbAddress: "0xCf27B036fC15b1520b03eb2A60C49a956B74673a".toLowerCase(),
  foreignGraphName: "raid-guild/mainnet-omnibridge",
  homeGraphName: "raid-guild/xdai-omnibridge",
  ambLiveMonitorPrefix: "https://alm-xdai.herokuapp.com",
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const ENABLED_BRIDGES = ["polis-bsc"].map(
  (b) => b.toLowerCase()
);

const bridgeInfo = {
  [POLIS_BSC_BRIDGE]: POLIS_BSC_BRIDGE_CONFIG,
};

const getNetworkConfig = (bridges) => {
  if (bridges && bridges.length > 0 && bridgeInfo) {
    return bridges.reduce((t, b) => ({ ...t, [b]: bridgeInfo[b] }), {});
  }
  return bridgeInfo;
};

export const networks = getNetworkConfig(ENABLED_BRIDGES);

export const defaultTokens = {};
