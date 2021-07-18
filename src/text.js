import { flatten } from './common/utils';

const introduction = `
Blinkhash was born out of a desire to simplify the process of creating, hosting,
and managing a mining pool for the layman. It's no secret that mining pools, and
the mining process as a whole, has been becoming more and more centralized, especially
for smaller altcoins, where a single pool is most often responsible for the majority
of the hashrate on the network. Viable, easy-to-use, open-source software would not only
help to solve this issue, but it would provide another way for many less-technical
individuals to supplement their income passively while contributing to a project. Anyone
should be able to setup and host a mining pool with minimal difficulties.

This documentation will outline each of the individual modules that make up Blinkhash,
as well as a breakdown of the API and configuration files, tutorials that explain how to
setup and work with Blinkhash, and a repository of FAQs. If you need help with any code-related
matters, the first place to look is our [Discord](https://discord.gg/8xtHZFKJQY), where
the developers will be available to answer any questions. However, please try not to come
with issues regarding setup. Use Google and the existing documentation for that.
`;

const improvements = `
As a mining pool solution, Blinkhash expands upon the framework initially established in
Matthew Little's NOMP. It addresses many of the issues brought up by users over the years
and implements a number of features left out of the original solution, while simultaneously
boasting cleaner source code and an expansive testing suite. Some of the main improvements
notwithstanding the rewrite itself and those mentioned above include the following:

* Segwit/Bech32 compliance
* Updated stratum methods according to [documentation](https://braiins.com/stratum-v1/docs)
* AsicBoost support (needs further testing)
* Reorganized configurations that are more intuitive/cleaner
* Reorganized database schema that is more intuitive/cleaner
* Solo-mining functionality for users
* PPLNT made the default payout scheme (removed PROP)
* 'Partnering' support for usage w/ API to promote advertising
* Reorganized/reworked API to improve statistics management
* API caching to cut down on database workload
* Updated Node version from v0.10.x to v15.x+
* CI/coverage/linting pipelines

With all these changes and improvements upon the initial source, Blinkhash is no doubt
one of the most sophisticated open-source solutions currently available, and one of the
few that is still being actively developed.
`;

const modules = `
The Blinkhash project specifically consists of three different modules:
[blinkhash-server](https://github.com/blinkhash/blinkhash-server),
[blinkhash-stratum](https://github.com/blinkhash/blinkhash-stratum), and
[blinkhash-multi-hashing](https://github.com/blinkhash/blinkhash-multi-hashing). The
server module controls the main functionality relating to the pool itself, including
share processing, the API, database management, worker handling, and sending out payments.
The stratum module is responsible mainly for facilitating communication with the
coin's daemon and handling the distribution of work. The multi-hashing module handles
everything with hashing algorithms, and mainly is used to check shares and blocks submitted.
Overall, though, each module has a role to play in the mining process and fulfills it
accordingly. This section will help to further examine each module and what it has to
offer.
`;

const server = `
Blinkhash's server is the main module that controls the mining pool and related
functionality. It's an extremely efficient, scalable, easy-to-setup piece of software
written entirely in Javascript. As mentioned, it builds upon the framework initially
established in Matthew Little's NOMP. Although some of the accessory features were removed,
such as the UI, coin-switching, MPOS functionality, the CLI, and the usage of exchange
APIs for price tracking, many more remain or have been implemented from scratch. As
Blinkhash's main goal is to promote simplicity, the core features have been prioritized,
including the API, payment processor, and share handler.
`;

const stratum = `
Blinkhash's stratum module is a high performance Stratum server written entirely in
Javascript. One instance of this software can startup and manage multiple coins, each
with their own daemon and ports. This server itself was built to be efficient, transparent,
and easy to setup, while still maintaining greater scalability than many of the other
open-source Stratum servers. This repository itself, however, does nothing by itself.
Unless you're a Javascript developer who would like to learn more about stratum authentication
and raw share data, this module will not be of use to you by itself.
`;

