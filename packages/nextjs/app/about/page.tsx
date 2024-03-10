import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">About Our Project</h1>
      <p className="text-lg text-center mb-4">
        Welcome to PoolDive! Stay tuned for more updates!
      </p>
      <h2 className="text-2xl font-bold mb-2">🚧 Work in progess Features</h2>
      <ul className="list-disc space-y-3 pl-5 mb-4">
        <li>Easily explore pools on Balancer v2 and Uniswap v3</li>
        <li>Explore details of any pool on balancer v2 or Uniswap v3</li>
        <li>Swap tokens with the best price across Uniswap v2 and v3</li>
      </ul>
    </div>
  );
};

export default AboutPage;
