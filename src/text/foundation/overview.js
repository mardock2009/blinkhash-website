import { flatten } from '../../common/utils';

const introduction = `
Foundation was born out of a desire to simplify the process of creating, hosting,
and managing a mining pool for the layman. It's no secret that mining pools, and
the mining process as a whole, has been becoming more and more centralized, especially
for smaller altcoins, where a single pool is most often responsible for the majority
of the hashrate on the network. Viable, easy-to-use, open-source software would not only
help to solve this issue, but it would provide another way for many less-technical
individuals to supplement their income passively while contributing to a project. Anyone
should be able to setup and host a mining pool with minimal difficulties.

This documentation will outline each of the individual modules that make up Foundation,
as well as a breakdown of the API and configuration files, tutorials that explain how to
setup and work with Foundation, and a repository of FAQs. If you need help with any code-related
matters, the first place to look is our [Discord](https://discord.gg/8xtHZFKJQY), where
the developers will be available to answer any questions. However, please try not to come
with issues regarding setup. Use Google and the existing documentation for that.
`;

const improvements = `
As a mining pool solution, Foundation expands upon the framework initially established in
Matthew Little's NOMP. It addresses many of the issues brought up by users over the years
and implements a number of features left out of the original solution, while simultaneously
boasting cleaner source code and an expansive testing suite. Some of the main improvements
notwithstanding the rewrite itself, bug fixes and those mentioned above include the
following:

* Segwit/Bech32 compliance
* Updated stratum methods according to [documentation](https://braiins.com/stratum-v1/docs)
* AsicBoost support (needs further testing)
* Reorganized configurations that are more intuitive/cleaner
* Reorganized database schema that is more intuitive/cleaner
* Solo-mining functionality for users
* Merged-mining functionality for users
* PPLNT made the default payout scheme (removed PROP)
* 'Partnering' support for usage w/ API to promote advertising
* Reorganized/reworked API to improve statistics management
* API caching to cut down on database workload
* Updated Node version from v0.10.x to v15.x+
* CI/coverage/linting pipelines

With all these changes and improvements upon the initial source, Foundation is no doubt
one of the most sophisticated open-source mining pool solutions currently available, and
one of the few that is still being actively developed.
`;

const modules = `
The Foundation project specifically consists of three different modules:
[foundation-server](https://github.com/blinkhash/foundation-server),
[foundation-stratum](https://github.com/blinkhash/foundation-stratum), and
[foundation-multi-hashing](https://github.com/blinkhash/foundation-multi-hashing). The
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
Foundation's server is the main module that controls the mining pool and related
functionality. It's an extremely efficient, scalable, easy-to-setup piece of software
written entirely in Javascript. As mentioned, it builds upon the framework initially
established in Matthew Little's NOMP. Although some of the accessory features were removed,
such as the UI, coin-switching, MPOS functionality, the CLI, and the usage of exchange
APIs for price tracking, many more remain or have been implemented from scratch. As
Foundation's main goal is to promote simplicity, the core features have been prioritized,
including the API, payment processor, and share handler.
`;

const stratum = `
Foundation's stratum module is a high performance Stratum server written entirely in
Javascript. One instance of this software can startup and manage multiple coins, each
with their own daemon and ports. This server itself was built to be efficient, transparent,
and easy to setup, while still maintaining greater scalability than many of the other
open-source Stratum servers. This repository itself, however, does nothing by itself.
Unless you're a Javascript developer who would like to learn more about stratum authentication
and raw share data, this module will not be of use to you by itself.
`;

const multiHashing = `
Foundation's multi-hashing module is mainly a collection of hashing algorithms that are
currently supported by Foundation. Each of these algorithms are leveraged by the stratum
module, which handles the majority of the mining process. To request for an unsupported
algorithm to be added, open an issue or pull request in the Github repository and it will
be addressed. The list of all algorithms that are currently supported is
[here](https://github.com/blinkhash/foundation-stratum/blob/master/scripts/main/algorithms.js).
`;

const tutorial = `
This section will offer a tutorial on how to setup Foundation to mine Bitcoin on your
local machine. This process can be extrapolated to any other coin that uses one of
the supported algorithms and is built similarly to Bitcoin itself. See the 'Configurations'
page for an in-depth explanation of the configuration files used in this tutorial.
`;

const requirements = `
To start off, you'll need to install the following:

* NodeJS v8.0+
* Redis Database v2.6+

In our development environment, Foundation is currently being built with NodeJS v12.16
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
`;

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
`;

const downloading = `
After configuring the daemon, the next step is to go about downloading and installing
dependencies for the Foundation server itself. Make sure to use the latest release rather
than cloning the repository itself.

~~~bash
sudo apt-get install build-essential unzip
wget https://github.com/blinkhash/foundation-server/archive/refs/tags/v1.0.0.zip
unzip v1.0.0.zip
cd ~/foundation-server-1.0.0/ && npm install
~~~
`;

const configuringServer = `
To configure the server, first rename the 'configs/main/example.js' file to
'configs/main/config.js' and make any desired changes. See the 'Configurations' page
for a breakdown and explanation of each property mentioned in the file. The default
configuration will also most likely work for your environment.

~~~bash
cp ~/foundation-server-1.0.0/configs/main/example.js ~/foundation-server-1.0.0/configs/main/config.js
nano ~/foundation-server-1.0.0/configs/main/config.js
~~~

