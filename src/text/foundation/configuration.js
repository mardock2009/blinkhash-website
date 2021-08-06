import { flatten } from '../../common/utils';

const configurations = `
This documentation details the individual configuration files associated with the Foundation
server itself, explaining each property in-depth in an effort to aid mining pool owners with
their setup. The files themselves are broken down into three separate groups: 'main',
'partners', and 'pools', each of which have their own sections below for instructions on how
to work with them effectively.
`;

const fileStructure = `
The main file structure for the configuration files is as follows:

~~~bash
configs
└─ main
└─ partners
└─ pools
~~~

Each folder will have an 'example.js' file inside that gives a default configuration as a
starting point. In most cases, this configuration will not work for the intended use case
and you'll need to modify it. Use the following documentation on specific file properties to
configure your generated files as needed.
`;

const creatingFile = `
To configure the server, rename the 'configs/main/example.js' file to 'configs/main/config.js'.
To add a partner to the server, copy and rename the 'configs/partners/example.js' file to
'configs/partners/[partner].js'. To create and configure a new pool, copy and rename the
'configs/pools/example.js' file to 'configs/pools/[pool].js'.
`;

const loggerOptions = `
#### config.logger.logColors
Enables colors for each message returned by the logger.

~~~js
// Type: Boolean
config.logger.logColors = true | false;
~~~

---

#### config.logger.logLevel
Specifies the level of logger verbosity. Anything more severe than the level specified
will be logged.

~~~js
// Type: String
config.logger.logLevel = 'debug' | 'warning' | 'error';
~~~
`;

const clusteringOptions = `
#### config.clustering.enabled
Whether to enable/disable clustering. Typically, a single process will run on a single
thread. To take advantage of multi-core systems, the user will want to fork multiple
processes in order to handle the load more effectively.

~~~js
// Type: Boolean
config.clustering.enabled = true | false;
~~~

---

#### config.clustering.forks
The number of workers to spawn if clustering is enabled. If 'auto' is specified, it will
be handled dynamically and a worker will be forked for each core in your system.

~~~js
// Type: String | Number
config.clustering.forks = 'auto' | [number];
~~~
`;

const redisOptions = `
#### config.redis.host
The host IP for the redis instance running in the background.

~~~js
// Type: String
config.redis.host = [string];
~~~

---

#### config.redis.port
The port for the redis instance running in the background.

~~~js
// Type: String
config.redis.port = [number];
~~~

---

#### config.redis.password
The password for the redis instance running in the background. If no password is set,
this field can be left as an empty string.

~~~js
// Type: String
config.redis.password = [string];
~~~
`;

const serverOptions = `
#### config.server.host
The host IP for the server instance running in the background

~~~js
// Type: String
config.server.host = [string];
~~~

---

#### config.server.port
The port for the server instance running in the background.

~~~js
// Type: Number
config.server.port = [number];
~~~
`;

const partnerOptions = `
#### config.partner.name
The name of the partner being added.

~~~js
// Type: String
config.partner.name = [string];
~~~

---

#### config.partner.url
The URL redirect of the partner being added. This can be left blank if there's no URL to
redirect to.

~~~js
// Type: String
config.partner.url = [string];
~~~

---

#### config.partner.image
The image that the partner being added wishes to display. This can be left blank if there's
no image to showcase.

~~~js
// Type: String
config.partner.image = [string];
~~~

---

#### config.partner.tier
The tier level of the partner being added.

~~~js
// Type: Number
config.partner.tier = 1 | 2 | 3 | 4;
~~~
`;

const subscriptionOptions = `
#### config.subscription.startDate
The start date for the subscription of the partner being added.

~~~js
// Type: String (MM/DD/YYYY)
config.subscription.startDate = [string];
~~~

---

#### config.subscription.endDate
The end date for the subscription of the partner being added.

~~~js
// Type: String (MM/DD/YYYY)
config.subscription.endDate = [string];
~~~
`;

const mainOptions = `
#### config.enabled
Ensures that the pool will be started when the server process is initialized.

~~~js
// Type: Boolean
config.enabled = true | false;
~~~

#### config.name
The name of the pool. This will be the main identifier to differentiate individual
pools from each other.

~~~js
// Type: String
config.name = [string]
~~~

#### config.coins
The coins that the pool is being used to mine, for API/client purposes.

~~~js
// Type: Object
config.coins = [[string], ...]
~~~

#### config.logo
The link to a logo for the pool, for API/client purposes.

~~~js
// Type: String
config.logo = [string];
~~~
`

