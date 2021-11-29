import {nativeCurrencies, POLIS_BSC_BRIDGE} from "lib/constants";

export { POLIS_BSC_BRIDGE };

const POLIS_BSC_BRIDGE_CONFIG = {
  label: "polis⥊bsc",
  homeChainId: 333999,
  foreignChainId: 56,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    "0xD329D4De99672bc4aB3A17754D78149CAe871E1a".toLowerCase(),
  homeMediatorAddress:
    "0x1a32E3c0e75E650a59B334C846fd4b9E1C9D430c".toLowerCase(),
  foreignAmbAddress: "0xCd9de8f7C2a788262e1293437898d6BB08635e60".toLowerCase(),
  homeAmbAddress: "0x8adeeaFe5964a7194c063b231007205269Dc0969".toLowerCase(),
  foreignGraphName: "polischain/polis-to-bsc-bridge",
  homeGraphName: "polischain/bsc-to-polis-bridge",
  ambLiveMonitorPrefix: "http://polis-bsc-alm.acheron.exchange/",
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
    56: nativeCurrencies[56],
    333999: {
      address: '0xf1498e8103359fD96c5E08fb34b4C249B619025a',
      chainId: 333999,
      symbol: 'SOUL',
      name: 'Soul Token',
    },
  }
};
