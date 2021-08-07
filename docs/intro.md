---
sidebar_position: 1
---

# Introduction

## What's VariaNFT?
VariaNFT is a no-code tool for NFT creators. With VariaNFT, you can create a series of NFTs with SVG and CSV files. It's designed for people who need to create a lot of NFTs and have slight differences for each NFT, such as member cards, personal gifts, tickets, and so on.

## How does VariaNFT work?
VariaNFT uses the following techniques to deploy your NFT:

### ERC721
NFTs mint with VariaNFT are following the standard [ERC721](https://eips.ethereum.org/EIPS/eip-721), those NFTs can be used in most NFT wallets and marketplaces, such as [Rarible](https://rarible.com) and [OpenSea](https://opensea.io).

### Rarible Protocol
ERC721 contracts are supported by the Rarible Protocol. You can mint your NFTs under Rarible Public Collection or deploy your collection. If you decided to have owned collections, we will also deploy it with [the contract](https://github.com/rariblecom/protocol-contracts/blob/57043e3f9e93223ef9d65dae351d3c55b34e5bf1/tokens/contracts/erc-721/ERC721RaribleUser.sol) developed by Rarible Protocol.

### NFT.storage
All your data are store in [NFT.storage](https://nft.storage), you don't need to set up it because we will handle that for you. If you prefer to store files in your account, there will be an option for you to set your NFT.storage key soon.

## Getting Started

To start using VariaNFT, you will need to prepare an SVG and a CSV.  

For demo, you can download example files from <a href="https://docs.varianft.studio/file/example.zip" download>here</a>, unzip it and follow [this guide](/docs/getting-started/create-a-project) to try it. VariaNFT also works on Rinkeby and Ropsten, just simply switch the network in your wallet and we will handle all stuff for you.