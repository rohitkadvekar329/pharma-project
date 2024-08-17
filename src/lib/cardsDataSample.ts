export interface Card {
  asset_type: 'KPI' | 'DATAVIZ' | 'LAYOUT' | 'STORYBOARD';
  dataViz?: DataViz;
  description: string;
  id: number;
  is_favorite: boolean;
  kpi?: Kpi;
  layout?: Layout;
  name: string;
  storyboard?: Storyboard;
}

export interface Kpi {
  assetId: number;  // New field to match the asset ID
  name: string;
  affiliate_applicable: boolean;
  businessQuestions: BusinessQuestion[];
  calculation: string;
  id: number;
  metrics: Metric[];
  visuals_available: boolean;
}

export interface BusinessQuestion {
  id: number;
  question: string;
  answer: string; // Placeholder for the answer
}

export interface Metric {
  id: number;
  name: string;
  value: string;
}

export interface DataViz {
  applicable_kpi_favourite: Kpi[];
  asset_info_context: string;
  id: number;
}

export interface Layout {
  amount_of_pages: number;
  id: number;
  kpis_being_used: Kpi[];
}

export interface Storyboard {
  affiliate_applicable: string;
  id: number;
  kpis_being_used: Kpi[];
}

export const cards: Card[] = [
  {
    asset_type: 'KPI',
    description: 'This is the first KPI card description about business metrics.',
    id: 1,
    is_favorite: false,
    name: 'KPI Card 1',
    kpi: {
      assetId: 1,  // Matching asset ID
      name: 'KPI Card 1',
      affiliate_applicable: true,
      businessQuestions: [
        {
          id: 1,
          question: 'What is the revenue growth?',
          answer: ''
        },
        {
          id: 2,
          question: 'How is the customer churn rate?',
          answer: ''
        }
      ],
      calculation: 'Revenue Growth = (Current Revenue - Previous Revenue) / Previous Revenue * 100',
      id: 1,
      metrics: [
        {
          id: 1,
          name: 'Metric-101',
          value: '15%'
        },
        {
          id: 2,
          name: 'Metric-102',
          value: '15%'
        }
      ],
      visuals_available: true
    }
  },
  {
    asset_type: 'KPI',
    description: 'This KPI card provides details on operational efficiency metrics.',
    id: 6,
    is_favorite: false,
    name: 'KPI Card 2',
    kpi: {
      assetId: 6,  // Matching asset ID
      name: 'KPI Card 2',
      affiliate_applicable: false,
      businessQuestions: [
        {
          id: 1,
          question: 'How efficient is our production?',
          answer: ''
        },
        {
          id: 2,
          question: 'What is the average time to market?',
          answer: ''
        }
      ],
      calculation: 'Operational Efficiency = Output / Input',
      id: 6,
      metrics: [
        {
          id: 1,
          name: 'Metric-201',
          value: '85%'
        },
        {
          id: 2,
          name: 'Metric-202',
          value: '85%'
        }
      ],
      visuals_available: true
    }
  },
  {
    asset_type: 'KPI',
    description: 'This KPI card analyzes customer satisfaction levels.',
    id: 7,
    is_favorite: false,
    name: 'KPI Card 3',
    kpi: {
      assetId: 7,  // Matching asset ID
      name: 'KPI Card 3',
      affiliate_applicable: true,
      businessQuestions: [
        {
          id: 1,
          question: 'What is the Net Promoter Score (NPS)?',
          answer: ''
        },
        {
          id: 2,
          question: 'How satisfied are our customers?',
          answer: ''
        }
      ],
      calculation: 'Customer Satisfaction = (Number of Satisfied Customers / Total Customers) * 100',
      id: 7,
      metrics: [
        {
          id: 1,
          name: 'Metric-301',
          value: '78%'
        },
        {
          id: 2,
          name: 'Metric-302',
          value: '78%'
        }
      ],
      visuals_available: true
    }
  },
  {
    asset_type: 'DATAVIZ',
    description: 'This card talks about the visual representation of business data.',
    id: 2,
    is_favorite: false,
    name: 'DataViz Card 1',
    dataViz: {
      applicable_kpi_favourite: [
        {
          assetId: 1,  // Matching asset ID for KPI
          name: 'KPI Card 1',
          affiliate_applicable: true,
          businessQuestions: [
            {
              id: 1,
              question: 'What is the revenue growth?',
              answer: ''
            },
            {
              id: 2,
              question: 'How is the customer churn rate?',
              answer: ''
            }
          ],
          calculation: 'Revenue Growth = (Current Revenue - Previous Revenue) / Previous Revenue * 100',
          id: 1,
          metrics: [
            {
              id: 1,
              name: 'Metric-101',
              value: '15%'
            },
            {
              id: 2,
              name: 'Metric-102',
              value: '15%'
            }
          ],
          visuals_available: true
        }
      ],
      asset_info_context: 'This chart provides insights into the monthly revenue growth across different regions.',
      id: 2
    }
  },
  {
    asset_type: 'DATAVIZ',
    description: 'Visualization for customer churn rate trends over the last year.',
    id: 4,
    is_favorite: false,
    name: 'DataViz Card 2',
    dataViz: {
      applicable_kpi_favourite: [
        {
          assetId: 1,  // Matching asset ID for KPI
          name: 'KPI Card 1',
          affiliate_applicable: true,
          businessQuestions: [
            {
              id: 1,
              question: 'What is the revenue growth?',
              answer: ''
            },
            {
              id: 2,
              question: 'How is the customer churn rate?',
              answer: ''
            }
          ],
          calculation: 'Revenue Growth = (Current Revenue - Previous Revenue) / Previous Revenue * 100',
          id: 1,
          metrics: [
            {
              id: 1,
              name: 'Metric-101',
              value: '15%'
            },
            {
              id: 2,
              name: 'Metric-102',
              value: '15%'
            }
          ],
          visuals_available: true
        },
        {
          assetId: 6,  // Matching asset ID for KPI
          name: 'KPI Card 2',
          affiliate_applicable: false,
          businessQuestions: [
            {
              id: 1,
              question: 'How efficient is our production?',
              answer: ''
            },
            {
              id: 2,
              question: 'What is the average time to market?',
              answer: ''
            }
          ],
          calculation: 'Operational Efficiency = Output / Input',
          id: 6,
          metrics: [
            {
              id: 1,
              name: 'Metric-201',
              value: '85%'
            },
            {
              id: 2,
              name: 'Metric-202',
              value: '85%'
            }
          ],
          visuals_available: true
        }
      ],
      asset_info_context: 'This chart visualizes the customer churn rate by quarter.',
      id: 4
    }
  },
  {
    asset_type: 'DATAVIZ',
    description: 'Visual representation of customer satisfaction scores.',
    id: 8,
    is_favorite: false,
    name: 'DataViz Card 3',
    dataViz: {
      applicable_kpi_favourite: [
        {
          assetId: 7,  // Matching asset ID for KPI
          name: 'KPI Card 3',
          affiliate_applicable: true,
          businessQuestions: [
            {
              id: 1,
              question: 'What is the Net Promoter Score (NPS)?',
              answer: ''
            },
            {
              id: 2,
              question: 'How satisfied are our customers?',
              answer: ''
            }
          ],
          calculation: 'Customer Satisfaction = (Number of Satisfied Customers / Total Customers) * 100',
          id: 7,
          metrics: [
            {
              id: 1,
              name: 'Metric-301',
              value: '78%'
            },
            {
              id: 2,
              name: 'Metric-302',
              value: '78%'
            }
          ],
          visuals_available: true
        }
      ],
      asset_info_context: 'This chart shows customer satisfaction trends over time.',
      id: 8
    }
  },
  {
    asset_type: 'LAYOUT',
    description: 'Detailed layout for business reporting and analysis.',
    id: 3,
    is_favorite: false,
    name: 'Layout Card 1',
    layout: {
      amount_of_pages: 12,
      id: 3,
      kpis_being_used: [
        {
          assetId: 1,  // Matching asset ID for KPI
          name: 'KPI Card 1',
          affiliate_applicable: true,
          businessQuestions: [
            {
              id: 1,
              question: 'What is the revenue growth?',
              answer: ''
            },
            {
              id: 2,
              question: 'How is the customer churn rate?',
              answer: ''
            }
          ],
          calculation: 'Revenue Growth = (Current Revenue - Previous Revenue) / Previous Revenue * 100',
          id: 1,
          metrics: [
            {
              id: 1,
              name: 'Metric-101',
              value: '15%'
            },
            {
              id: 2,
              name: 'Metric-102',
              value: '15%'
            }
          ],
          visuals_available: true
        },
        {
          assetId: 6,  // Matching asset ID for KPI
          name: 'KPI Card 2',
          affiliate_applicable: false,
          businessQuestions: [
            {
              id: 1,
              question: 'How efficient is our production?',
              answer: ''
            },
            {
              id: 2,
              question: 'What is the average time to market?',
              answer: ''
            }
          ],
          calculation: 'Operational Efficiency = Output / Input',
          id: 6,
          metrics: [
            {
              id: 1,
              name: 'Metric-201',
              value: '85%'
            },
            {
              id: 2,
              name: 'Metric-202',
              value: '85%'
            }
          ],
          visuals_available: true
        }
      ]
    }
  },
  {
    asset_type: 'LAYOUT',
    description: 'Comprehensive layout for market trend visualization.',
    id: 5,
    is_favorite: false,
    name: 'Layout Card 2',
    layout: {
      amount_of_pages: 8,
      id: 5,
      kpis_being_used: [
        {
          assetId: 7,  // Matching asset ID for KPI
          name: 'KPI Card 3',
          affiliate_applicable: true,
          businessQuestions: [
            {
              id: 1,
              question: 'What is the Net Promoter Score (NPS)?',
              answer: ''
            },
            {
              id: 2,
              question: 'How satisfied are our customers?',
              answer: ''
            }
          ],
          calculation: 'Customer Satisfaction = (Number of Satisfied Customers / Total Customers) * 100',
          id: 7,
          metrics: [
            {
              id: 1,
              name: 'Metric-301',
              value: '78%'
            },
            {
              id: 2,
              name: 'Metric-302',
              value: '78%'
            }
          ],
          visuals_available: true
        }
      ]
    }
  },
  {
    asset_type: 'LAYOUT',
    description: 'Layout for operational efficiency reports.',
    id: 9,
    is_favorite: false,
    name: 'Layout Card 3',
    layout: {
      amount_of_pages: 10,
      id: 9,
      kpis_being_used: [
        {
          assetId: 6,  // Matching asset ID for KPI
          name: 'KPI Card 2',
          affiliate_applicable: false,
          businessQuestions: [
            {
              id: 1,
              question: 'How efficient is our production?',
              answer: ''
            },
            {
              id: 2,
              question: 'What is the average time to market?',
              answer: ''
            }
          ],
          calculation: 'Operational Efficiency = Output / Input',
          id: 6,
          metrics: [
            {
              id: 1,
              name: 'Metric-201',
              value: '85%'
            },
            {
              id: 2,
              name: 'Metric-202',
              value: '85%'
            }
          ],
          visuals_available: true
        },
        {
          assetId: 7,  // Matching asset ID for KPI
          name: 'KPI Card 3',
          affiliate_applicable: true,
          businessQuestions: [
            {
              id: 1,
              question: 'What is the Net Promoter Score (NPS)?',
              answer: ''
            },
            {
              id: 2,
              question: 'How satisfied are our customers?',
              answer: ''
            }
          ],
          calculation: 'Customer Satisfaction = (Number of Satisfied Customers / Total Customers) * 100',
          id: 7,
          metrics: [
            {
              id: 1,
              name: 'Metric-301',
              value: '78%'
            },
            {
              id: 2,
              name: 'Metric-302',
              value: '78%'
            }
          ],
          visuals_available: true
        }
      ]
    }
  },
  {
    asset_type: 'STORYBOARD',
    description: 'Storyboard for the upcoming marketing campaign on new products.',
    id: 10,
    is_favorite: false,
    name: 'Storyboard Card 1',
    storyboard: {
      affiliate_applicable: 'Affiliate Example 1',
      id: 10,
      kpis_being_used: [
        {
          assetId: 1,  // Matching asset ID for KPI
          name: 'KPI Card 1',
          affiliate_applicable: true,
          businessQuestions: [
            {
              id: 1,
              question: 'What is the revenue growth?',
              answer: ''
            },
            {
              id: 2,
              question: 'How is the customer churn rate?',
              answer: ''
            }
          ],
          calculation: 'Revenue Growth = (Current Revenue - Previous Revenue) / Previous Revenue * 100',
          id: 1,
          metrics: [
            {
              id: 1,
              name: 'Metric-101',
              value: '15%'
            },
            {
              id: 2,
              name: 'Metric-102',
              value: '15%'
            }
          ],
          visuals_available: true
        },
        {
          assetId: 7,  // Matching asset ID for KPI
          name: 'KPI Card 3',
          affiliate_applicable: true,
          businessQuestions: [
            {
              id: 1,
              question: 'What is the Net Promoter Score (NPS)?',
              answer: ''
            },
            {
              id: 2,
              question: 'How satisfied are our customers?',
              answer: ''
            }
          ],
          calculation: 'Customer Satisfaction = (Number of Satisfied Customers / Total Customers) * 100',
          id: 7,
          metrics: [
            {
              id: 1,
              name: 'Metric-301',
              value: '78%'
            },
            {
              id: 2,
              name: 'Metric-302',
              value: '78%'
            }
          ],
          visuals_available: true
        }
      ]
    }
  },
  {
    asset_type: 'STORYBOARD',
    description: 'Storyboard for customer retention strategies.',
    id: 11,
    is_favorite: false,
    name: 'Storyboard Card 2',
    storyboard: {
      affiliate_applicable: 'Affiliate Example 2',
      id: 11,
      kpis_being_used: [
        {
          assetId: 6,  // Matching asset ID for KPI
          name: 'KPI Card 2',
          affiliate_applicable: false,
          businessQuestions: [
            {
              id: 1,
              question: 'How efficient is our production?',
              answer: ''
            },
            {
              id: 2,
              question: 'What is the average time to market?',
              answer: ''
            }
          ],
          calculation: 'Operational Efficiency = Output / Input',
          id: 6,
          metrics: [
            {
              id: 1,
              name: 'Metric-201',
              value: '85%'
            },
            {
              id: 2,
              name: 'Metric-202',
              value: '85%'
            }
          ],
          visuals_available: true
        },
        {
          assetId: 7,  // Matching asset ID for KPI
          name: 'KPI Card 3',
          affiliate_applicable: true,
          businessQuestions: [
            {
              id: 1,
              question: 'What is the Net Promoter Score (NPS)?',
              answer: ''
            },
            {
              id: 2,
              question: 'How satisfied are our customers?',
              answer: ''
            }
          ],
          calculation: 'Customer Satisfaction = (Number of Satisfied Customers / Total Customers) * 100',
          id: 7,
          metrics: [
            {
              id: 1,
              name: 'Metric-301',
              value: '78%'
            },
            {
              id: 2,
              name: 'Metric-302',
              value: '78%'
            }
          ],
          visuals_available: true
        }
      ]
    }
  },
  {
    asset_type: 'STORYBOARD',
    description: 'Storyboard for the product launch event.',
    id: 12,
    is_favorite: false,
    name: 'Storyboard Card 3',
    storyboard: {
      affiliate_applicable: 'Affiliate Example 3',
      id: 12,
      kpis_being_used: [
        {
          assetId: 7,  // Matching asset ID for KPI
          name: 'KPI Card 3',
          affiliate_applicable: true,
          businessQuestions: [
            {
              id: 1,
              question: 'What is the Net Promoter Score (NPS)?',
              answer: ''
            },
            {
              id: 2,
              question: 'How satisfied are our customers?',
              answer: ''
            }
          ],
          calculation: 'Customer Satisfaction = (Number of Satisfied Customers / Total Customers) * 100',
          id: 7,
          metrics: [
            {
              id: 1,
              name: 'Metric-301',
              value: '78%'
            },
            {
              id: 2,
              name: 'Metric-302',
              value: '78%'
            }
          ],
          visuals_available: true
        },
        {
          assetId: 1,  // Matching asset ID for KPI
          name: 'KPI Card 1',
          affiliate_applicable: true,
          businessQuestions: [
            {
              id: 1,
              question: 'What is the revenue growth?',
              answer: ''
            },
            {
              id: 2,
              question: 'How is the customer churn rate?',
              answer: ''
            }
          ],
          calculation: 'Revenue Growth = (Current Revenue - Previous Revenue) / Previous Revenue * 100',
          id: 1,
          metrics: [
            {
              id: 1,
              name: 'Metric-101',
              value: '15%'
            },
            {
              id: 2,
              name: 'Metric-102',
              value: '15%'
            }
          ],
          visuals_available: true
        }
      ]
    }
  }
];
