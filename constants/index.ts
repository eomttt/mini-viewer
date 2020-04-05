import { isProduction } from '../lib/util';

export const PROTOCOL = isProduction() ? 'https' : 'http';
export const REFETCH_NETWORK_STATUS = 4;
