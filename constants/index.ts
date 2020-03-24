import { isProduction } from '../lib/util';

export const PROTOCOL = isProduction() ? 'https' : 'http';
