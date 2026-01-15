/**
 * Pancakeswap contract addresses for various networks
 * This file contains the contract addresses for Pancakeswap V2, V3, and Universal Router contracts
 * on different networks. These are not meant to be edited by users.
 *
 * Last updated: January 2025
 * Sources:
 * - V2: https://developer.pancakeswap.finance/contracts/v2/addresses
 * - V3: https://developer.pancakeswap.finance/contracts/v3/addresses
 * - Universal Router: https://developer.pancakeswap.finance/contracts/v3/addresses#smart-router
 */

import { Address } from 'viem';

export interface PancakeswapContractAddresses {
  // V2 contracts
  pancakeswapV2RouterAddress: Address;
  pancakeswapV2FactoryAddress: Address;

  // V3 contracts
  pancakeswapV3SwapRouter02Address: Address; // SwapRouter02 for V3 direct swaps
  pancakeswapV3NftManagerAddress: Address;
  pancakeswapV3QuoterV2ContractAddress: Address;
  pancakeswapV3FactoryAddress: Address;
  pancakeswapV3PoolDeployerAddress: Address;
  pancakeswapV3MasterchefAddress: Address; // MasterChef contract for V3

  // Universal Router V2 (unified router for all protocols)
  universalRouterV2Address: Address;
}

export interface NetworkContractAddresses {
  [network: string]: PancakeswapContractAddresses;
}

export const contractAddresses: NetworkContractAddresses = {
  mainnet: {
    // V2 contracts - Official Pancakeswap addresses
    pancakeswapV2RouterAddress: '0xEfF92A263d31888d860bD50809A8D171709b7b1c',
    pancakeswapV2FactoryAddress: '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362',
    // V3 contracts - Official Pancakeswap addresses
    pancakeswapV3SwapRouter02Address: '0x1b81D678ffb9C0263b24A97847620C99d213eB14',
    pancakeswapV3NftManagerAddress: '0x46A15B0b27311cedF172AB29E4f4766fbE7F4364',
    pancakeswapV3QuoterV2ContractAddress: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
    pancakeswapV3FactoryAddress: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
    pancakeswapV3PoolDeployerAddress: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
    pancakeswapV3MasterchefAddress: '0x556B9306565093C855AEA9AE92A594704c2Cd59e', // Placeholder address
    // Universal Router V2 - Official Pancakeswap address
    universalRouterV2Address: '0x13f4EA83D0bd40E75C8222255bc855a974568Dd4',
  },
  arbitrum: {
    // V2 contracts - Official Pancakeswap addresses
    pancakeswapV2RouterAddress: '0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb',
    pancakeswapV2FactoryAddress: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
    // V3 contracts - Official Pancakeswap addresses
    pancakeswapV3SwapRouter02Address: '0x1b81D678ffb9C0263b24A97847620C99d213eB14',
    pancakeswapV3NftManagerAddress: '0x46A15B0b27311cedF172AB29E4f4766fbE7F4364',
    pancakeswapV3QuoterV2ContractAddress: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
    pancakeswapV3FactoryAddress: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
    pancakeswapV3PoolDeployerAddress: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
    pancakeswapV3MasterchefAddress: '0x5e09ACf80C0296740eC5d6F643005a4ef8DaA694',
    // Universal Router V2 - Official Pancakeswap address
    universalRouterV2Address: '0x32226588378236Fd0c7c4053999F88aC0e5cAc77',
  },
  base: {
    // V2 contracts - Official Pancakeswap addresses
    pancakeswapV2RouterAddress: '0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb',
    pancakeswapV2FactoryAddress: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
    // V3 contracts - Official Pancakeswap addresses
    pancakeswapV3SwapRouter02Address: '0x1b81D678ffb9C0263b24A97847620C99d213eB14',
    pancakeswapV3NftManagerAddress: '0x46A15B0b27311cedF172AB29E4f4766fbE7F4364',
    pancakeswapV3QuoterV2ContractAddress: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
    pancakeswapV3FactoryAddress: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
    pancakeswapV3PoolDeployerAddress: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
    pancakeswapV3MasterchefAddress: '0xC6A2Db661D5a5690172d8eB0a7DEA2d3008665A3',
    // Universal Router V2 - Official Pancakeswap address
    universalRouterV2Address: '0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86',
  },
  bsc: {
    // V2 contracts - Official Pancakeswap addresses
    pancakeswapV2RouterAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    pancakeswapV2FactoryAddress: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    // V3 contracts - Official Pancakeswap addresses
    pancakeswapV3SwapRouter02Address: '0x1b81D678ffb9C0263b24A97847620C99d213eB14',
    pancakeswapV3NftManagerAddress: '0x46A15B0b27311cedF172AB29E4f4766fbE7F4364',
    pancakeswapV3QuoterV2ContractAddress: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
    pancakeswapV3FactoryAddress: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
    pancakeswapV3PoolDeployerAddress: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
    pancakeswapV3MasterchefAddress: '0x556B9306565093C855AEA9AE92A594704c2Cd59e',
    // Universal Router V2 - Official Pancakeswap address
    universalRouterV2Address: '0x13f4EA83D0bd40E75C8222255bc855a974568Dd4',
  },
};

