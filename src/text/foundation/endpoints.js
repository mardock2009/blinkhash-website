import { flatten } from '../../common/utils';
import * as Responses from './responses';

const apiRequests = `
This documentation details the endpoints associated with the main API initialized alongside
the Foundation server. It provides a way to access all publicly available information for
miners as well as insurance that the pool itself is provably "fair". Each response will be
cached with a max-age of 300 seconds. Rate-limiting by users' IP is also active, and requests
are limited to 100 per 15 minutes.
`;

const errorCodes = `
Unless otherwise stated, errors to bad requests will respond with HTTP 4xx or status codes.
The body will also contain a message parameter indicating the cause. Your language's http
library should be configured to provide message bodies for non-2xx requests so that you can
read the message field from the body. Some common error codes include the following:

~~~txt
400 - Bad Request -- Invalid request format
405 - Method Not Allowed -- Unknown method requested
500 - Server Error -- API server issue on request
~~~
`;

const responseData = `
Each method and endpoint requested will return a similar response structure in JSON format.
An example of a standard request and response framework using a Litecoin pool is shown below:

~~~bash
curl http://localhost:3001/api/v1/Litecoin/[endpoint]?method=[method?]
~~~

~~~json
${Responses.exampleResponse}
~~~
`;

const blocksConfirmed = `
Returns an array of all blocks mined by the pool that have been successfully accepted
and confirmed by the coin's network. The amount of confirmations that it will take for
a block to become accepted is variable, and depends on a hardcoded value in the coin's
source code.

~~~bash
# /blocks?method=confirmed
curl http://localhost:3001/api/v1/Litecoin/blocks?method=confirmed
~~~

~~~json
${Responses.blocksConfirmedResponse}
~~~
`;

const blocksKicked = `
Returns an array of all blocks mined by the pool that were orphaned on creation and kicked
by the coin's network. There are many reasons why a block may be kicked, but the most common
is that a second miner discovered a block at the same time. There is no reward for any
blocks that were orphaned, but Foundation will transfer all shares in the orphaned round to
the upcoming one, ensuring contributions aren't lost.

~~~bash
# /blocks?method=kicked
curl http://localhost:3001/api/v1/Litecoin/blocks?method=kicked
~~~

~~~json
${Responses.blocksKickedResponse}
~~~
`;

const blocksPending = `
Returns an array of all blocks mined by the pool that have been successfully accepted
by the coin's network but are still waiting to be confirmed.

~~~bash
# /blocks?method=pending
curl http://localhost:3001/api/v1/Litecoin/blocks?method=pending
~~~

~~~json
${Responses.blocksPendingResponse}
~~~
`;

const blocksCombined = `
Returns an object that includes properties for all blocks that have been mined by the pool,
no matter if they've been kicked, are pending, or have been confirmed.

~~~bash
# /blocks
curl http://localhost:3001/api/v1/Litecoin/blocks
~~~

~~~json
${Responses.blocksCombinedResponse}
~~~
`;

const minersSpecific = `
Returns an object that includes properties for statistics for a single miner.

~~~bash
# /miners?method=[miner]
curl http://localhost:3001/api/v1/Litecoin/miners?method=QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ
~~~

~~~json
${Responses.minersSpecificResponse}
~~~
`;

const minersCurrent = `
Returns an array of all the miners that are currently mining on the pool.

~~~bash
# /miners
curl http://localhost:3001/api/v1/Litecoin/miners
~~~

~~~json
${Responses.minersCurrentResponse}
~~~
`;

const paymentsBalances = `
Returns an object that includes properties for each miner that has an unpaid balance.
Miners only accumulate unpaid balances when they don't earn enough coins to qualify for
the next payout. When their balance reaches the minimum payment allowed, it'll be sent
to them in the next payment cycle and their unpaid balance will be reset to 0.

~~~bash
# /payments?method=balances
curl http://localhost:3001/api/v1/Litecoin/payments?method=balances
~~~

~~~json
${Responses.paymentsBalancesResponse}
~~~
`;

const paymentsImmature = `
Returns an object that includes properties for each miner that has an immature balance.
Whenever a block is mined, those miners involved in mining it will accumulate an immature
balance proportionate to their contributions. When the block is confirmed, the immature
balance will become a generate balance, and it'll be sent to them in the next payment
cycle so long as it's greater than the minimum payment allowed.

~~~bash
# /payments?method=immature
curl http://localhost:3001/api/v1/Litecoin/payments?method=immature
~~~

~~~json
${Responses.paymentsImmatureResponse}
~~~
`;

const paymentsGenerate = `
Returns an object that includes properties for each miner that has a generate balance.
Generate balances are accumulated when a mined block gets properly confirmed by the coin's
network. If the generate balance is greater than the minimum payment allowed, it'll be
sent out in the next payment cycle.

~~~bash
# /payments?method=generate
curl http://localhost:3001/api/v1/Litecoin/payments?method=generate
~~~

~~~json
${Responses.paymentsGenerateResponse}
~~~
`;

const paymentsPaid = `
Returns an object that includes properties for each miner that has earned a payment
from the server.

~~~bash
# /payments?method=paid
curl http://localhost:3001/api/v1/Litecoin/payments?method=paid
~~~

~~~json
${Responses.paymentsPaidResponse}
~~~
`;

