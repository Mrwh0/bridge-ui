import { POLIS_BSC_BRIDGE } from "lib/constants";

export { POLIS_BSC_BRIDGE };

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
  [POLIS_BSC_BRIDGE]: {
    56: {
      address: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
      chainId: 56,
      symbol: "DAI",
      name: "Binance-Peg Dai Token",
    },
    333999: {
      address: "0x247123e806a27Ea322bFd93e0273D04602dC942D",
      chainId: 333999,
      symbol: "DAI.BSC",
      name: "Binance Pegged DAI from BSC wrapped by passport.meter.io\n",
    },
  },
};
