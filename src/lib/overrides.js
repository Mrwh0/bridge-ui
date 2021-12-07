import {
  POLIS_BSC_BRIDGE,
  POLIS_FANTOM_BRIDGE,
  POLIS_MAINNET_BRIDGE,
  POLIS_POLYGON_BRIDGE,
  POLIS_AVALANCHE_BRIDGE,
} from "lib/networks";

const POLIS_FANTOM_OVERRIDES = {};
const POLIS_BSC_OVERRIDES = {};
const POLIS_POLYGON_OVERRIDES = {};
const POLIS_MAINNET_OVERRIDES = {};
const POLIS_AVALANCHE_OVERRIDES = {};

const OVERRIDES = {
  [POLIS_FANTOM_BRIDGE]: POLIS_FANTOM_OVERRIDES,
  [POLIS_BSC_BRIDGE]: POLIS_BSC_OVERRIDES,
  [POLIS_POLYGON_BRIDGE]: POLIS_POLYGON_OVERRIDES,
  [POLIS_MAINNET_BRIDGE]: POLIS_MAINNET_OVERRIDES,
  [POLIS_AVALANCHE_BRIDGE]: POLIS_AVALANCHE_OVERRIDES,
};

export const isOverridden = (bridgeDirection, token) => {
  if (!token || !bridgeDirection) return false;
  const { address, chainId } = token;
  if (!address || !chainId) return false;
  const overrides = OVERRIDES[bridgeDirection];
  const override = overrides[address.toLowerCase()];
  return override !== undefined && override[chainId] !== undefined;
};

export const getOverriddenToToken = (bridgeDirection, token) => {
  if (!token || !bridgeDirection) return null;
  const { address, chainId } = token;
  if (!address || !chainId) return null;
  const overrides = OVERRIDES[bridgeDirection];
  return overrides[address.toLowerCase()][chainId].to;
};

export const getOverriddenMode = (bridgeDirection, token) => {
  if (!token || !bridgeDirection) return null;
  const { address, chainId } = token;
  if (!address || !chainId) return null;
  const overrides = OVERRIDES[bridgeDirection];
  return overrides[address.toLowerCase()][chainId].mode;
};

export const getOverriddenMediator = (bridgeDirection, token) => {
  if (!token || !bridgeDirection) return null;
  const { address, chainId } = token;
  if (!address || !chainId) return null;
  const overrides = OVERRIDES[bridgeDirection];
  return overrides[address.toLowerCase()][chainId].mediator.toLowerCase();
};
