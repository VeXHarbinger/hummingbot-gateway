import Fastify from 'fastify';
import masterchefUnstakeRoutes from '../../src/clmm-routes/masterchef-unstake';

jest.mock('../../src/services/logger', () => ({
  logger: {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));

describe('MasterChef Unstake Routes', () => {
  let fastify;

  beforeEach(async () => {
    fastify = Fastify();
    await fastify.register(masterchefUnstakeRoutes);
  });

  afterEach(async () => {
    await fastify.close();
  });

  it('should return 400 if required parameters are missing', async () => {
    const response = await fastify.inject({
      method: 'POST',
      url: '/masterchef-unstake',
      payload: {},
    });

    expect(response.statusCode).toBe(400);
    expect(response.json()).toHaveProperty('error', 'Missing required parameters: network, tokenId');
  });

  it('should return 200 on successful unstaking', async () => {
    const response = await fastify.inject({
      method: 'POST',
      url: '/masterchef-unstake',
      payload: { network: 'bsc-mainnet', tokenId: 123 },
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toHaveProperty('message', 'Successfully unstaked NFT with tokenId 123');
  });
});