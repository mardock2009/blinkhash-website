import { flatten } from '../common/utils';

const apiRequests = `
`;

// Text for Module Sections
export const sections = [
  {
    'API Requests': apiRequests,
    'Error Codes': '',
    'Unknown Requests': '',
    'Response Data': '',
  },
  {
    'Block Endpoints': '',
    'Confirmed Blocks': '',
    'Kicked Blocks': '',
    'Pending Blocks': '',
    'Combined Blocks': '',
  },
  {
    'Miner Endpoints': '',
    'Current Miners': '',
    'Specific Miners': '',
  },
  {
    'Payment Endpoints': '',
    'Worker Balances': '',
    'Immature Payouts': '',
    'Validated Payouts': '',
    'Amounts Paid': '',
    'Payment Records': '',
    'Combined Payments': '',
  },
  {
    'Round Endpoints': '',
    'Current Rounds': '',
    'Specific Rounds': '',
    'Combined Rounds': '',
  },
  {
    'Statistics Endpoints': '',
    'Specific Pool Statistics': '',
  },
  {
    'Worker Endpoints': '',
    'Current Workers': '',
    'Specific Workers': '',
  },
  {
    'Miscellaneous Endpoints': '',
    'Current Partners': '',
    'Current Active Pools': '',
  }
];

// Generate Headers from Sections
export const headers = flatten(sections.map((section) => Object.keys(section)));