const banningOptions = `
#### config.banning.time
The amount of time in seconds before a banned miner can reconnect to the pool.

~~~js
// Type: Number
config.banning.time = [number]
~~~

---

#### config.banning.invalidPercent
The percentage of invalid shares to valid shares submitted by a miner before they're banned
from the pool.

~~~js
// Type: Float
// Range: 0 -> 1
config.banning.invalidPercent = [float]
~~~

---

#### config.banning.checkThreshold
The minimum number of shares for a miner to submit before they can be automatically banned
if their invalid share percentage exceeds the threshold. This minimum helps to reduce the
number of banning false positives.

~~~js
// Type: Number
config.banning.checkThreshold = [number]
~~~

---

#### config.banning.purgeInterval
The amount of time in seconds for the server to wait in-between purging old bans if the ban
has expired.

~~~js
// Type: Number
config.banning.purgeInterval = [number]
~~~
`;

const portOptions = `
#### config.ports.port
The port for the process being configured for miners to connect to.

~~~js
// Type: Number
config.ports.port = [number]
~~~

---

#### config.ports.enabled
Ensures that the process will be started when the server process is initialized.

~~~js
// Type: Boolean
config.ports.enabled = true | false
~~~

---

#### config.ports.type
Specifies the type of mining to be conducted on the port for miners that connect.
Both solo and shared mining is currently supported.

~~~js
// Type: String
config.ports.type = 'shared' | 'solo'
~~~

---

#### config.ports.difficulty.initial
The initial difficulty broadcasted to any miners that connect to the port.

~~~js
// Type: Number | Float
// Range: 0 -> inf
config.ports.difficulty.initial = [number] | [float]
~~~

---

#### config.ports.difficulty.minimum
The minimum difficulty allowed for any miners that connect to the port.

~~~js
// Type: Number | Float
// Range: 0 -> inf
config.ports.difficulty.minimum = [number] | [float]
~~~

---

#### config.ports.difficulty.maximum
The maximum difficulty allowed for any miners that connect to the port.

~~~js
// Type: Number | Float
// Range: 0 -> inf
config.ports.difficulty.maximum = [number] | [float]
~~~

---

#### config.ports.difficulty.targetTime
The desired time in seconds that it will take for a miner to find and submit a share. The
difficulty will be adjusted for each miner individually to optimize share submission and
adhere to this threshold.

~~~js
// Type: Number
config.ports.difficulty.targetTime = [number]
~~~

---

#### config.ports.difficulty.retargetTime
The amount of time in seconds for the server to wait in-between checking to see if a miner
should update their difficulty.

~~~js
// Type: Number
config.ports.difficulty.retargetTime = [number]
~~~

---

#### config.ports.difficulty.variance
The percentage of how much of a 'gap' between the target time and the actual time is permissible.

~~~js
// Type: Float
// Range: 0 -> 1
config.ports.difficulty.variance = [float]
~~~
`;

const p2pOptions = `
#### config.p2p.enabled
Ensures that the pool connects to the daemon as a peer node to receive updates faster.
It may be the most efficient way to load blocks, but doesn't work for all coins and
requires the additional field "peerMagic" to be set properly in the configuration.

~~~js
// Type: Boolean
config.p2p.enabled = true | false
~~~

---

#### config.p2p.host
The host IP for the p2p node running in the background.

~~~js
// Type: String
config.p2p.host = [string]
~~~

---

#### config.p2p.port
The port for the p2p node running in the background.

~~~js
// Type: Number
config.p2p.port = [number]
~~~
`;

const settingsOptions = `
#### config.settings.blockRefreshInterval
The amount of time in milliseconds for the server to wait in-between pinging the daemon to
check for block updates.

~~~js
// Type: Number
config.settings.blockRefreshInterval = [number]
~~~

---

#### config.settings.connectionTimeout
The amount of time in seconds for the server to wait before disconnecting workers that haven't
submitted shares in the timeframe.

~~~js
// Type: Number
config.settings.connectionTimeout = [number]
~~~

---

#### config.settings.hashrateWindow
The amount of time in seconds for the server to look back while collecting old shares to
calculate the worker and pool hashrate.

~~~js
// Type: Number
config.settings.hashrateWindow = [number]
~~~

---

#### config.settings.jobRebroadcastTimeout
The amount of time in seconds for the server to wait before refreshing and rebroadcasting
the job if no new blocks were found.

~~~js
// Type: Number
config.settings.jobRebroadcastTimeout = [number]
~~~

---

#### config.settings.tcpProxyProtocol
Ensures that client IP addresses are able to be detected when using a load balancer with TCP
proxy protocol enabled

~~~js
// Type: Boolean
config.settings.tcpProxyProtocol = true | false
~~~
`;

