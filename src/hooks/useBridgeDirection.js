import { useSettings } from "contexts/SettingsContext";
import { useAmbVersion } from "hooks/useAmbVersion";
import { useRequiredSignatures } from "hooks/useRequiredSignatures";
import { networks } from "lib/networks";
import { useCallback, useMemo } from "react";

export const useBridgeDirection = () => {
  const { bridgeDirection } = useSettings();
  const bridgeConfig = useMemo(
    () => networks[bridgeDirection] || Object.values(networks)[0],
    [bridgeDirection]
  );

  const {
    homeChainId,
    foreignChainId,
    ambLiveMonitorPrefix,
    homeGraphName,
    foreignGraphName,
    homeAmbAddress,
    foreignAmbAddress,
  } = bridgeConfig;

  const foreignAmbVersion = useAmbVersion(foreignChainId, foreignAmbAddress);

  const homeRequiredSignatures = useRequiredSignatures(
    homeChainId,
    homeAmbAddress
  );

  const getBridgeChainId = useCallback(
    (chainId) => (chainId === homeChainId ? foreignChainId : homeChainId),
    [homeChainId, foreignChainId]
  );

  const getMonitorUrl = useCallback(
    (chainId, hash) => `${ambLiveMonitorPrefix}/${chainId}/${hash}`,
    [ambLiveMonitorPrefix]
  );

  const getGraphEndpoint = useCallback(
    (chainId) => {
      const subgraphName =
        homeChainId === chainId ? homeGraphName : foreignGraphName;
      let prefix;
      if (chainId === 4689) {
        prefix = "http://159.223.124.171:8000/subgraphs/name/";
      } else {
        prefix =
          chainId === 333999
            ? "https://graph.polis.tech/subgraphs/name/"
            : "https://api.thegraph.com/subgraphs/name/";
      }
      return prefix + subgraphName;
    },
    [foreignGraphName, homeChainId, homeGraphName]
  );

  const getAMBAddress = useCallback(
    (chainId) => (chainId === homeChainId ? homeAmbAddress : foreignAmbAddress),
    [homeChainId, homeAmbAddress, foreignAmbAddress]
  );

  return {
    bridgeDirection,
    getBridgeChainId,
    getMonitorUrl,
    getGraphEndpoint,
    getAMBAddress,
    foreignAmbVersion,
    homeRequiredSignatures,
    ...bridgeConfig,
  };
};
