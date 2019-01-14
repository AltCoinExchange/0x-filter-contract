var Migrations = artifacts.require("./Migrations.sol");
var Whitelist = artifacts.require("./examples/Whitelist.sol");

//./node_modules/.bin/truffle-flattener ./contracts/examples/Whitelist.sol > flattened.sol
// var iExchange1 = artifacts.require("./interfaces/contracts/protocol/Exchange/IExchange.sol");
// var iExchange2 = artifacts.require("./interfaces/contracts/protocol/Exchange/IExchangeCore.sol");
// var iExchange3 = artifacts.require("./interfaces/contracts/protocol/Exchange/IMatchOrders.sol");
// var iExchange4 = artifacts.require("./interfaces/contracts/protocol/Exchange/ISignatureValidator.sol");
// var iExchange5 = artifacts.require("./interfaces/contracts/protocol/Exchange/ITransactions.sol");
// var iExchange6 = artifacts.require("./interfaces/contracts/protocol/Exchange/IAssetProxyDispatcher.sol");
// var iExchange7 = artifacts.require("./interfaces/contracts/protocol/Exchange/IWrapperFunctions.sol");
//
// var LibOrder1 = artifacts.require("./libs/contracts/libs/LibOrder.sol");
// var LibOrder2 = artifacts.require("./libs/contracts/libs/LibEIP712.sol");
//
// var Ownable1 = artifacts.require("./utils/contracts/utils/Ownable/Ownable.sol");
// var Ownable2 = artifacts.require("./utils/contracts/utils/Ownable/IOwnable.sol");

/*
import "../interfaces/contracts/protocol/Exchange/IExchange.sol";
import "../interfaces/contracts/protocol/Exchange/IExchangeCore.sol";
import "../interfaces/contracts/protocol/Exchange/IMatchOrders.sol";
import "../interfaces/contracts/protocol/Exchange/ISignatureValidator.sol";
import "../interfaces/contracts/protocol/Exchange/ITransactions.sol";
import "../interfaces/contracts/protocol/Exchange/IAssetProxyDispatcher.sol";
import "../interfaces/contracts/protocol/Exchange/IWrapperFunctions.sol";

import "../libs/contracts/libs/LibOrder.sol";
import "../libs/contracts/libs/LibEIP712.sol";

import "../utils/contracts/utils/Ownable/Ownable.sol";
import "../utils/contracts/utils/Ownable/IOwnable.sol";
*/

module.exports = function(deployer) {
  deployer.deploy(Migrations);

  deployer.deploy(Whitelist, ""); //address oc 0x dex on kovan
  // deployer.deploy(iExchange1);
  // deployer.deploy(iExchange2);
  // deployer.deploy(iExchange3);
  // deployer.deploy(iExchange4);
  // deployer.deploy(iExchange5);
  // deployer.deploy(iExchange6);
  // deployer.deploy(iExchange7);
  //
  // deployer.deploy(LibOrder1);
  // deployer.deploy(LibOrder2);
  //
  // deployer.deploy(Ownable1);
  // deployer.deploy(Ownable2);
};