const multiHashing = `
Blinkhash's multi-hashing module is mainly a collection of hashing algorithms that are
currently supported by Blinkhash. Each of these algorithms are leveraged by the stratum
module, which handles the majority of the mining process. To request for an unsupported
algorithm to be added, open an issue or pull request in the Github repository and it will
be addressed. The list of all algorithms that are currently supported is
[here](https://github.com/blinkhash/blinkhash-stratum/blob/master/scripts/main/algorithms.js).
`

const tutorial = `
This section will offer a tutorial on how to setup Blinkhash to mine Bitcoin on your
local machine. This process can be extrapolated to any other coin that uses one of
the supported algorithms and is built similarly to Bitcoin itself. See the 'Configuration'
sections for an in-depth explanation of the configuration files used in this tutorial.
`

const requirements = `
To start off, you'll need to install the following:

* NodeJS v8.0+
* Redis Database v2.6+

In our development environment, Blinkhash is currently being built with NodeJS v12.16
and Redis Database v6.2.1, however each build has been tested with NodeJS v11.x-v15.x.
As such, most versions of NodeJS should be fine to use. If you find yourself experiencing
any errors or difficulties with NodeJS, try and upgrade/downgrade to v12.16 and see
if that solves your issues.

~~~bash
sudo apt-get update
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile
nvm install 12.16.1
sudo apt-get install redis-server
~~~
`

const daemon = `
For the coin daemon, you'll want to refer to the specific build instructions given out
by the developers of the coin. For Bitcoin, you can find the binaries
[here](https://bitcoin.org/en/download). Make sure that you're downloading the most recent
build to ensure the safety and stability of your mining pool.

~~~bash
wget https://bitcoin.org/bin/bitcoin-core-0.21.1/bitcoin-0.21.1-x86_64-linux-gnu.tar.gz
tar -xzvf bitcoin-0.21.1-x86_64-linux-gnu.tar.gz
~~~

Once the daemon has been downloaded, you'll want to setup your configuration file. Refer
to your specific coin's documentation when necessary.

~~~bash
mkdir ~/.bitcoin
nano ~/.bitcoin/bitcoin.conf
~~~

~~~txt
rpcuser=blinkhash
rpcpassword=password
rpcallowip=0.0.0.0/0
port=8333
rpcport=8332
server=1
listen=1
daemon=1
prune=10000
~~~

~~~bash
~/bitcoin-0.21.1/bin/bitcoind --daemon
~~~

You'll also want to generate a wallet address using the daemon at this point, as you'll
need it to indicate which address to send funds to when you're configuring the pool in
a few steps.

~~~bash
~/bitcoin-0.21.1/bin/bitcoind getnewaddress
# Ex: bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq
~~~

At this point, your daemon should start the process of downloading the blockchain. The
amount of time that this will take is variable, and depends on how many blocks have
been added to your coin's blockchain. For Bitcoin, it should take a few hours (~6) to
sync with the network. If you want, you can continue with this tutorial while your
daemon is syncing, but the pool server will not be able to start until it's finished.

For redundancy, its recommended to have at least two daemon instances running in case
one drops out-of-sync or your server crashes, as all instances will be polled for
block/transaction updates and can be used for submitting blocks.
`

const downloading = `
After configuring the daemon, the next step is to go about downloading and installing
dependencies for the Blinkhash server itself. Make sure to use the latest release rather
than cloning the repository itself.

~~~bash
sudo apt-get install build-essential unzip
wget https://github.com/blinkhash/blinkhash-server/archive/refs/tags/v1.0.0.zip
unzip v1.0.0.zip
cd ~/blinkhash-server-1.0.0/ && npm install
~~~
`

