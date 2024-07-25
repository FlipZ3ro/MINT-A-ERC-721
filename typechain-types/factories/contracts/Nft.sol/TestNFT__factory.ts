/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TestNFT,
  TestNFTInterface,
} from "../../../contracts/Nft.sol/TestNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NFTMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burnNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "mintNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260006006553480156200001657600080fd5b506040518060400160405280600781526020017f466c69704e4654000000000000000000000000000000000000000000000000008152506040518060400160405280600781526020017f464c49504e465400000000000000000000000000000000000000000000000000815250816000908162000094919062000329565b508060019081620000a6919062000329565b50505062000410565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200013157607f821691505b602082108103620001475762000146620000e9565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001b17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000172565b620001bd868362000172565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200020a62000204620001fe84620001d5565b620001df565b620001d5565b9050919050565b6000819050919050565b6200022683620001e9565b6200023e620002358262000211565b8484546200017f565b825550505050565b600090565b6200025562000246565b620002628184846200021b565b505050565b5b818110156200028a576200027e6000826200024b565b60018101905062000268565b5050565b601f821115620002d957620002a3816200014d565b620002ae8462000162565b81016020851015620002be578190505b620002d6620002cd8562000162565b83018262000267565b50505b505050565b600082821c905092915050565b6000620002fe60001984600802620002de565b1980831691505092915050565b6000620003198383620002eb565b9150826002028217905092915050565b6200033482620000af565b67ffffffffffffffff81111562000350576200034f620000ba565b5b6200035c825462000118565b620003698282856200028e565b600060209050601f831160018114620003a157600084156200038c578287015190505b6200039885826200030b565b86555062000408565b601f198416620003b1866200014d565b60005b82811015620003db57848901518255600182019150602085019450602081019050620003b4565b86831015620003fb5784890151620003f7601f891682620002eb565b8355505b6001600288020188555050505b505050505050565b611f4b80620004206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806354ba0f2711610097578063a22cb46511610066578063a22cb46514610296578063b88d4fde146102b2578063c87b56dd146102ce578063e985e9c5146102fe576100f5565b806354ba0f27146101e85780636352211e1461021857806370a082311461024857806395d89b4114610278576100f5565b8063095ea7b3116100d3578063095ea7b31461017857806323b872dd146101945780632890e0d7146101b057806342842e0e146101cc576100f5565b806301ffc9a7146100fa57806306fdde031461012a578063081812fc14610148575b600080fd5b610114600480360381019061010f9190611732565b61032e565b604051610121919061177a565b60405180910390f35b610132610410565b60405161013f9190611825565b60405180910390f35b610162600480360381019061015d919061187d565b6104a2565b60405161016f91906118eb565b60405180910390f35b610192600480360381019061018d9190611932565b6104be565b005b6101ae60048036038101906101a99190611972565b6104d4565b005b6101ca60048036038101906101c5919061187d565b6105d6565b005b6101e660048036038101906101e19190611972565b6105e2565b005b61020260048036038101906101fd91906119c5565b610602565b60405161020f9190611a01565b60405180910390f35b610232600480360381019061022d919061187d565b610671565b60405161023f91906118eb565b60405180910390f35b610262600480360381019061025d91906119c5565b610683565b60405161026f9190611a01565b60405180910390f35b61028061073d565b60405161028d9190611825565b60405180910390f35b6102b060048036038101906102ab9190611a48565b6107cf565b005b6102cc60048036038101906102c79190611bbd565b6107e5565b005b6102e860048036038101906102e3919061187d565b610802565b6040516102f59190611825565b60405180910390f35b61031860048036038101906103139190611c40565b61086b565b604051610325919061177a565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103f957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104095750610408826108ff565b5b9050919050565b60606000805461041f90611caf565b80601f016020809104026020016040519081016040528092919081815260200182805461044b90611caf565b80156104985780601f1061046d57610100808354040283529160200191610498565b820191906000526020600020905b81548152906001019060200180831161047b57829003601f168201915b5050505050905090565b60006104ad82610969565b506104b7826109f1565b9050919050565b6104d082826104cb610a2e565b610a36565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105465760006040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161053d91906118eb565b60405180910390fd5b600061055a8383610555610a2e565b610a48565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105d0578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016105c793929190611ce0565b60405180910390fd5b50505050565b6105df81610c62565b50565b6105fd838383604051806020016040528060008152506107e5565b505050565b60006001600660008282546106179190611d46565b925050819055506000600654905061062f8382610ce8565b7f4cc0a9c4a99ddc700de1af2c9f916a7cbfdb71f14801ccff94061ad1ef8a80408382604051610660929190611d7a565b60405180910390a180915050919050565b600061067c82610969565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106f65760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016106ed91906118eb565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461074c90611caf565b80601f016020809104026020016040519081016040528092919081815260200182805461077890611caf565b80156107c55780601f1061079a576101008083540402835291602001916107c5565b820191906000526020600020905b8154815290600101906020018083116107a857829003601f168201915b5050505050905090565b6107e16107da610a2e565b8383610de1565b5050565b6107f08484846104d4565b6107fc84848484610f50565b50505050565b606061080d82610969565b506000610818611107565b905060008151116108385760405180602001604052806000815250610863565b806108428461111e565b604051602001610853929190611ddf565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600080610975836111ec565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109e857826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016109df9190611a01565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610a438383836001611229565b505050565b600080610a54846111ec565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610a9657610a958184866113ee565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b2757610ad8600085600080611229565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610baa576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b6000610c716000836000610a48565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ce457816040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610cdb9190611a01565b60405180910390fd5b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d5a5760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610d5191906118eb565b60405180910390fd5b6000610d6883836000610a48565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ddc5760006040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401610dd391906118eb565b60405180910390fd5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e5257816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610e4991906118eb565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f43919061177a565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115611101578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02610f94610a2e565b8685856040518563ffffffff1660e01b8152600401610fb69493929190611e58565b6020604051808303816000875af1925050508015610ff257506040513d601f19601f82011682018060405250810190610fef9190611eb9565b60015b611076573d8060008114611022576040519150601f19603f3d011682016040523d82523d6000602084013e611027565b606091505b50600081510361106e57836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161106591906118eb565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146110ff57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016110f691906118eb565b60405180910390fd5b505b50505050565b606060405180602001604052806000815250905090565b60606000600161112d846114b2565b01905060008167ffffffffffffffff81111561114c5761114b611a92565b5b6040519080825280601f01601f19166020018201604052801561117e5781602001600182028036833780820191505090505b509050600082602001820190505b6001156111e1578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816111d5576111d4611ee6565b5b0494506000850361118c575b819350505050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806112625750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b1561139657600061127284610969565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156112dd57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156112f057506112ee818461086b565b155b1561133257826040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815260040161132991906118eb565b60405180910390fd5b811561139457838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6113f9838383611605565b6114ad57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361146e57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016114659190611a01565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016114a4929190611d7a565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611510577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161150657611505611ee6565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061154d576d04ee2d6d415b85acef8100000000838161154357611542611ee6565b5b0492506020810190505b662386f26fc10000831061157c57662386f26fc10000838161157257611571611ee6565b5b0492506010810190505b6305f5e10083106115a5576305f5e100838161159b5761159a611ee6565b5b0492506008810190505b61271083106115ca5761271083816115c0576115bf611ee6565b5b0492506004810190505b606483106115ed57606483816115e3576115e2611ee6565b5b0492506002810190505b600a83106115fc576001810190505b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156116bd57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061167e575061167d848461086b565b5b806116bc57508273ffffffffffffffffffffffffffffffffffffffff166116a4836109f1565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61170f816116da565b811461171a57600080fd5b50565b60008135905061172c81611706565b92915050565b600060208284031215611748576117476116d0565b5b60006117568482850161171d565b91505092915050565b60008115159050919050565b6117748161175f565b82525050565b600060208201905061178f600083018461176b565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156117cf5780820151818401526020810190506117b4565b60008484015250505050565b6000601f19601f8301169050919050565b60006117f782611795565b61180181856117a0565b93506118118185602086016117b1565b61181a816117db565b840191505092915050565b6000602082019050818103600083015261183f81846117ec565b905092915050565b6000819050919050565b61185a81611847565b811461186557600080fd5b50565b60008135905061187781611851565b92915050565b600060208284031215611893576118926116d0565b5b60006118a184828501611868565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118d5826118aa565b9050919050565b6118e5816118ca565b82525050565b600060208201905061190060008301846118dc565b92915050565b61190f816118ca565b811461191a57600080fd5b50565b60008135905061192c81611906565b92915050565b60008060408385031215611949576119486116d0565b5b60006119578582860161191d565b925050602061196885828601611868565b9150509250929050565b60008060006060848603121561198b5761198a6116d0565b5b60006119998682870161191d565b93505060206119aa8682870161191d565b92505060406119bb86828701611868565b9150509250925092565b6000602082840312156119db576119da6116d0565b5b60006119e98482850161191d565b91505092915050565b6119fb81611847565b82525050565b6000602082019050611a1660008301846119f2565b92915050565b611a258161175f565b8114611a3057600080fd5b50565b600081359050611a4281611a1c565b92915050565b60008060408385031215611a5f57611a5e6116d0565b5b6000611a6d8582860161191d565b9250506020611a7e85828601611a33565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611aca826117db565b810181811067ffffffffffffffff82111715611ae957611ae8611a92565b5b80604052505050565b6000611afc6116c6565b9050611b088282611ac1565b919050565b600067ffffffffffffffff821115611b2857611b27611a92565b5b611b31826117db565b9050602081019050919050565b82818337600083830152505050565b6000611b60611b5b84611b0d565b611af2565b905082815260208101848484011115611b7c57611b7b611a8d565b5b611b87848285611b3e565b509392505050565b600082601f830112611ba457611ba3611a88565b5b8135611bb4848260208601611b4d565b91505092915050565b60008060008060808587031215611bd757611bd66116d0565b5b6000611be58782880161191d565b9450506020611bf68782880161191d565b9350506040611c0787828801611868565b925050606085013567ffffffffffffffff811115611c2857611c276116d5565b5b611c3487828801611b8f565b91505092959194509250565b60008060408385031215611c5757611c566116d0565b5b6000611c658582860161191d565b9250506020611c768582860161191d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611cc757607f821691505b602082108103611cda57611cd9611c80565b5b50919050565b6000606082019050611cf560008301866118dc565b611d0260208301856119f2565b611d0f60408301846118dc565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611d5182611847565b9150611d5c83611847565b9250828201905080821115611d7457611d73611d17565b5b92915050565b6000604082019050611d8f60008301856118dc565b611d9c60208301846119f2565b9392505050565b600081905092915050565b6000611db982611795565b611dc38185611da3565b9350611dd38185602086016117b1565b80840191505092915050565b6000611deb8285611dae565b9150611df78284611dae565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b6000611e2a82611e03565b611e348185611e0e565b9350611e448185602086016117b1565b611e4d816117db565b840191505092915050565b6000608082019050611e6d60008301876118dc565b611e7a60208301866118dc565b611e8760408301856119f2565b8181036060830152611e998184611e1f565b905095945050505050565b600081519050611eb381611706565b92915050565b600060208284031215611ecf57611ece6116d0565b5b6000611edd84828501611ea4565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea264697066735822122075f6b0c6471ad7db5f62fc307f0e95f100651990135c09ab9d734805ce21f14a64736f6c63430008140033";

type TestNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestNFT__factory extends ContractFactory {
  constructor(...args: TestNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TestNFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestNFT__factory {
    return super.connect(runner) as TestNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestNFTInterface {
    return new Interface(_abi) as TestNFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TestNFT {
    return new Contract(address, _abi, runner) as unknown as TestNFT;
  }
}
