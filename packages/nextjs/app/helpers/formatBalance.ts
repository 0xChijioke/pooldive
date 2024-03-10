// Helper function to format the balance based on decimals
export const formatBalance = (balance: string, decimals: number) => {
  console.log(balance, decimals)
  const formattedBalance = parseFloat(balance) / 10 ** Number(decimals);
  console.log(BigInt(formattedBalance))
  return formattedBalance.toFixed(4);
};