const configuringServer = `
To configure the server, first rename the 'configs/main/example.js' file to
'configs/main/config.js' and make any desired changes. See the 'Server Configuration' section
for a breakdown and explanation of each property mentioned in the file. The default
configuration will also most likely work for your environment.

~~~bash
cp ~/blinkhash-server-1.0.0/configs/main/example.js ~/blinkhash-server-1.0.0/configs/main/config.js
nano ~/blinkhash-server-1.0.0/configs/main/config.js
~~~

~~~js
const config = {};

// Logger Configuration
config.logger = {};
config.logger.logColors = true;
config.logger.logLevel = 'debug';

// Clustering Configuration
config.clustering = {};
config.clustering.enabled = true;
config.clustering.forks = 'auto';

// Redis Configuration
config.redis = {};
config.redis.host = '127.0.0.1';
config.redis.port = 6379;
config.redis.password = '';

// Server Configuration
config.server = {};
config.server.host = '127.0.0.1';
config.server.port = 3001;

// Export Configuration
module.exports = config;
~~~
`;

const configuringCoin = `
To configure the coin itself, copy the 'configs/pools/example.js' file to a separate
one and rename it accordingly before making any desired changes. Unlike the server
configuration, the default settings will most likely not work for your coin, and you'll
need to look through the coin's code itself to find the proper values. See the
'Coin Configuration' section for a breakdown and explanation of each property mentioned in
the file, or check [here](https://github.com/blinkhash/blinkhash-configurations) for a list
of configuration files that have been confirmed to work properly.

~~~bash
cp ~/blinkhash-server-1.0.0/configs/pools/example.js ~/blinkhash-server-1.0.0/configs/pools/bitcoin.js
nano ~/blinkhash-server-1.0.0/configs/pools/bitcoin.js
~~~

~~~js
const config = {};

// Main Configuration
config.enabled = true;
config.featured = true;
config.address = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq';
config.debug = false;
config.identifier = 'https://github.com/blinkhash/blinkhash-server';
config.logo = '';

// Coin Configuration
config.coin = {};
config.coin.name = 'Bitcoin';
config.coin.symbol = 'BTC';
config.coin.asicBoost = true;
config.coin.getInfo = false;
config.coin.segwit = true;
config.coin.rewards = '';

// Algorithm Configuration
config.coin.algorithms = {};
config.coin.algorithms.mining = 'sha256d';
config.coin.algorithms.block = 'sha256d';
config.coin.algorithms.coinbase = 'sha256d';

// Mainnet Configuration
config.coin.mainnet = {};
config.coin.mainnet.bech32 = 'bc';
config.coin.mainnet.bip32 = {};
config.coin.mainnet.bip32.public = Buffer.from('0488B21E', 'hex').readUInt32LE(0);
config.coin.mainnet.bip32.private = Buffer.from('0488ADE4', 'hex').readUInt32LE(0);
config.coin.mainnet.peerMagic = 'f9beb4d9';
config.coin.mainnet.pubKeyHash = Buffer.from('00', 'hex').readUInt8(0);
config.coin.mainnet.scriptHash = Buffer.from('05', 'hex').readUInt8(0);
config.coin.mainnet.wif = Buffer.from('80', 'hex').readUInt8(0);
config.coin.mainnet.coin = 'btc';

// Mainnet Configuration
config.coin.testnet = {};
config.coin.testnet.bech32 = 'tb';
config.coin.testnet.bip32 = {};
config.coin.testnet.bip32.public = Buffer.from('043587CF', 'hex').readUInt32LE(0);
config.coin.testnet.bip32.private = Buffer.from('04358394', 'hex').readUInt32LE(0);
config.coin.testnet.peerMagic = '0b110907';
config.coin.testnet.pubKeyHash = Buffer.from('6F', 'hex').readUInt8(0);
config.coin.testnet.scriptHash = Buffer.from('C4', 'hex').readUInt8(0);
config.coin.testnet.wif = Buffer.from('EF', 'hex').readUInt8(0);
config.coin.testnet.coin = 'btc';

// Daemon Configuration
config.daemons = [];

const daemons1 = {};
daemons1.host = '127.0.0.1';
daemons1.port = 8332;
daemons1.user = 'blinkhash';
daemons1.password = 'password';
config.daemons.push(daemons1);

// Payment Configuration
config.payments = {};
config.payments.enabled = true;
config.payments.checkInterval = 20;
config.payments.paymentInterval = 7200;
config.payments.minConfirmations = 10;
config.payments.minPayment = 0.005;
config.payments.transactionFee = 0.0004;
config.payments.daemon = {};
config.payments.daemon.host = '127.0.0.1';
config.payments.daemon.port = 8332;
config.payments.daemon.user = 'blinkhash';
config.payments.daemon.password = 'password';

// Banning Configuration
config.banning = {};
config.banning.time = 600;
config.banning.invalidPercent = 50;
config.banning.checkThreshold = 500;
config.banning.purgeInterval = 300;

// Port Configuration
config.ports = [];

const ports1 = {};
ports1.port = 3002;
ports1.enabled = true;
ports1.type = 'shared';
ports1.difficulty = {};
ports1.difficulty.initial = 524288;
ports1.difficulty.minimum = 262144;
ports1.difficulty.maximum = 1048576;
ports1.difficulty.targetTime = 15;
ports1.difficulty.retargetTime = 90;
ports1.difficulty.variance = 30;
config.ports.push(ports1);

// Recipients Configuration
config.recipients = [];

const recipient1 = {};
recipient1.address = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq';
recipient1.percentage = 0.05;
config.recipients.push(recipient1);

// P2P Configuration
config.p2p = {};
config.p2p.enabled = true;
config.p2p.host = '127.0.0.1';
config.p2p.port = 8333;

// Settings Configuration
config.settings = {};
config.settings.blockRefreshInterval = 1000;
config.settings.connectionTimeout = 600;
config.settings.emitInvalidBlockHashes = false;
config.settings.hashrateWindow = 300;
config.settings.jobRebroadcastTimeout = 60;
config.settings.tcpProxyProtocol = false;

// Export Configuration
module.exports = config;
~~~
`;

