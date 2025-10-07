export const farmer001 = {
   profile: {
      name: 'Ramesh Kumar',
      location: 'Haridwar, Uttarakhand',
      farmSize: '2.5 acres',
      experience: '6 years',
      contact: '+91-9876543210'
    },
    lifecycle: {
      harvested: 12,
      testing: 4,
      rejected: 2,
      manufactured: 10,
      market: 6
    },
    batches: [
      {
        id: 'ZA182',
        species: 'Ashwagandha',
        weight: 1.12,
        harvestDate: 'Sep 5, 2023',
        zone: 'A (Approved)',
        moisture: '9.2%',
        lab: 'Haridwar Lab #2',
        status: 'Passed'
      }
    ],
    earnings: {
      total: 45200,
      lastMonth: 7800,
      pending: 1200,
       withdrawn: 3000
    },
    herbInfo: [
      {
      species: 'Ashwagandha',
      uses: ['Stress relief', 'Immunity boost'],
      cultivationTips: ['Well-drained soil', 'Partial sunlight'],
      season: 'Monsoon',
      id: 1, lat: 28.6692, lng: 77.4538, date: "2025-08-10"},
      {
        species:"tulsi",
        season:"Summer",
         id: 2, lat: 28.7041, 
         lng: 77.1025,  
         date: "2025-08-22" },
      
    ],
    herbAlerts: [
      { id: 'A1', message: 'High moisture detected in batch ZA182', severity: 'medium' },
      { id: 'A2', message: 'Lab delay in Haridwar Lab #2', severity: 'low' }
    ],
    labStatus: {
      labName: 'Haridwar Lab #2',
      batchesInQueue: 3,
      avgProcessingTime: '2 days',
      lastUpdated: 'Sep 9, 2025'
    },
    rejectedInsights: [
        {
    batchId: 'A1023',
    species: 'Ashwagandha',
    lab: 'Haridwar Lab #3',
    moisture: '9.2%',
    microbialLoad: 'Safe',
    status: 'Passed'
  },
  {
    batchId: 'B2045',
    species: 'Brahmi',
    lab: 'Dehradun Lab #1',
    moisture: '12.5%',
    microbialLoad: 'High',
    status: 'Rejected'
  }
],
    smartAnalytics: {
      topSpecies: ['Ashwagandha', 'Tulsi'],
      avgYield: 1.05,
      rejectionRate: '8%',
      marketTrend: 'Rising'
    },
    marketPrices: [
      { species: 'Ashwagandha', pricePerKg: 400 },
      { species: 'Tulsi', pricePerKg: 320 }
    ],
    connectivityStatus: {
      online: true,
      lastSync: 'Sep 9, 2025, 5:30 PM',
      offlineModeEnabled: false
    },
    accessibilityTools: {
      fontSize: 'medium',
      contrast: 'high',
      language: 'Hindi',
      screenReader: true
    },
    zones: [
      { name: 'Zone A', status: 'Approved', batches: 5 },
      { name: 'Zone B', status: 'Pending', batches: 2 }
    ],
    quickCapture: {
      recentScans: ['ZA182', 'RB309'],
      lastScanTime: 'Sep 9, 2025, 4:45 PM',
      scanSuccessRate: '98%'
    },
   batchTracker: {
      activeBatch: 'ZA182',
      progress: 'Manufactured',
      timeline: [
        { stage: 'Harvested', date: 'Sep 5' },
        { stage: 'Testing', date: 'Sep 6' },
        { stage: 'Manufactured', date: 'Sep 8' }
      ]
    },
    batchJourney: {
      batchId: 'ZA182',
      journey: [
        { stage: 'Harvested', location: 'Farm #12', date: 'Sep 5' },
        { stage: 'Lab Testing', location: 'Haridwar Lab #2', date: 'Sep 6' },
        { stage: 'Manufactured', location: 'Unit #3', date: 'Sep 8' },
        { stage: 'Market', location: 'AyurMart Delhi', date: 'Sep 9' }
      ]
    }
  }


