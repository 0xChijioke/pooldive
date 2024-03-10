'use client'

import { Theme, SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

const theme: Theme = {
    primary: '#FFF',
    secondary: '#A9A9A9',
    interactive: '#000',
    container: '#4E4E5A',
    module: '#222633',
    accent: '#010013',
    // outline: '#CC1',
    dialog: '#FFF',
  }

const UniSwap = () => {
    
    return (
        <div className='mt-4 lg:mt-14'>
            <div className="Uniswap flex  justify-center">
                <SwapWidget />
            </div>
        </div>  
  )
}

export default UniSwap;