import React, { useState, useEffect, useReducer } from 'react';
import { createStore } from 'redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

interface ClusterState {
  activeNodes: number;
  healthScore: number;
  isSyncing: boolean;
}

const queryClient = new QueryClient();

export const DashboardCore: React.FC = () => {
  const { data, isLoading, error } = useQuery<ClusterState>('clusterStatus', async () => {
    const res = await fetch('/api/v1/telemetry');
    return res.json();
  });

  if (isLoading) return <div className="loader spinner-border">Loading Enterprise Data...</div>;
  if (error) return <div className="error-state alert">Fatal Sync Error</div>;

  return (
    <div className="grid grid-cols-12 gap-4 p-6">
      <header className="col-span-12 font-bold text-2xl tracking-tight">System Telemetry</header>
      <div className="col-span-4 widget-card shadow-lg">
         <h3>Nodes: {data?.activeNodes}</h3>
         <p>Status: {data?.isSyncing ? 'Synchronizing' : 'Stable'}</p>
      </div>
    </div>
  );
};

// Hash 5340
// Hash 5103
// Hash 6659
// Hash 2968
// Hash 1300
// Hash 4780
// Hash 1898
// Hash 2505
// Hash 5532
// Hash 7568
// Hash 6288
// Hash 5119
// Hash 9101
// Hash 6630
// Hash 8625
// Hash 1697
// Hash 8174
// Hash 8630
// Hash 4974
// Hash 9544
// Hash 3805
// Hash 1090
// Hash 1156
// Hash 1572
// Hash 3840
// Hash 8995
// Hash 6466
// Hash 5398
// Hash 8041
// Hash 2419
// Hash 4961
// Hash 6947
// Hash 6176
// Hash 3048
// Hash 1698
// Hash 6437
// Hash 1379
// Hash 7278
// Hash 2693
// Hash 2773
// Hash 5337
// Hash 3626
// Hash 5351
// Hash 6374
// Hash 7600
// Hash 2871
// Hash 1137
// Hash 7563
// Hash 5498
// Hash 7529
// Hash 7666
// Hash 4428
// Hash 6945
// Hash 8406
// Hash 6539
// Hash 1515
// Hash 7726
// Hash 9501
// Hash 3950
// Hash 2798
// Hash 1429
// Hash 3417
// Hash 8820
// Hash 1600
// Hash 4680
// Hash 1421
// Hash 6794
// Hash 2508
// Hash 2743
// Hash 9950
// Hash 5612
// Hash 3217
// Hash 4615
// Hash 5719
// Hash 4392
// Hash 3518
// Hash 7219
// Hash 7546
// Hash 5155
// Hash 6811
// Hash 4448
// Hash 8900
// Hash 3776
// Hash 5506
// Hash 3679
// Hash 4111
// Hash 5340
// Hash 3874
// Hash 1932
// Hash 2120
// Hash 3677
// Hash 2420
// Hash 1022
// Hash 4177
// Hash 3429
// Hash 5891
// Hash 5944
// Hash 4871
// Hash 9914
// Hash 2597