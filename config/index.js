import development from './dev';
import production from './prod';

const exportedConfig = {
	development,
	production
};

export const config = exportedConfig[process.env.NODE_ENV];