const primaryOptions = `
#### config.primary.address
The main custodial coin address for the pool. Any blocks that are mined will have their
coins sent to this address while miners are awaiting payments. This address must have been
generated using the daemon configured in the 'Payment Options' section or else an error will
be thrown.

~~~js
// Type: String
config.address = [string];
~~~
`

const coinOptionsPrimary = `
#### config.primary.coin.name
The name of the coin that the pool is being used to mine.

~~~js
// Type: String
config.primary.coin.name = [string];
~~~

---

#### config.primary.coin.symbol
The symbol of the coin that the pool is being used to mine.

~~~js
// Type: String
config.primary.coin.symbol = [string];
~~~

---

#### config.primary.coin.asicboost
Whether the coin being mined supports the AsicBoost protocol. This property still needs
further testing to ensure that it works properly.

~~~js
// Type: Boolean
config.primary.coin.asicboost = true | false
~~~

---

#### config.primary.coin.getinfo
Whether the coin being mined supports the GetInfo daemon command.

~~~js
// Type: Boolean
config.primary.coin.getInfo = true | false
~~~

---

#### config.primary.coin.messages
Whether to insert messages in the coinbase transaction.

~~~js
// Type: Boolean
config.primary.coin.messages = true | false
~~~

---

#### config.primary.coin.segwit
Whether the coin being mined supports the Segwit protocol.

~~~js
// Type: Boolean
config.primary.coin.segwit = true | false
~~~

---

#### config.primary.coin.staking
Whether the coin being mined uses a hybrid PoW/PoS consensus methodology.

~~~js
// Type: Boolean
config.primary.coin.staking = true | false
~~~

---

#### config.primary.coin.rewards
The type of secondary rewards implemented by the developers (i.e. treasury, development
payments, etc.). This property is still being implemented, and as such, Foundation won't
work properly with any coins that make use of this feature.

~~~js
// Type: String
config.primary.coin.rewards = '' | [string]
~~~
`;

const algorithmOptions = `
#### config.primary.coin.algorithms.mining
The algorithm used to generate the block header when mining to check if the share is a
valid block candidate. This specific property is most often referenced to as the 'actual'
algorithm when discussing a coin.

~~~js
// Type: String
config.primary.coin.algorithms.mining = [string]
~~~

---

#### config.primary.coin.algorithms.block
The algorithm used to convert the derived block header to the block hash

~~~js
// Type: String
config.primary.coin.algorithms.block = [string]
~~~

---

#### config.primary.coin.algorithms.coinbase
The algorithm used to generate the coinbase hash when creating a block candidate

~~~js
// Type: String
config.primary.coin.algorithms.coinbase = [string]
~~~
`;

const mainnetOptions = `
#### config.primary.coin.mainnet.bech32
The Bech32 prefix implemented in the mainnet network for the coin that the pool is
being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L137))

~~~js
// Type: String
config.primary.coin.mainnet.bech32 = '' | [string]
~~~

---

#### config.primary.coin.mainnet.bip32.public
The BIP32 public key prefix implemented in the mainnet network for the coin that the
pool is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L134))

~~~js
// Type: Buffer
config.primary.coin.mainnet.bip32.public = Buffer.from([string], 'hex').readUInt32LE(0);
~~~

---

#### config.primary.coin.mainnet.bip32.private
The BIP32 private key prefix implemented in the mainnet network for the coin that the
pool is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L135))

~~~js
// Type: Buffer
config.primary.coin.mainnet.bip32.private = Buffer.from([string], 'hex').readUInt32LE(0);
~~~

---

#### config.primary.coin.mainnet.peerMagic
The message start string implemented in the mainnet network for the coin that the pool
is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L102-L105))

~~~js
// Type: String
config.primary.coin.mainnet.peerMagic = [string]
~~~

---

#### config.primary.coin.mainnet.pubKeyHash
The public address prefix implemented in the mainnet network for the coin that the pool
is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L131))

~~~js
// Type: Buffer
config.primary.coin.mainnet.pubKeyHash = Buffer.from([string], 'hex').readUInt8(0);
~~~

---

#### config.primary.coin.mainnet.scriptHash
The script address prefix implemented in the mainnet network for the coin that the pool
is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L132))

~~~js
// Type: Buffer
config.primary.coin.mainnet.scriptHash = Buffer.from([string], 'hex').readUInt8(0);
~~~

---

#### config.primary.coin.mainnet.wif
The byte prepended to a mainnet address when converting to WIF for the coin that the
pool is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L133))

~~~js
// Type: String
config.primary.coin.mainnet.wif = '' | Buffer.from([string], 'hex').readUInt8(0);
~~~

---

#### config.primary.coin.mainnet.coin
The lowercase symbol of the coin that the pool is being used to mine.

~~~js
// Type: String
config.primary.coin.mainnet.coin = [string]
~~~
`;

