import { FastifyInstance } from 'fastify';
import { Pancakeswap } from '../connectors/pancakeswap/pancakeswap';
import { Static, Type } from '@sinclair/typebox';

const MasterChefStakeSchema = Type.Object({
  network: Type.String({ description: 'Blockchain network (e.g., bsc-mainnet)' }),
  tokenId: Type.Number({ description: 'Token ID of the NFT to stake' }),
});

type MasterChefStakeRequest = Static<typeof MasterChefStakeSchema>;

export default async function masterchefStakeRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: MasterChefStakeRequest }>(
    '/masterchef/stake',
    {
      schema: {
        description: 'Stake an NFT in the MasterChef contract',
        tags: ['/connector/pancakeswap'],
        body: MasterChefStakeSchema,
        response: {
          200: Type.Object({ message: Type.String() }),
          400: Type.Object({ error: Type.String() }),
          500: Type.Object({ error: Type.String() }),
        },
      },
    },
    async (request, reply) => {
      const { network, tokenId } = request.body;

      fastify.log.info(`Received stake request for tokenId ${tokenId} on network ${network}`);

      try {
        const pancakeswap = await Pancakeswap.getInstance(network);
        await pancakeswap.stakeNft(tokenId);
        fastify.log.info(`Successfully staked tokenId ${tokenId}`);
        reply.status(200).send({ message: `Successfully staked NFT with tokenId ${tokenId}` });
      } catch (error) {
        fastify.log.error(`Failed to stake tokenId ${tokenId}: ${error.message}`);
        reply.status(500).send({ error: `Failed to stake NFT: ${error.message}` });
      }
    },
  );
}