const starting = `
Once everything has been configured, you can now go and start your server process. If your
daemon has not yet finished downloading the blockchain, you will see a message stating that
the 'Daemon is still syncing with the network. The server will be started once synced'. It
will also give periodic updates on the current syncing progress.

~~~bash
cd ~/blinkhash-server-1.0.0 && npm run start
~~~
`;

const serverConfig = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet, odio at
varius tempor, mi mauris ultrices tellus, ac laoreet urna enim aliquet tortor. Etiam
lacinia pulvinar interdum. In hac habitasse platea dictumst. Aliquam eget ex a mauris
gravida pretium. Nullam dignissim, felis eget dignissim venenatis, nunc quam pretium
nulla, id efficitur lorem elit in arcu. Ut vel lorem vestibulum, tristique ligula sed,
pulvinar sem. Aliquam erat volutpat. Praesent purus tortor, tincidunt vel iaculis eget,
commodo et tortor.
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

const coinConfig = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet, odio at
varius tempor, mi mauris ultrices tellus, ac laoreet urna enim aliquet tortor. Etiam
lacinia pulvinar interdum. In hac habitasse platea dictumst. Aliquam eget ex a mauris
gravida pretium. Nullam dignissim, felis eget dignissim venenatis, nunc quam pretium
nulla, id efficitur lorem elit in arcu. Ut vel lorem vestibulum, tristique ligula sed,
pulvinar sem. Aliquam erat volutpat. Praesent purus tortor, tincidunt vel iaculis eget,
commodo et tortor.
`;

const mainOptions = `
#### config.enabled
Ensures that the pool will be started when the server process is initialized.

~~~js
// Type: Boolean
config.enabled = true | false;
~~~

---

#### config.featured
Ensures that the pool will be classified as a 'featured' pool for API/client purposes.

~~~js
// Type: Boolean
config.featured = true | false;
~~~

---

