module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();

  await deploy('Greeter', {
    from: deployer,
    args: ['Hola mundo!'],
    log: true,
  });

  return true;
};

module.exports.id = '01'
