const JewellFactory = artifacts.require("JewellFactory");

module.exports = async function (deployer) {
  await deployer.deploy(JewellFactory)
  const jewellFactory = await JewellFactory.deployed()
  console.log(jewellFactory.address)
};