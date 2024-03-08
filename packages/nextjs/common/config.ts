import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { BalancerSDK, BalancerSdkConfig, Network } from '@balancer-labs/sdk';
import { BigNumber, ethers, providers } from 'ethers';
import { BaseProvider } from '@ethersproject/providers';






export enum Environment {
  // LOCAL,
  MAINNET,
  WALLET_EXTENSION
}
  
export enum TransactionState {
  Failed = 'Failed',
  New = 'New',
  Rejected = 'Rejected',
  Sending = 'Sending',
  Sent = 'Sent',
}



export interface TConfig {
  env: Environment
  rpc: {
    local: string
    mainnet: string
  }
  pool: {
    fee: FeeAmount
  }
  chart: {
    numSurroundingTicks: number
  }
  // wallet: {
  //   address: string
  //   privateKey: string
  // }
  tokens: {
    token0Amount: number
    token1Amount: number
    poolFee: FeeAmount
  }
}





export const CurrentConfig: TConfig = {
  env: Environment.MAINNET,
  rpc: {
    local: 'http://localhost:8545',
    mainnet: 'https://mainnet.infura.io/v3/0ac57a06f2994538829c14745750d721',
  },
  pool: {
    fee: FeeAmount.MEDIUM,
  },
  chart: {
    numSurroundingTicks: 100,
  },




  // mint position
  // wallet: {
  //   address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  //   privateKey:
  //     '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
  // },
  tokens: {
    token0Amount: 10,
    token1Amount: 10,
    poolFee: FeeAmount.LOW,
  },
}





// export const ethersProvider = new ethers.providers.JsonRpcProvider( `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA}`);
const mainnetProvider = new ethers.providers.JsonRpcProvider(
  CurrentConfig.rpc.mainnet
)

// Provider  Functions

export function getMainnetProvider(): BaseProvider {
  return mainnetProvider

}





// const wallet = createWallet()

const browserExtensionProvider = createBrowserExtensionProvider()
let walletExtensionAddress: string | null = null










export function getProvider(): providers.Provider | null {
  return browserExtensionProvider
}


export async function sendTransaction(
  transaction: ethers.providers.TransactionRequest
): Promise<TransactionState> {
  
    return sendTransactionViaExtension(transaction)
  
}

export async function connectBrowserExtensionWallet() {
  if (!window.ethereum) {
    return null
  }

  const { ethereum } = window
  const provider = new ethers.providers.Web3Provider(ethereum)
  const accounts = await provider.send('eth_requestAccounts', [])

  if (accounts.length !== 1) {
    return
  }

  walletExtensionAddress = accounts[0]
  return walletExtensionAddress
}

// Internal Functionality

// function createWallet(): ethers.Wallet {
//   let provider = mainnetProvider
//   if (CurrentConfig.env == Environment.LOCAL) {
//     provider = new ethers.providers.JsonRpcProvider(CurrentConfig.rpc.local)
//   }
//   return new ethers.Wallet(CurrentConfig.wallet.privateKey, provider)
// }

function createBrowserExtensionProvider(): ethers.providers.Web3Provider | null {
  try {
    return new ethers.providers.Web3Provider(window?.ethereum, 'any')
  } catch (e) {
    console.log('No Wallet Extension Found')
    return null
  }
}

// Transacting with a wallet extension via a Web3 Provider
async function sendTransactionViaExtension(
  transaction: ethers.providers.TransactionRequest
): Promise<TransactionState> {
  try {
    const receipt = await browserExtensionProvider?.send(
      'eth_sendTransaction',
      [transaction]
    )
    if (receipt) {
      return TransactionState.Sent
    } else {
      return TransactionState.Failed
    }
  } catch (e) {
    console.log(e)
    return TransactionState.Rejected
  }
}









// async function sendTransactionViaWallet(
//   transaction: ethers.providers.TransactionRequest
// ): Promise<TransactionState> {
//   if (transaction.value) {
//     transaction.value = BigNumber.from(transaction.value)
//   }
//   const txRes = await wallet.sendTransaction(transaction)

//   let receipt = null
//   const provider = getProvider()
//   if (!provider) {
//     return TransactionState.Failed
//   }

//   while (receipt === null) {
//     try {
//       receipt = await provider.getTransactionReceipt(txRes.hash)

//       if (receipt === null) {
//         continue
//       }
//     } catch (e) {
//       console.log(`Receipt error:`, e)
//       break
//     }
//   }

//   // Transaction was successful if status === 1
//   if (receipt) {
//     return TransactionState.Sent
//   } else {
//     return TransactionState.Failed
//   }
// }












// balancer  
const config: BalancerSdkConfig = {
  network: Network.MAINNET,
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA}`,
};
export const balancer = new BalancerSDK(config);

export const POOL_FACTORY_CONTRACT_ADDRESS_UNI =
  '0x1F98431c8aD98523631AE4a59f267346ea31F984'


