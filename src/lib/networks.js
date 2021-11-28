import { POLIS_BSC_BRIDGE } from "lib/constants";

export { POLIS_BSC_BRIDGE };

const POLIS_BSC_BRIDGE_CONFIG = {
  label: "polis⥊bsc",
  homeChainId: 333999,
  foreignChainId: 56,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0x1D6D1Df5Cc6eC35Ba024Cc70B93865ECC50B7438".toLowerCase(),
  homeMediatorAddress:
    "0x63aeA5898ca64FF55a2Aee659bd0a5665987f6b0".toLowerCase(),
  foreignAmbAddress: "0x1D5609d5098bD5C802ab2580B89D926B021f3d30".toLowerCase(),
  homeAmbAddress: "0xCf27B036fC15b1520b03eb2A60C49a956B74673a".toLowerCase(),
  foreignGraphName: "polischain/polis-to-bsc-bridge",
  homeGraphName: "polischain/bsc-to-polis-bridge",
  ambLiveMonitorPrefix: "https://alm-xdai.herokuapp.com",
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const ENABLED_BRIDGES = ["polis-bsc"].map((b) => b.toLowerCase());

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

export const defaultTokens = {
  [POLIS_BSC_BRIDGE]: {},
};
