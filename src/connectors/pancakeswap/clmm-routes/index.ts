import { FastifyPluginAsync } from 'fastify';

import addLiquidityRoute from './addLiquidity';
import closePositionRoute from './closePosition';
import collectFeesRoute from './collectFees';
import executeSwapRoute from './executeSwap';
import masterchefStakeRoute from './masterchef-stake';
import masterchefUnstakeRoute from './masterchef-unstake';
import openPositionRoute from './openPosition';
import poolInfoRoute from './poolInfo';
import positionInfoRoute from './positionInfo';
import positionsOwnedRoute from './positionsOwned';
import quotePositionRoute from './quotePosition';
import quoteSwapRoute from './quoteSwap';
import removeLiquidityRoute from './removeLiquidity';

export const pancakeswapClmmRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onRoute', (routeOptions) => {
    fastify.log.info(`Route registered: ${routeOptions.method} ${routeOptions.url}`);
  });

  await fastify.register(poolInfoRoute);
  await fastify.register(positionInfoRoute);
  await fastify.register(positionsOwnedRoute);
  await fastify.register(quotePositionRoute);
  await fastify.register(quoteSwapRoute);
  await fastify.register(executeSwapRoute);
  await fastify.register(openPositionRoute);
  await fastify.register(addLiquidityRoute);
  await fastify.register(removeLiquidityRoute);
  await fastify.register(collectFeesRoute);
  await fastify.register(closePositionRoute);
  await fastify.register(masterchefStakeRoute);
  await fastify.register(masterchefUnstakeRoute);
};

export default pancakeswapClmmRoutes;
