usePlugin("@nomiclabs/buidler-waffle");
usePlugin('buidler-deploy');

module.exports = {
  networks: {
    ganache: {
      url: 'http://localhost:8545',
      accounts: [
        '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d',
      ],
    },
  },
  namedAccounts: {
    deployer: {
      1337: 0,
    },
  },
  paths: {
    sources: './contracts',
    deploy: 'deploy',
    deployments: 'deployments',
  },
  solc: {
    version: "0.6.8",
  },
};
