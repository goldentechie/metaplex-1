import { clusterApiUrl } from '@solana/web3.js';
import { EndpointsMap } from '../ingester/types';

export const ENDPOINTS: EndpointsMap = [
  {
    name: 'mainnet-beta',
    endpoint:
      'https://snowy-dark-sunset.solana-devnet.quiknode.pro/e9d82bcbc1268ef56aa661f8dbb7b026af8ddfba/',
    // endpoint: "https://api.metaplex.solana.com/",
  },
  {
    name: 'testnet',
    endpoint: clusterApiUrl('testnet'),
  },
  {
    name: 'devnet',
    // endpoint: clusterApiUrl("devnet"),
    endpoint:
      'https://snowy-dark-sunset.solana-devnet.quiknode.pro/e9d82bcbc1268ef56aa661f8dbb7b026af8ddfba/',
  },
];

export const getEndpoints = (
  endpoints: EndpointsMap = ENDPOINTS,
  filter = process.env.NETWORK,
) => {
  return filter
    ? endpoints.filter(({ name }) => name.startsWith(filter))
    : endpoints;
};

export const getDefaultEndpointName = (
  endpoints: EndpointsMap = ENDPOINTS,
  filter?: string,
) => {
  const endpoint = getEndpoints(endpoints, filter)[0] || endpoints?.[0];
  return endpoint.name;
};
