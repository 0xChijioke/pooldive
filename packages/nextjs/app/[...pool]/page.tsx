'use client'

import BalPool from './_components/BalPool'
import UniPool from './_components/UniPool'
import { useParams } from 'next/navigation'

const PoolPage = () => {
  const params = useParams();
  const { pool } = params;
  const resolvedPoolId = Array.isArray(pool) ? pool[1] : null;

  return (
    <div className='max-w-full overflow-hidden p-4'>
      {resolvedPoolId && (
      <>
        {pool[0] === 'bal' && <BalPool poolId={resolvedPoolId} />}
        {pool[0] === 'uni' && <UniPool poolId={resolvedPoolId} />}
      </>
    )}
    </div>
  );
}

export default PoolPage;