const testnetOptions = `
#### config.primary.coin.testnet.bech32
The Bech32 prefix implemented in the testnet network for the coin that the pool is
being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L244))

~~~js
// Type: String
config.primary.coin.testnet.bech32 = '' | [string]
~~~

---

#### config.primary.coin.testnet.bip32.public
The BIP32 public key prefix implemented in the testnet network for the coin that the
pool is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L241))

~~~js
// Type: Buffer
config.primary.coin.testnet.bip32.public = Buffer.from([string], 'hex').readUInt32LE(0);
~~~

---

#### config.primary.coin.testnet.bip32.private
The BIP32 private key prefix implemented in the testnet network for the coin that the
pool is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L242))

~~~js
// Type: Buffer
config.primary.coin.testnet.bip32.private = Buffer.from([string], 'hex').readUInt32LE(0);
~~~

---

#### config.primary.coin.testnet.peerMagic
The message start string implemented in the testnet network for the coin that the pool
is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L216-L219))

~~~js
// Type: String
config.primary.coin.testnet.peerMagic = [string]
~~~

---

#### config.primary.coin.testnet.pubKeyHash
The public address prefix implemented in the testnet network for the coin that the pool
is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L238))

~~~js
// Type: Buffer
config.primary.coin.testnet.pubKeyHash = Buffer.from([string], 'hex').readUInt8(0);
~~~

---

#### config.primary.coin.testnet.scriptHash
The script address prefix implemented in the testnet network for the coin that the pool
is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L239))

~~~js
// Type: Buffer
config.primary.coin.testnet.scriptHash = Buffer.from([string], 'hex').readUInt8(0);
~~~

---

#### config.primary.coin.testnet.wif
The byte prepended to a testnet address when converting to WIF for the coin that the
pool is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L240))

~~~js
// Type: String
config.primary.coin.testnet.wif = '' | Buffer.from([string], 'hex').readUInt8(0);
~~~

---

#### config.primary.coin.testnet.coin
The lowercase symbol of the coin that the pool is being used to mine.

~~~js
// Type: String
config.primary.coin.testnet.coin = [string]
~~~
`;

const daemonOptionsPrimary = `
#### config.primary.daemons.host
The host IP for the daemon instance being configured.

~~~js
// Type: String
config.primary.daemons.host = [string]
~~~

---

#### config.primary.daemons.port
The port for the daemon instance being configured.

~~~js
// Type: Number
config.primary.daemons.port = [number]
~~~

---

#### config.primary.daemons.username
The username set for the daemon instance being configured

~~~js
// Type: String
config.primary.daemons.username = [string]
~~~

---

#### config.primary.daemons.password
The password set for the daemon instance being configured

~~~js
// Type: String
config.primary.daemons.password = [string]
~~~
`;