/**
 * Helper functions to get contract addresses
 */

export function getPancakeswapV2RouterAddress(network: string): string {
  const address = contractAddresses[network]?.pancakeswapV2RouterAddress;

  if (address === null) {
    throw new Error(
      `Pancakeswap V2 is not deployed on ${network} network. Please use Pancakeswap V3 for this network.`,
    );
  }

  if (!address) {
    throw new Error(`Pancakeswap V2 Router address not configured for network: ${network}`);
  }

  return address;
}

export function getPancakeswapV2FactoryAddress(network: string): Address {
  const address = contractAddresses[network]?.pancakeswapV2FactoryAddress;

  if (address === null) {
    throw new Error(
      `Pancakeswap V2 is not deployed on ${network} network. Please use Pancakeswap V3 for this network.`,
    );
  }

  if (!address) {
    throw new Error(`Pancakeswap V2 Factory address not configured for network: ${network}`);
  }

  return address;
}

export function getPancakeswapV3SwapRouter02Address(network: string): string {
  const address = contractAddresses[network]?.pancakeswapV3SwapRouter02Address;

  if (!address) {
    throw new Error(`Pancakeswap V3 SwapRouter02 address not configured for network: ${network}`);
  }

  return address;
}

export function getUniversalRouterV2Address(network: string): string {
  const address = contractAddresses[network]?.universalRouterV2Address;

  if (!address) {
    throw new Error(`Universal Router V2 address not configured for network: ${network}`);
  }

  return address;
}

export function getPancakeswapV3NftManagerAddress(network: string): string {
  const address = contractAddresses[network]?.pancakeswapV3NftManagerAddress;

  if (!address) {
    throw new Error(`Pancakeswap V3 NFT Manager address not configured for network: ${network}`);
  }

  return address;
}

export function getPancakeswapV3QuoterV2ContractAddress(network: string): string {
  const address = contractAddresses[network]?.pancakeswapV3QuoterV2ContractAddress;

  if (!address) {
    throw new Error(`Pancakeswap V3 Quoter V2 contract address not configured for network: ${network}`);
  }

  return address;
}

export function getPancakeswapV3FactoryAddress(network: string): Address {
  const address = contractAddresses[network]?.pancakeswapV3FactoryAddress;

  if (!address) {
    throw new Error(`Pancakeswap V3 Factory address not configured for network: ${network}`);
  }

  return address;
}

export function getPancakeswapV3PoolDeployerAddress(network: string): Address {
  const address = contractAddresses[network]?.pancakeswapV3PoolDeployerAddress;

  if (!address) {
    throw new Error(`Pancakeswap V3 Factory address not configured for network: ${network}`);
  }

  return address;
}

export function getPancakeswapV3MasterchefAddress(network: string): Address {
  return contractAddresses[network]?.pancakeswapV3MasterchefAddress;
}

/**
 * Returns the appropriate spender address based on the connector name
 * @param network The network name (e.g. 'mainnet', 'base')
 * @param connectorName The connector name (pancakeswap/clmm, pancakeswap/amm, pancakeswap/router, pancakeswap)
 * @returns The address of the contract that should be approved to spend tokens
 */
export function getSpender(network: string, connectorName: string): string {
  // Check for AMM (V2) connector pattern
  if (connectorName.includes('/amm')) {
    return getPancakeswapV2RouterAddress(network);
  }

  // Check for CLMM swap-specific pattern - use SwapRouter02
  if (connectorName.includes('/clmm/swap')) {
    return getPancakeswapV3SwapRouter02Address(network);
  }

  // Check for CLMM (V3) connector pattern
  if (connectorName.includes('/clmm')) {
    return getPancakeswapV3NftManagerAddress(network);
  }

  // For router connector pattern or regular pancakeswap connector, use Universal Router V2
  if (connectorName.includes('/router') || connectorName === 'pancakeswap') {
    return getUniversalRouterV2Address(network);
  }

  // Default to Universal Router V2 for any other case
  return getUniversalRouterV2Address(network);
}

/**
 * ABI Definitions for Pancakeswap contracts
 */

/**
 * Pancakeswap V3 SwapRouter02 ABI for swap methods
 */
