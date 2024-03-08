// import { useQuery } from '@apollo/client';
// import { GET_BALANCER } from './getBalancer';


// export const getAllPools = () => {
//   const { data, loading, error } = useQuery(GET_ALL_POOLS);

//   return {
//     data,
//     loading,
//     error,
//   };
// };

// export const getBalancer = () => {
//   const { data, loading, error } = useQuery(GET_BALANCER);

//   return {
//     data,
//     loading,
//     error,
//   };
// };

// export const getPoolDetails = (poolId: string) => {
//   const { data, loading, error } = useQuery(GET_POOL, {
//     variables: { poolId },
//   });

//   return {
//     data,
//     loading,
//     error,
//   };
// };