const paymentOptionsPrimary = `
#### config.primary.payments.enabled
Ensures that the payment processor will be started when the server process is initialized.

~~~js
// Type: Boolean
config.primary.payments.enabled = true | false
~~~

---

#### config.primary.payments.checkInterval
The amount of time in seconds for the server to wait in-between payment check cycles. A
payment check cycle is a process in which the server runs managerial scripts to update current
balances and other statistics. Payments will not be sent out when this process runs.

~~~js
// Type: Number
config.primary.payments.checkInterval = [number]
~~~

---

#### config.primary.payments.paymentInterval
The amount of time in seconds for the server to wait in-between payment management cycles. A
payment management cycle is similar to a payment check cycle in that it's a process where the
server runs managerial scripts, but it also sends out payments to miners and adjusts the
database accordingly.

~~~js
// Type: Number
config.primary.payments.paymentInterval = [number]
~~~

---

#### config.primary.payments.minConfirmations
The minimum number of confirmations for a mined block before it will be considered as
accepted.

~~~js
// Type: Number
config.primary.payments.minConfirmations = [number]
~~~

---

#### config.primary.payments.minPayment
The minimum amount of the coin being mined that will be sent out in payments. Any balances
less than the minimum will be logged and sent out when the miner reaches a permissible
balance.

~~~js
// Type: Float
// Range: 0 -> inf
config.primary.payments.minPayment = [float]
~~~

---

#### config.primary.payments.transactionFee
The transaction fee to use when the pool is sending out payments. A higher fee will
ensure that payments get processed faster.

~~~js
// Type: Float
// Range: 0 -> inf
config.primary.payments.transactionFee = [float]
~~~

---

#### config.primary.payments.daemon.host
The host IP for the daemon instance that the payment processor will use.

~~~js
// Type: String
config.primary.payments.daemon.host = [string]
~~~

---

#### config.primary.payments.daemon.port
The port for the daemon instance that the payment processor will use.

~~~js
// Type: Number
config.primary.payments.daemon.port = [number]
~~~

---

#### config.primary.payments.daemon.username
The username set for the daemon instance that the payment processor will use.

~~~js
// Type: String
config.primary.payments.daemon.username = [string]
~~~

---

#### config.primary.payments.daemon.password
The password set for the daemon instance that the payment processor will use.

~~~js
// Type: String
config.primary.payments.daemon.password = [string]
~~~
`;

const recipientOptions = `
#### config.primary.recipients.address
The main coin address for the recipient being added. Whenever a block is found, a percentage
of the coins acquired will be sent to this address.

~~~js
// Type: String
config.primary.recipients.address = [string]
~~~

---

#### config.primary.recipients.percentage
The percentage of the coins found in a block that will be sent to the recipient being added.

~~~js
// Type: Float
// Range: 0 -> 1
config.primary.recipients.percentage = [float]
~~~
`;

const auxiliaryOptions = `
#### config.auxiliary.enabled
Ensures that merged-mining will be enabled when the pool is started.

~~~js
// Type: String
config.auxiliary.enabled = true | false;
~~~
`

const coinOptionsAuxiliary = `
#### config.auxiliary.coin.name
The name of the coin that the pool is being used to mine.

~~~js
// Type: String
config.auxiliary.coin.name = [string];
~~~

---

#### config.auxiliary.coin.symbol
The symbol of the coin that the pool is being used to mine.

~~~js
// Type: String
config.auxiliary.coin.symbol = [string];
~~~

#### config.auxiliary.coin.header
The header used to build the AuxPoW block, for use with merged-mining. (Ex: [Namecoin
Implementation](https://github.com/namecoin/namecoin-core/blob/master/src/auxpow.h#L33))

~~~js
// Type: String
config.auxiliary.coin.header = [string];
~~~

---
`;

const daemonOptionsAuxiliary = `
#### config.auxiliary.daemons.host
The host IP for the daemon instance being configured.

~~~js
// Type: String
config.auxiliary.daemons.host = [string]
~~~

---

#### config.auxiliary.daemons.port
The port for the daemon instance being configured.

~~~js
// Type: Number
config.auxiliary.daemons.port = [number]
~~~

---

#### config.auxiliary.daemons.username
The username set for the daemon instance being configured

~~~js
// Type: String
config.auxiliary.daemons.username = [string]
~~~

---

#### config.auxiliary.daemons.password
The password set for the daemon instance being configured

~~~js
// Type: String
config.auxiliary.daemons.password = [string]
~~~
`;

