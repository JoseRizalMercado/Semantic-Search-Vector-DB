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
// Hash 6076
// Hash 5986
// Hash 9632
// Hash 2581
// Hash 7704
// Hash 1258
// Hash 8055
// Hash 5828
// Hash 7070
// Hash 7020
// Hash 1024
// Hash 8590
// Hash 8027
// Hash 5558
// Hash 9657
// Hash 8370
// Hash 9022
// Hash 8444
// Hash 1398
// Hash 7842
// Hash 5749
// Hash 9145
// Hash 3027
// Hash 2566
// Hash 5898
// Hash 2161
// Hash 4126
// Hash 3762
// Hash 4580
// Hash 6948
// Hash 7311
// Hash 3823
// Hash 5411
// Hash 8975
// Hash 3415
// Hash 7160
// Hash 3865
// Hash 7596
// Hash 9210
// Hash 3178
// Hash 1828
// Hash 4672
// Hash 4320
// Hash 3847
// Hash 9803
// Hash 8404
// Hash 3470
// Hash 7996
// Hash 7276
// Hash 1477
// Hash 4443
// Hash 4635
// Hash 5316
// Hash 9841
// Hash 2849
// Hash 8398
// Hash 2332
// Hash 7618
// Hash 5209
// Hash 7974
// Hash 5894
// Hash 5607
// Hash 3994
// Hash 8046
// Hash 7196
// Hash 8163
// Hash 4845
// Hash 3420
// Hash 6114
// Hash 3858
// Hash 6524
// Hash 6570
// Hash 9895
// Hash 6817
// Hash 2641
// Hash 5875
// Hash 9630
// Hash 1759
// Hash 4728
// Hash 2831
// Hash 4617
// Hash 2893
// Hash 5127
// Hash 7835
// Hash 2018
// Hash 3520
// Hash 8960
// Hash 5464
// Hash 8275
// Hash 8845
// Hash 8188
// Hash 2477
// Hash 7859
// Hash 9734
// Hash 9562
// Hash 6066
// Hash 9860
// Hash 5433
// Hash 4929
// Hash 6934
// Hash 6912
// Hash 8997
// Hash 8572
// Hash 6840
// Hash 7777
// Hash 9777
// Hash 6808
// Hash 8463
// Hash 7035
// Hash 1796
// Hash 1886
// Hash 2979
// Hash 5074
// Hash 5534