import { Box, Flex, HStack } from "@chakra-ui/react";
import { GithubIcon } from "icons/GithubIcon";
import { TelegramIcon } from "icons/TelegramIcon";
import { TwitterIcon } from "icons/TwitterIcon";
import React from "react";

export const Footer = () => (
  <Flex
    position="relative"
    justify={{ base: "end", sm: "space-between" }}
    align="center"
    h={20}
    maxW="75rem"
    px={8}
    w="100%"
    color="grey"
  >
    <div />
    <HStack spacing={4}>
      <Box _hover={{ color: "blue.500" }} transition="0.25s">
        <a
          href="https://twitter.com/PolisChain"
          rel="noreferrer noopener"
          target="_blank"
        >
          <TwitterIcon />
        </a>
      </Box>
      <Box _hover={{ color: "blue.500" }} transition="0.25s">
        <a
          href="https://t.me/PolisPayOfficial"
          rel="noreferrer noopener"
          target="_blank"
        >
          <TelegramIcon />
        </a>
      </Box>
      <Box _hover={{ color: "blue.500" }} transition="0.25s">
        <a
          href="https://github.com/polischain"
          rel="noreferrer noopener"
          target="_blank"
        >
          <GithubIcon />
        </a>
      </Box>
    </HStack>
  </Flex>
);