const paymentOptionsAuxiliary = `
#### config.auxiliary.payments.enabled
Ensures that the payment processor will be started when the server process is initialized.

~~~js
// Type: Boolean
config.auxiliary.payments.enabled = true | false
~~~

---

#### config.auxiliary.payments.checkInterval
The amount of time in seconds for the server to wait in-between payment check cycles. A
payment check cycle is a process in which the server runs managerial scripts to update current
balances and other statistics. Payments will not be sent out when this process runs.

~~~js
// Type: Number
config.auxiliary.payments.checkInterval = [number]
~~~

---

#### config.auxiliary.payments.paymentInterval
The amount of time in seconds for the server to wait in-between payment management cycles. A
payment management cycle is similar to a payment check cycle in that it's a process where the
server runs managerial scripts, but it also sends out payments to miners and adjusts the
database accordingly.

~~~js
// Type: Number
config.auxiliary.payments.paymentInterval = [number]
~~~

---

#### config.auxiliary.payments.minConfirmations
The minimum number of confirmations for a mined block before it will be considered as
accepted.

~~~js
// Type: Number
config.auxiliary.payments.minConfirmations = [number]
~~~

---

#### config.auxiliary.payments.minPayment
The minimum amount of the coin being mined that will be sent out in payments. Any balances
less than the minimum will be logged and sent out when the miner reaches a permissible
balance.

~~~js
// Type: Float
// Range: 0 -> inf
config.auxiliary.payments.minPayment = [float]
~~~

---

#### config.auxiliary.payments.transactionFee
The transaction fee to use when the pool is sending out payments. A higher fee will
ensure that payments get processed faster.

~~~js
// Type: Float
// Range: 0 -> inf
config.auxiliary.payments.transactionFee = [float]
~~~

---

#### config.auxiliary.payments.daemon.host
The host IP for the daemon instance that the payment processor will use.

~~~js
// Type: String
config.auxiliary.payments.daemon.host = [string]
~~~

---

#### config.auxiliary.payments.daemon.port
The port for the daemon instance that the payment processor will use.

~~~js
// Type: Number
config.auxiliary.payments.daemon.port = [number]
~~~

---

#### config.auxiliary.payments.daemon.username
The username set for the daemon instance that the payment processor will use.

~~~js
// Type: String
config.auxiliary.payments.daemon.username = [string]
~~~

---

#### config.auxiliary.payments.daemon.password
The password set for the daemon instance that the payment processor will use.

~~~js
// Type: String
config.auxiliary.payments.daemon.password = [string]
~~~
`;

// Resources for Module Sections
export const resources = [
  ['https://github.com/blinkhash/foundation-server', 'foundation-server'],
  ['https://github.com/blinkhash/foundation-stratum', 'foundation-stratum'],
  ['https://github.com/blinkhash/foundation-multi-hashing', 'foundation-multi-hashing'],
  ['https://github.com/blinkhash/foundation-configurations', 'foundation-configurations'],
  ['https://github.com/blinkhash/foundation-utxo-lib', 'foundation-utxo-lib']]

// Text for Module Sections
export const sections = [
  {
    'Configurations': configurations,
    'File Structure': fileStructure,
    'Creating a New File': creatingFile,
  },
  {
    'Main Configuration': '',
    'Logger Options': loggerOptions,
    'Clustering Options': clusteringOptions,
    'Redis Options': redisOptions,
    'Server Options': serverOptions,
  },
  {
    'Partner Configuration': '',
    'Partner Options': partnerOptions,
    'Subscription Options': subscriptionOptions
  },
  {
    'Coin Configuration (Misc)': '',
    'Main Options': mainOptions,
    'Banning Options': banningOptions,
    'Port Options': portOptions,
    'P2P Options': p2pOptions,
    'Settings Options': settingsOptions,
  },
  {
    'Coin Configuration (Primary)': '',
    'Primary Options': primaryOptions,
    'Coin Options (Primary)': coinOptionsPrimary,
    'Algorithm Options': algorithmOptions,
    'Mainnet Options': mainnetOptions,
    'Testnet Options': testnetOptions,
    'Daemon Options (Primary)': daemonOptionsPrimary,
    'Payment Options (Primary)': paymentOptionsPrimary,
    'Recipient Options': recipientOptions,
  },
  {
    'Coin Configuration (Auxiliary)': '',
    'Auxiliary Options': auxiliaryOptions,
    'Coin Options (Auxiliary)': coinOptionsAuxiliary,
    'Daemon Options (Auxiliary)': daemonOptionsAuxiliary,
    'Payment Options (Auxiliary)': paymentOptionsAuxiliary,
  }
];

// Generate Headers from Sections
export const headers = flatten(sections.map((section) => Object.keys(section)));
