# Pooldive 🏊🏾

Welcome to Pooldive, a user-friendly tool for exploring and engaging with liquidity pools in Ethereum. Pooldive simplifies the process of navigating and understanding pools from different protocols such as Uniswap and Balancer.

## Features (🚧Work in progress)

    User-Friendly Interface: An intuitive interface empowers users to explore DeFi pools effortlessly.

    Pool Exploration: Dive into Uniswap v3 and Balancer v2 pools with ease.

    Liquidity Provision: Seamlessly participate in liquidity provision as the process undergoes refinement and optimization for user convenience.

    Arbitrage Opportunities: Identify potential arbitrage opportunities for strategic decision-making.

    Composed Liquidity: Explore the power of composed liquidity as additional protocols integrate with Pooldive, expanding access to decentralized finance opportunities.




## Tech Stack 🛠️

Pooldive is built with the following technologies:

    Scaffold-ETH 2
    Apollo Client
    The Graph


## Quickstart

To get started with PoolDive, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/0xChijioke/pooldive.git
cd pooldive
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

## Usage 💡 

Explore DeFi pools, participate in liquidity provision, and identify arbitrage opportunities using the intuitive user interface of Pooldive.

## Future Plans 🔭

1. Chain Agnosticism
2. Enhanced Functionalities
    + Swapping
    + Flash Swaps
3. Protocol Expansion
    To further amplify access to liquidity and uncover additional opportunities, supported protocols will be expanded.