const paymentsRecords = `
Returns an array of payment records that have been sent out to miners. This endpoint allows
for miners to calculate their expected payment based on their shares submitted in each round,
ensuring that the pool is provably "fair".

~~~bash
# /payments?method=records
curl http://localhost:3001/api/v1/Litecoin/payments?method=records
~~~

~~~json
${Responses.paymentsRecordsResponse}
~~~
`;

const paymentsCombined = `
Returns an object that includes properties for all payment objects relating to miners, including
main balances, immature balances, generate balances, and amounts paid.

~~~bash
# /payments
curl http://localhost:3001/api/v1/Litecoin/payments
~~~

~~~json
${Responses.paymentsCombinedResponse}
~~~
`;

const roundsSpecific = `
Returns an object that includes properties indicating the shares and times for a specific
round.

~~~bash
# /rounds?method=[round]
curl http://localhost:3001/api/v1/Litecoin/rounds?method=1974011
~~~

~~~json
${Responses.roundsSpecificResponse}
~~~
`;

const roundsCurrent = `
Returns an object that includes properties indicating the shares and times for the current
round.

~~~bash
# /rounds?method=current
curl http://localhost:3001/api/v1/Litecoin/rounds?method=current
~~~

~~~json
${Responses.roundsCurrentResponse}
~~~
`;

const roundsCombined = `
Returns an object that includes properties indicating the shares and times for all rounds
that are still saved in the database. Once a round has been confirmed and payments have been
issued, it's deleted, so only the most recent rounds are shown.

~~~bash
# /rounds
curl http://localhost:3001/api/v1/Litecoin/rounds
~~~

~~~json
${Responses.roundsCombinedResponse}
~~~
`;

const statisticsSpecific = `
Returns an object that includes properties for general statistics for the pool itself, including
the number of shares/blocks submitted, hashrate, and payments.

~~~bash
# /statistics
curl http://localhost:3001/api/v1/Litecoin/statistics
~~~

~~~json
${Responses.statisticsSpecificResponse}
~~~
`;

const workersSpecific = `
Returns an object that includes properties for statistics for a single worker associated
with a miner.

~~~bash
# /workers?method=[worker]
curl http://localhost:3001/api/v1/Litecoin/workers?method=QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ.worker1
~~~

~~~json
${Responses.workersSpecificResponse}
~~~
`;

const workersCurrent = `
Returns an array of all the workers associated with miners that are currently mining on
the pool.

~~~bash
# /workers
curl http://localhost:3001/api/v1/Litecoin/workers?method=current
~~~

~~~json
${Responses.workersCurrentResponse}
~~~
`;

const poolsCurrent = `
Returns an array of all the pools that are currently active on the server.

~~~bash
# /coins
curl http://localhost:3001/api/v1/coins
~~~

~~~json
${Responses.poolsCurrentResponse}
~~~
`;

const partnersCurrent = `
Returns an array of all the partners that have an active subscription on the server.

~~~bash
# /partners
curl http://localhost:3001/api/v1/partners
~~~

~~~json
${Responses.partnersCurrentResponse}
~~~
`;

// Resources for Module Sections
export const resources = [
  ['https://github.com/blinkhash/foundation-server', 'foundation-server'],
  ['https://github.com/blinkhash/foundation-stratum', 'foundation-stratum'],
  ['https://github.com/blinkhash/foundation-multi-hashing', 'foundation-multi-hashing'],
  ['https://github.com/blinkhash/foundation-documentation', 'foundation-documentation'],
  ['https://github.com/blinkhash/foundation-configurations', 'foundation-configurations'],
  ['https://github.com/blinkhash/foundation-utxo-lib', 'foundation-utxo-lib']]

// Text for Module Sections
export const sections = [
  {
    'API Requests': apiRequests,
    'Error Codes': errorCodes,
    'Response Data': responseData,
  },
  {
    'Block Endpoints': '',
    'Confirmed Blocks': blocksConfirmed,
    'Kicked Blocks': blocksKicked,
    'Pending Blocks': blocksPending,
    'Combined Blocks': blocksCombined,
  },
  {
    'Miner Endpoints': '',
    'Specific Miners': minersSpecific,
    'Current Miners': minersCurrent,
  },
  {
    'Payment Endpoints': '',
    'Unpaid Balances': paymentsBalances,
    'Immature Balances': paymentsImmature,
    'Validated Balances': paymentsGenerate,
    'Amounts Paid': paymentsPaid,
    'Payment Records': paymentsRecords,
    'Combined Payments': paymentsCombined,
  },
  {
    'Round Endpoints': '',
    'Specific Rounds': roundsSpecific,
    'Current Rounds': roundsCurrent,
    'Combined Rounds': roundsCombined,
  },
  {
    'Statistics Endpoints': '',
    'Specific Pool Statistics': statisticsSpecific,
  },
  {
    'Worker Endpoints': '',
    'Specific Workers': workersSpecific,
    'Current Workers': workersCurrent,
  },
  {
    'Miscellaneous Endpoints': '',
    'Current Active Pools': poolsCurrent,
    'Current Partners': partnersCurrent,
  }
];

// Generate Headers from Sections
export const headers = flatten(sections.map((section) => Object.keys(section)));