export const ISwapRouter02ABI = [
  {
    inputs: [
      { internalType: 'address', name: '_deployer', type: 'address' },
      { internalType: 'address', name: '_factory', type: 'address' },
      { internalType: 'address', name: '_WETH9', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'WETH9',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'deployer',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bytes', name: 'path', type: 'bytes' },
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          { internalType: 'uint256', name: 'amountOutMinimum', type: 'uint256' },
        ],
        internalType: 'struct ISwapRouter.ExactInputParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'exactInput',
    outputs: [{ internalType: 'uint256', name: 'amountOut', type: 'uint256' }],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'tokenIn', type: 'address' },
          { internalType: 'address', name: 'tokenOut', type: 'address' },
          { internalType: 'uint24', name: 'fee', type: 'uint24' },
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          { internalType: 'uint256', name: 'amountOutMinimum', type: 'uint256' },
          { internalType: 'uint160', name: 'sqrtPriceLimitX96', type: 'uint160' },
        ],
        internalType: 'struct ISwapRouter.ExactInputSingleParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'exactInputSingle',
    outputs: [{ internalType: 'uint256', name: 'amountOut', type: 'uint256' }],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bytes', name: 'path', type: 'bytes' },
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
          { internalType: 'uint256', name: 'amountInMaximum', type: 'uint256' },
        ],
        internalType: 'struct ISwapRouter.ExactOutputParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'exactOutput',
    outputs: [{ internalType: 'uint256', name: 'amountIn', type: 'uint256' }],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'tokenIn', type: 'address' },
          { internalType: 'address', name: 'tokenOut', type: 'address' },
          { internalType: 'uint24', name: 'fee', type: 'uint24' },
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
          { internalType: 'uint256', name: 'amountInMaximum', type: 'uint256' },
          { internalType: 'uint160', name: 'sqrtPriceLimitX96', type: 'uint160' },
        ],
        internalType: 'struct ISwapRouter.ExactOutputSingleParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'exactOutputSingle',
    outputs: [{ internalType: 'uint256', name: 'amountIn', type: 'uint256' }],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'factory',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes[]', name: 'data', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ internalType: 'bytes[]', name: 'results', type: 'bytes[]' }],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'int256', name: 'amount0Delta', type: 'int256' },
      { internalType: 'int256', name: 'amount1Delta', type: 'int256' },
      { internalType: 'bytes', name: '_data', type: 'bytes' },
    ],
    name: 'pancakeV3SwapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { inputs: [], name: 'refundETH', outputs: [], stateMutability: 'payable', type: 'function' },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
      { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      { internalType: 'uint8', name: 'v', type: 'uint8' },
      { internalType: 'bytes32', name: 'r', type: 'bytes32' },
      { internalType: 'bytes32', name: 's', type: 'bytes32' },
    ],
    name: 'selfPermit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'nonce', type: 'uint256' },
      { internalType: 'uint256', name: 'expiry', type: 'uint256' },
      { internalType: 'uint8', name: 'v', type: 'uint8' },
      { internalType: 'bytes32', name: 'r', type: 'bytes32' },
      { internalType: 'bytes32', name: 's', type: 'bytes32' },
    ],
    name: 'selfPermitAllowed',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'nonce', type: 'uint256' },
      { internalType: 'uint256', name: 'expiry', type: 'uint256' },
      { internalType: 'uint8', name: 'v', type: 'uint8' },
      { internalType: 'bytes32', name: 'r', type: 'bytes32' },
      { internalType: 'bytes32', name: 's', type: 'bytes32' },
    ],
    name: 'selfPermitAllowedIfNecessary',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
      { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      { internalType: 'uint8', name: 'v', type: 'uint8' },
      { internalType: 'bytes32', name: 'r', type: 'bytes32' },
      { internalType: 'bytes32', name: 's', type: 'bytes32' },
    ],
    name: 'selfPermitIfNecessary',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amountMinimum', type: 'uint256' },
      { internalType: 'address', name: 'recipient', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amountMinimum', type: 'uint256' },
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint256', name: 'feeBips', type: 'uint256' },
      { internalType: 'address', name: 'feeRecipient', type: 'address' },
    ],
    name: 'sweepTokenWithFee',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amountMinimum', type: 'uint256' },
      { internalType: 'address', name: 'recipient', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amountMinimum', type: 'uint256' },
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint256', name: 'feeBips', type: 'uint256' },
      { internalType: 'address', name: 'feeRecipient', type: 'address' },
    ],
    name: 'unwrapWETH9WithFee',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
];

/**
 * Pancakeswap V2 Router ABI for swap methods
 */
