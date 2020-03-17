import getConfig from 'next/config';

const { publicRuntimeConfig = {} } = getConfig() || ({} as any);
const config = publicRuntimeConfig || {};

export const GA_ID = config.GA_ID || process.env.GA_ID;