#### config.address
The main custodial coin address for the pool. Any blocks that are mined will have their
coins sent to this address while miners are awaiting payments. This address must have been
generated using the daemon configured in the 'Payment Options' section or else an error will
be thrown.

~~~js
// Type: String
config.address = [string];
~~~

---

#### config.debug
Enables 'debug' mode for the purposes of logging more descriptive messages for debugging
purposes.

~~~js
// Type: Boolean
config.debug = true | false;
~~~

---

#### config.identifier
The pool 'identifier' added to blocks as a comment/message whenever needed.

~~~js
// Type: String
config.identifier = 'https://github.com/blinkhash/blinkhash-server' | [string];
~~~

---

#### config.logo
The link to a logo for the pool, for API/client purposes.

~~~js
// Type: String
config.logo = [string];
~~~
`;

const coinOptions = `
#### config.coin.name
The name of the coin that the pool is being used to mine.

~~~js
// Type: String
config.coin.name = [string];
~~~

---

#### config.coin.symbol
The symbol of the coin that the pool is being used to mine.

~~~js
// Type: String
config.coin.symbol = [string];
~~~

---

#### config.coin.asicBoost
Whether the coin being mined supports the AsicBoost protocol. This property still needs
further testing to ensure that it works properly.

~~~js
// Type: Boolean
config.coin.asicBoost = true | false
~~~

---

#### config.coin.getInfo
Whether the coin being mined supports the GetInfo daemon command.

~~~js
// Type: Boolean
config.coin.getInfo = true | false
~~~

---

#### config.coin.segwit
Whether the coin being mined supports the Segwit protocol.

~~~js
// Type: Boolean
config.coin.segwit = true | false
~~~

---

#### config.coin.rewards
The type of secondary rewards implemented by the developers (i.e. treasury, development
payments, etc.). This property is still being implemented, and as such, Blinkhash won't
work properly with any coins that make use of this feature.

~~~js
// Type: String
config.coin.rewards = '' | [string]
~~~
`;

const algorithmOptions = `
#### config.coin.algorithms.mining
The algorithm used to generate the block header when mining to check if the share is a
valid block candidate. This specific property is most often referenced to as the 'actual'
algorithm when discussing a coin.

~~~js
// Type: String
config.coin.algorithms.mining = [string]
~~~

---

#### config.coin.algorithms.block
The algorithm used to convert the derived block header to the block hash

~~~js
// Type: String
config.coin.algorithms.block = [string]
~~~

---

#### config.coin.algorithms.coinbase
The algorithm used to generate the coinbase hash when creating a block candidate

~~~js
// Type: String
config.coin.algorithms.coinbase = [string]
~~~
`;

const mainnetOptions = `
#### config.coin.mainnet.bech32
The Bech32 prefix implemented in the mainnet network for the coin that the pool is
being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L137))

~~~js
// Type: String
config.coin.mainnet.bech32 = '' | [string]
~~~

---

#### config.coin.mainnet.bip32.public
The BIP32 public key prefix implemented in the mainnet network for the coin that the
pool is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L134))

~~~js
// Type: Buffer
config.coin.mainnet.bip32.public = Buffer.from([string], 'hex').readUInt32LE(0);
~~~

---

#### config.coin.mainnet.bip32.private
The BIP32 private key prefix implemented in the mainnet network for the coin that the
pool is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L135))

~~~js
// Type: Buffer
config.coin.mainnet.bip32.private = Buffer.from([string], 'hex').readUInt32LE(0);
~~~

---

#### config.coin.mainnet.peerMagic
The message start string implemented in the mainnet network for the coin that the pool
is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L102-L105))

~~~js
// Type: String
config.coin.mainnet.peerMagic = [string]
~~~

---

#### config.coin.mainnet.pubKeyHash
The public address prefix implemented in the mainnet network for the coin that the pool
is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L131))

