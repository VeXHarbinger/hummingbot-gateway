# PR title: Add CLMM stake endpoint, gateway client method, models, and tests

## Summary

This PR introduces the integration of PancakeSwap V3 MasterChef functionality, enabling staking and unstaking of NFTs. The following updates have been made:

- **Integration**: Added `stakeNft` and `unstakeNft` methods to the PancakeSwap connector.
- **Routes**: Defined new routes in `masterchef/stake.ts` and `masterchef/unstake.ts`.
- **Unit Tests**: Created unit tests for the new routes to ensure proper functionality.

## What changed

- **Code**:
  - Extended the PancakeSwap connector with MasterChef staking/unstaking methods.
  - Added new routes for NFT staking/unstaking.
  - Updated `pancakeswap.contracts.ts` with missing exports.
- **Tests**:
  - Implemented unit tests for `masterchef-stake.ts` and `masterchef-unstake.ts`.
  - Resolved TypeScript errors in `stake-nft.ts` and `unstake-nft.ts`.

## Why

To enable NFT staking and unstaking functionality for PancakeSwap V3 MasterChef, enhancing the capabilities of the Hummingbot Gateway.

## How I tested

- Ran unit tests for the new routes.
- Verified that the `stakeNft` and `unstakeNft` methods interact correctly with the MasterChef contract.

## CI Note (please include)

Ensure that all tests pass successfully in the CI pipeline.

## Files changed (for reviewer convenience)

- `src/clmm-routes/masterchef/stake.ts` (new)
- `src/clmm-routes/masterchef/unstake.ts` (new)
- `test/clmm-routes/masterchef-stake.test.ts` (new)
- `test/clmm-routes/masterchef-unstake.test.ts` (new)
- `src/connectors/pancakeswap/pancakeswap.ts` (updated)
- `src/connectors/pancakeswap/pancakeswap.contracts.ts` (updated)

## Checklist for reviewer

- [ ] Verify the correctness of the `stakeNft` and `unstakeNft` methods.
- [ ] Ensure the new routes are properly defined and tested.
- [ ] Confirm that all TypeScript errors have been resolved.

## Notes / follow-ups

- The `root.yml` file was missing in the `dist` directory and was restored to resolve test failures.

### Note:
- Ensure any personal token tracking data is removed from `gateway-files/conf/pools/pancakeswap.json` and similar JSON files before submitting the PR.
- We should remove any of the tracked LPs and tokens we've been using for testing and extending the gateway.