export const IPancakeswapV2Router02ABI = {
  abi: [
    {
      inputs: [
        { internalType: 'address', name: '_factory', type: 'address' },
        { internalType: 'address', name: '_WETH', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'WETH',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'tokenA', type: 'address' },
        { internalType: 'address', name: 'tokenB', type: 'address' },
        { internalType: 'uint256', name: 'amountADesired', type: 'uint256' },
        { internalType: 'uint256', name: 'amountBDesired', type: 'uint256' },
        { internalType: 'uint256', name: 'amountAMin', type: 'uint256' },
        { internalType: 'uint256', name: 'amountBMin', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      name: 'addLiquidity',
      outputs: [
        { internalType: 'uint256', name: 'amountA', type: 'uint256' },
        { internalType: 'uint256', name: 'amountB', type: 'uint256' },
        { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'token', type: 'address' },
        { internalType: 'uint256', name: 'amountTokenDesired', type: 'uint256' },
        { internalType: 'uint256', name: 'amountTokenMin', type: 'uint256' },
        { internalType: 'uint256', name: 'amountETHMin', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      name: 'addLiquidityETH',
      outputs: [
        { internalType: 'uint256', name: 'amountToken', type: 'uint256' },
        { internalType: 'uint256', name: 'amountETH', type: 'uint256' },
        { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'tokenA', type: 'address' },
        { internalType: 'address', name: 'tokenB', type: 'address' },
        { internalType: 'uint256', name: 'amountA', type: 'uint256' },
        { internalType: 'uint256', name: 'amountB', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      name: 'removeLiquidity',
      outputs: [
        { internalType: 'uint256', name: 'amountA', type: 'uint256' },
        { internalType: 'uint256', name: 'amountB', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'token', type: 'address' },
        { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      name: 'removeLiquidityETH',
      outputs: [
        { internalType: 'uint256', name: 'amountToken', type: 'uint256' },
        { internalType: 'uint256', name: 'amountETH', type: 'uint256' },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'token', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      name: 'swapExactTokensForTokens',
      outputs: [{ internalType: 'uint256', name: 'amountOut', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'tokenIn', type: 'address' },
        { internalType: 'address', name: 'tokenOut', type: 'address' },
        { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
        { internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      name: 'swapExactTokensForETH',
      outputs: [{ internalType: 'uint256', name: 'amountOut', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'tokenIn', type: 'address' },
        { internalType: 'address', name: 'tokenOut', type: 'address' },
        { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
        { internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
      outputs: [{ internalType: 'uint256', name: 'amountOut', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'tokenIn', type: 'address' },
        { internalType: 'address', name: 'tokenOut', type: 'address' },
        { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
        { internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
      outputs: [{ internalType: 'uint256', name: 'amountOut', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'token', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      name: 'swapTokensForExactTokens',
      outputs: [{ internalType: 'uint256', name: 'amountIn', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'tokenIn', type: 'address' },
        { internalType: 'address', name: 'tokenOut', type: 'address' },
        { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
        { internalType: 'uint256', name: 'amountInMax', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      name: 'swapTokensForExactETH',
      outputs: [{ internalType: 'uint256', name: 'amountIn', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'tokenIn', type: 'address' },
        { internalType: 'address', name: 'tokenOut', type: 'address' },
        { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
        { internalType: 'uint256', name: 'amountInMax', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      name: 'swapTokensForExactTokensSupportingFeeOnTransferTokens',
      outputs: [{ internalType: 'uint256', name: 'amountIn', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'tokenIn', type: 'address' },
        { internalType: 'address', name: 'tokenOut', type: 'address' },
        { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
        { internalType: 'uint256', name: 'amountInMax', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      name: 'swapTokensForExactETHSupportingFeeOnTransferTokens',
      outputs: [{ internalType: 'uint256', name: 'amountIn', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
};

/**
 * Pancakeswap V2 Pair ABI for swap methods
 */
export const IPancakeswapV2PairABI = {
  abi: [
    {
      inputs: [],
      name: 'getReserves',
      outputs: [
        { internalType: 'uint112', name: 'reserve0', type: 'uint112' },
        { internalType: 'uint112', name: 'reserve1', type: 'uint112' },
        { internalType: 'uint32', name: 'blockTimestampLast', type: 'uint32' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
};

/**
 * Pancakeswap V2 Factory ABI for swap methods
 */
export const IPancakeswapV2FactoryABI = {
  abi: [
    {
      inputs: [
        { internalType: 'address', name: 'tokenA', type: 'address' },
        { internalType: 'address', name: 'tokenB', type: 'address' },
      ],
      name: 'getPair',
      outputs: [{ internalType: 'address', name: 'pair', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
  ],
};

// Export POSITION_MANAGER_ABI from Uniswap contracts
export { POSITION_MANAGER_ABI } from '../uniswap/uniswap.contracts';
