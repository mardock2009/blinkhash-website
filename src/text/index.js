import { flatten } from '../common/utils';

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
This section will offer a tutorial on how to setup a Blinkhash pool for Bitcoin on your
local machine. This process can be extrapolated to any other coin that uses one of
the supported algorithms and is built similarly to Bitcoin itself. See the 'Configurations'
page for an in-depth explanation of the configuration files used in this tutorial.
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
# Ex. bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq
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
'configs/main/config.js' and make any desired changes. See the 'Configurations' page for
a breakdown and explanation of each property mentioned in the file. The default configuration
will also most likely work for your environment.

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
'Configurations' page for a breakdown and explanation of each property mentioned in the
file, or check [here](https://github.com/blinkhash/blinkhash-configurations) for a list
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
config.coin.hasGetInfo = false;
config.coin.segwit = true;
config.coin.txFee = 0.0004;
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
config.p2p.disableTransactions = true;

// Settings Configuration
config.settings = {};
config.settings.blockRefreshInterval = 1000;
config.settings.connectionTimeout = 600;
config.settings.emitInvalidBlockHashes = false;
config.settings.hashrateWindow = 300;
config.settings.jobRebroadcastTimeout = 60;
config.settings.tcpProxyProtocol = false;
config.settings.validateWorkerUsername = true;

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
generated using the daemon configured in the 'Payments' section or else an error will
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
    'Coin Options': '',
    'Algorithm Options': '',
    'Mainnet Options': '',
    'Testnet Options': '',
    'Daemon Options': '',
    'Payment Options': '',
    'Banning Options': '',
    'Port Options': '',
    'Recipient Options': '',
    'P2P Options': '',
    'Miscellaneous Options': '',
}
];

// Generate Headers from Sections
export const headers = flatten(sections.map((section) => Object.keys(section)));
