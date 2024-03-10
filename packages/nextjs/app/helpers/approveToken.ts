import { Contract, providers } from 'ethers';

export const approveToken = async (
    token: string,
    spender: string,
    amount: string,
    address: string,
    provider: providers.JsonRpcProvider
): Promise<boolean> => {
    const iERC20 = ['function approve(address spender, uint256 amount) external returns (bool)'];
    const erc20 = new Contract(token, iERC20, provider.getSigner(address));

    // Check existing allowance
    const currentAllowance = await erc20.allowance(address, spender);

    // If allowance is not enough, update it
    if (currentAllowance.lt(amount)) {
        const txReceipt = await (await erc20.approve(spender, amount)).wait();
        return txReceipt.status === 1;
    }

    // If allowance is sufficient, no need to update
    return true;
};