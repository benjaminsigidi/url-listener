let environments = {}

environments.staging = {
  'httpPort' : 3000,
  'httpPort' : 3001,
  'envName' : 'staging'
};

environments.production = {
  'httpsPort' : 5000,
  'httpsPort' : 5001,
  'envName' : 'production'
};

const currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

const environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment]  : environments.staging;

module.exports = environmentToExport;
