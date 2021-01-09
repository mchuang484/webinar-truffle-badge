const TruffleBadge = artifacts.require("TruffleBadgeCopy");

module.exports = function(deployer) {
   
  return deployer
    .then(() => deployer.deploy(TruffleBadgeCopy));
};