~~~js
// Server Configuration
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
'Configurations' page for a breakdown and explanation of each property mentioned in
the file, or check [here](https://github.com/blinkhash/foundation-configurations) for a list
of configuration files that have been confirmed to work properly.

~~~bash
cp ~/foundation-server-1.0.0/configs/pools/example.js ~/foundation-server-1.0.0/configs/pools/bitcoin.js
nano ~/foundation-server-1.0.0/configs/pools/bitcoin.js
~~~

~~~js
// Coin Configuration
const config = {};
config.enabled = false;

// Statistics Configuration
config.name = 'Pool1';
config.coins = ['Bitcoin'];
config.logo = '';

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

// P2P Configuration
config.p2p = {};
config.p2p.enabled = true;
config.p2p.host = '18.213.13.51';
config.p2p.port = 18333;

// Settings Configuration
config.settings = {};
config.settings.blockRefreshInterval = 1000;
config.settings.connectionTimeout = 600;
config.settings.hashrateWindow = 300;
config.settings.jobRebroadcastTimeout = 60;
config.settings.tcpProxyProtocol = false;

// Primary Configuration
config.primary = {};
config.primary.address = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq';

// Coin Configuration
config.primary.coin = {};
config.primary.coin.name = 'Bitcoin';
config.primary.coin.symbol = 'BTC';
config.primary.coin.asicBoost = true;
config.primary.coin.getInfo = false;
config.primary.coin.segwit = true;
config.primary.coin.rewards = '';

// Algorithm Configuration
config.primary.coin.algorithms = {};
config.primary.coin.algorithms.mining = 'sha256d';
config.primary.coin.algorithms.block = 'sha256d';
config.primary.coin.algorithms.coinbase = 'sha256d';

// Mainnet Configuration
config.primary.coin.mainnet = {};
config.primary.coin.mainnet.bech32 = 'bc';
config.primary.coin.mainnet.bip32 = {};
config.primary.coin.mainnet.bip32.public = Buffer.from('0488B21E', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.bip32.private = Buffer.from('0488ADE4', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.peerMagic = 'f9beb4d9';
config.primary.coin.mainnet.pubKeyHash = Buffer.from('00', 'hex').readUInt8(0);
config.primary.coin.mainnet.scriptHash = Buffer.from('05', 'hex').readUInt8(0);
config.primary.coin.mainnet.wif = Buffer.from('128', 'hex').readUInt8(0);
config.primary.coin.mainnet.coin = 'btc';

// Mainnet Configuration
config.primary.coin.testnet = {};
config.primary.coin.testnet.bech32 = 'tb';
config.primary.coin.testnet.bip32 = {};
config.primary.coin.testnet.bip32.public = Buffer.from('043587CF', 'hex').readUInt32LE(0);
config.primary.coin.testnet.bip32.private = Buffer.from('04358394', 'hex').readUInt32LE(0);
config.primary.coin.testnet.peerMagic = '0b110907';
config.primary.coin.testnet.pubKeyHash = Buffer.from('6F', 'hex').readUInt8(0);
config.primary.coin.testnet.scriptHash = Buffer.from('C4', 'hex').readUInt8(0);
config.primary.coin.testnet.wif = Buffer.from('239', 'hex').readUInt8(0);
config.primary.coin.testnet.coin = 'btc';

// Daemon Configuration
config.primary.daemons = [];

const daemons1 = {};
daemons1.host = '127.0.0.1';
daemons1.port = 8332;
daemons1.user = 'blinkhash';
daemons1.password = 'password';
config.primary.daemons.push(daemons1);

// Payment Configuration
config.primary.payments = {};
config.primary.payments.enabled = true;
config.primary.payments.checkInterval = 20;
config.primary.payments.paymentInterval = 7200;
config.primary.payments.minConfirmations = 10;
config.primary.payments.minPayment = 0.005;
config.primary.payments.transactionFee = 0.0004;
config.primary.payments.daemon = {};
config.primary.payments.daemon.host = '127.0.0.1';
config.primary.payments.daemon.port = 8332;
config.primary.payments.daemon.user = 'blinkhash';
config.primary.payments.daemon.password = 'password';

// Recipients Configuration
config.primary.recipients = [];

const recipient1 = {};
recipient1.address = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq';
recipient1.percentage = 0.05;
config.primary.recipients.push(recipient1);

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
cd ~/foundation-server-1.0.0 && npm run start
~~~
`;

// Resources for Module Sections
export const resources = [
  ['https://github.com/blinkhash/foundation-server', 'foundation-server'],
  ['https://github.com/blinkhash/foundation-stratum', 'foundation-stratum'],
  ['https://github.com/blinkhash/foundation-configurations', 'foundation-configurations'],
  ['https://github.com/blinkhash/foundation-multi-hashing', 'foundation-multi-hashing'],
  ['https://github.com/blinkhash/foundation-utxo-lib', 'foundation-utxo-lib']];

// Text for Module Sections
export const sections = [
  {
    'Introduction': introduction,
    'Why Foundation?': improvements,
  },
  {
    'Modules': modules,
    'Foundation-Server': server,
    'Foundation-Stratum': stratum,
    'Foundation-Multi-Hashing': multiHashing,
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
];

// Generate Headers from Sections
export const headers = flatten(sections.map((section) => Object.keys(section)));