~~~js
// Type: Buffer
config.coin.mainnet.pubKeyHash = Buffer.from([string], 'hex').readUInt8(0);
~~~

---

#### config.coin.mainnet.scriptHash
The script address prefix implemented in the mainnet network for the coin that the pool
is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L132))

~~~js
// Type: Buffer
config.coin.mainnet.scriptHash = Buffer.from([string], 'hex').readUInt8(0);
~~~

---

#### config.coin.mainnet.wif
The byte prepended to a mainnet address when converting to WIF for the coin that the
pool is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L133))

~~~js
// Type: String
config.coin.mainnet.wif = '' | Buffer.from([string], 'hex').readUInt8(0);
~~~

---

#### config.coin.mainnet.coin
The lowercase symbol of the coin that the pool is being used to mine.

~~~js
// Type: String
config.coin.mainnet.coin = [string]
~~~
`;

const testnetOptions = `
#### config.coin.testnet.bech32
The Bech32 prefix implemented in the testnet network for the coin that the pool is
being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L244))

~~~js
// Type: String
config.coin.testnet.bech32 = '' | [string]
~~~

---

#### config.coin.testnet.bip32.public
The BIP32 public key prefix implemented in the testnet network for the coin that the
pool is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L241))

~~~js
// Type: Buffer
config.coin.testnet.bip32.public = Buffer.from([string], 'hex').readUInt32LE(0);
~~~

---

#### config.coin.testnet.bip32.private
The BIP32 private key prefix implemented in the testnet network for the coin that the
pool is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L242))

~~~js
// Type: Buffer
config.coin.testnet.bip32.private = Buffer.from([string], 'hex').readUInt32LE(0);
~~~

---

#### config.coin.testnet.peerMagic
The message start string implemented in the testnet network for the coin that the pool
is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L216-L219))

~~~js
// Type: String
config.coin.testnet.peerMagic = [string]
~~~

---

#### config.coin.testnet.pubKeyHash
The public address prefix implemented in the testnet network for the coin that the pool
is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L238))

~~~js
// Type: Buffer
config.coin.testnet.pubKeyHash = Buffer.from([string], 'hex').readUInt8(0);
~~~

---

#### config.coin.testnet.scriptHash
The script address prefix implemented in the testnet network for the coin that the pool
is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L239))

~~~js
// Type: Buffer
config.coin.testnet.scriptHash = Buffer.from([string], 'hex').readUInt8(0);
~~~

---

