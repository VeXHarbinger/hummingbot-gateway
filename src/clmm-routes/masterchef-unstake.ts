import { FastifyInstance } from 'fastify';
import { Pancakeswap } from '../connectors/pancakeswap/pancakeswap';

interface MasterChefRequestBody {
  network: string;
  tokenId: number;
}

export default async function masterchefUnstakeRoutes(fastify: FastifyInstance) {
  fastify.post('/masterchef/unstake', async (request, reply) => {
    const { network, tokenId } = request.body as MasterChefRequestBody;

    if (!network || !tokenId) {
      reply.status(400).send({ error: 'Missing required parameters: network, tokenId' });
      return;
    }

    try {
      const pancakeswap = await Pancakeswap.getInstance(network);
      await pancakeswap.unstakeNft(tokenId);
      reply.status(200).send({ message: `Successfully unstaked NFT with tokenId ${tokenId}` });
    } catch (error) {
      reply.status(500).send({ error: `Failed to unstake NFT: ${error.message}` });
    }
  });
}