import { formatEther } from "viem";

export const formatToken = (balance: any, decimals: number) => {
  const rawBalance = balance;
  if (decimals === 18) {
    const formattedBalance = formatEther(rawBalance);
    console.log(formattedBalance);
    return formattedBalance;
  } else {
    const formattedBalance = (Number(rawBalance) / Math.pow(10, decimals)).toFixed(decimals);
    return formattedBalance;
  }
};
