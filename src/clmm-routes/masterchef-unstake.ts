import { FastifyInstance } from 'fastify';
import { Pancakeswap } from '../connectors/pancakeswap/pancakeswap';
import { Static, Type } from '@sinclair/typebox';

const MasterChefUnstakeSchema = Type.Object({
  network: Type.String({ description: 'Blockchain network (e.g., bsc-mainnet)' }),
  tokenId: Type.Number({ description: 'Token ID of the NFT to unstake' }),
});

type MasterChefUnstakeRequest = Static<typeof MasterChefUnstakeSchema>;

export default async function masterchefUnstakeRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: MasterChefUnstakeRequest }>(
    '/masterchef/unstake',
    {
      schema: {
        description: 'Unstake an NFT from the MasterChef contract',
        tags: ['MasterChef'],
        body: MasterChefUnstakeSchema,
        response: {
          200: Type.Object({ message: Type.String() }),
          400: Type.Object({ error: Type.String() }),
          500: Type.Object({ error: Type.String() }),
        },
      },
    },
    async (request, reply) => {
      const { network, tokenId } = request.body;

      fastify.log.info(`Received unstake request for tokenId ${tokenId} on network ${network}`);

      try {
        const pancakeswap = await Pancakeswap.getInstance(network);
        await pancakeswap.unstakeNft(tokenId);
        fastify.log.info(`Successfully unstaked tokenId ${tokenId}`);
        reply.status(200).send({ message: `Successfully unstaked NFT with tokenId ${tokenId}` });
      } catch (error) {
        fastify.log.error(`Failed to unstake tokenId ${tokenId}: ${error.message}`);
        reply.status(500).send({ error: `Failed to unstake NFT: ${error.message}` });
      }
    },
  );
}