#### config.coin.testnet.wif
The byte prepended to a testnet address when converting to WIF for the coin that the
pool is being used to mine. (Ex: [Bitcoin Implementation](
https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp#L240))

~~~js
// Type: String
config.coin.testnet.wif = '' | Buffer.from([string], 'hex').readUInt8(0);
~~~

---

#### config.coin.testnet.coin
The lowercase symbol of the coin that the pool is being used to mine.

~~~js
// Type: String
config.coin.testnet.coin = [string]
~~~
`;

const daemonOptions = `
#### config.daemons.host
The host IP for the daemon instance being configured.

~~~js
// Type: String
config.daemons.host = [string]
~~~

---

#### config.daemons.port
The port for the daemon instance being configured.

~~~js
// Type: Number
config.daemons.port = [number]
~~~

---

#### config.daemons.username
The username set for the daemon instance being configured

~~~js
// Type: String
config.daemons.username = [string]
~~~

---

#### config.daemons.password
The password set for the daemon instance being configured

~~~js
// Type: String
config.daemons.password = [string]
~~~
`;

const paymentOptions = `
#### config.payments.enabled
Ensures that the payment processor will be started when the server process is initialized.

~~~js
// Type: Boolean
config.payments.enabled = true | false
~~~

---

#### config.payments.checkInterval
The amount of time in seconds for the server to wait in-between payment check cycles. A
payment check cycle is a process in which the server runs managerial scripts to update current
balances and other statistics. Payments will not be sent out when this process runs.

~~~js
// Type: Number
config.payments.checkInterval = [number]
~~~

---

#### config.payments.paymentInterval
The amount of time in seconds for the server to wait in-between payment management cycles. A
payment management cycle is similar to a payment check cycle in that it's a process where the
server runs managerial scripts, but it also sends out payments to miners and adjusts the
database accordingly.

~~~js
// Type: Number
config.payments.paymentInterval = [number]
~~~

---

#### config.payments.minConfirmations
The minimum number of confirmations for a mined block before it will be considered as
accepted.

~~~js
// Type: Number
config.payments.minConfirmations = [number]
~~~

---

#### config.payments.minPayment
The minimum amount of the coin being mined that will be sent out in payments. Any balances
less than the minimum will be logged and sent out when the miner reaches a permissible
balance.

~~~js
// Type: Float
// Range: 0 -> inf
config.payments.minPayment = [float]
~~~

---

#### config.payments.transactionFee
The transaction fee to use when the pool is sending out payments. A higher fee will
ensure that payments get processed faster.

~~~js
// Type: Float
// Range: 0 -> inf
config.payments.transactionFee = [float]
~~~

---

#### config.payments.daemon.host
The host IP for the daemon instance that the payment processor will use.

~~~js
// Type: String
config.payments.daemon.host = [string]
~~~

---

#### config.payments.daemon.port
The port for the daemon instance that the payment processor will use.

~~~js
// Type: Number
config.payments.daemon.port = [number]
~~~

---

#### config.payments.daemon.username
The username set for the daemon instance that the payment processor will use.

~~~js
// Type: String
config.payments.daemon.username = [string]
~~~

---

#### config.payments.daemon.password
The password set for the daemon instance that the payment processor will use.

~~~js
// Type: String
config.payments.daemon.password = [string]
~~~
`;

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

const recipientOptions = `
#### config.recipients.address
The main coin address for the recipient being added. Whenever a block is found, a percentage
of the coins acquired will be sent to this address.

~~~js
// Type: String
config.recipients.address = [string]
~~~

---

#### config.recipients.percentage
The percentage of the coins found in a block that will be sent to the recipient being added.

~~~js
// Type: Float
// Range: 0 -> 1
config.recipients.percentage = [float]
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

const miscellaneousOptions = `
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

#### config.settings.emitInvalidBlockHashes
Enables recording for block hashes for shares that aren't valid block candidates

~~~js
// Type: Boolean
config.settings.emitInvalidBlockHashes = true | false
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

// Text for Module Sections
export const sections = [
  {
    'Introduction': introduction,
    'Why Blinkhash?': improvements,
  },
  {
    'Modules': modules,
    'Blinkhash-Server': server,
    'Blinkhash-Stratum': stratum,
    'Blinkhash-Multi-Hashing': multiHashing,
  },
  {
    'Getting Started': tutorial,
    'Requirements': requirements,
    'Setting up Daemon': daemon,
    'Downloading & Installing': downloading,
    'Configuring Server': configuringServer,
    'Configuring Coin': configuringCoin,
    'Starting Pool Service': starting,
  },
  {
    'Server Configuration': serverConfig,
    'Logger Options': loggerOptions,
    'Clustering Options': clusteringOptions,
    'Redis Options': redisOptions,
    'Server Options': serverOptions,
  },
  {
    'Coin Configuration': coinConfig,
    'Main Options': mainOptions,
    'Coin Options': coinOptions,
    'Algorithm Options': algorithmOptions,
    'Mainnet Options': mainnetOptions,
    'Testnet Options': testnetOptions,
    'Daemon Options': daemonOptions,
    'Payment Options': paymentOptions,
    'Banning Options': banningOptions,
    'Port Options': portOptions,
    'Recipient Options': recipientOptions,
    'P2P Options': p2pOptions,
    'Miscellaneous Options': miscellaneousOptions,
}
];

// Generate Headers from Sections
export const headers = flatten(sections.map((section) => Object.keys(section)));
