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
accordingly. This section will help to further examine each module as well as its implemented
features and what it has to offer.
`;

const server = `
Blinkhash's server is the main module that controls the mining pool and related
functionality. It's an extremely efficient, scalable, easy-to-setup piece of software
written entirely in Javascript. As mentioned, it builds upon the framework initially
established in Matthew Little's NOMP. Although some of the accessory features were removed,
such as the UI, coin-switching, MPOS functionality, the CLI, and the usage of exchange
APIs for price tracking, many more remain or have been implemented from scratch. The UI
will also be replaced in a future release with a separate client dedicated solely to
Blinkhash.

### Features:

* Multi-Pool Functionality - The server was built from the ground up to handle multiple coins
simultaneously. It can be used to create a pool for a single coin or instead for multiple
coins at once. The pools themselves use clustering to load balance across multiple CPU
cores.

* Redis Backend - For reward/payment processing, shares are inserted into a Redis database.
The PPLNT reward system is used with Redis Transactions for secure and speedy payouts.
There is zero risk to the pool operator. Shares from rounds that result in orphaned blocks
will be merged with shares in the current round so that each and every share will be
rewarded.

* Automated Payments - Payments are sent out automatically on a timer managed by the
pool operator. Miners can check through the API to determine when the next payments
are going to be sent out and plan accordingly.

* Solo/Shared-Mining Functionality - The server is able to simultaneously manage individuals
mining solo as well as those mining in a pool without any trouble. Workers are separated
according to the port that they are currently mining on, which can be designated as either
'solo' or 'shared'.

* Integrated API - The server's API was redesigned from scratch to be much cleaner and
more useful than it was in the original source. It uses caching to cut down on the database
workload, and is expansive enough to gather all the necessary statistics for both the pool
operator and miners.

### Security:

* No Accounts - Without a system for authentication, non-security-oriented miners
reusing passwords across pools or practicing other poor methods of account management aren't
an issue. Everything is instead handled through the miner's coin address, which is much
more secure and detached from the rest of the server.

* Profit Separation - Pool profits are automatically sent to a completely separate wallet
which can be disconnected from the internet, ensuring safety from hackers and keeping the
pool from being a target due to the lack of funds available for theft. Only coins that
are waiting to be distributed to miners are kept on the pool wallet.

### Transparency:

* Open-Source - The server itself will always be open-source. Feel free to look through the
code and create relevant issues and pull requests whenever necessary.

* API Logging - Everything recorded to the database will in turn be available for miners
to view through the API, including records of payments, blocks, and more. If necessary,
the payment amounts can be re-calculated manually to ensure that the pool operator is being
honest.

### Attack Mitigation:

* Socket Flooding - This is an attack in which garbage data is sent over a socket in order
to consume system resources. The server is both able to detect and thwart socket flooding
whenever it occurs.

* Zombie Miners - This is an attack in which botnet-infected computers connect to your
server in order to use up sockets but don't submit any shares. The server is both able
to detect and thwart zombie miners whenever they connect.

* Low-Difficulty Shares - The server is not vulnerable to any of the known low-difficulty
share exploits that have affected other pools. Rather than just a hardcoded estimate,
the max-difficulty is dynamically generated for each algorithm based on values found in
the source.

* IP Banning - If a miner submits enough invalid shares, their IP will be banned for a
configurable amount of time. This helps to ensure that each miner connected to the pool is
not attempting anything that would put the pool at risk.
`;

const stratum = `
Blinkhash's stratum module is a high performance Stratum server written entirely in
Javascript. One instance of this software can startup and manage multiple coins, each
with their own daemon and ports. This server itself was built to be efficient, transparent,
and easy to setup, while still maintaining greater scalability than many of the other
open-source Stratum servers. This repository itself, however, does nothing by itself.
Unless you're a Javascript developer who would like to learn more about stratum authentication
and raw share data, this module will not be of use to you by itself.

### Features:

* Daemon RPC Interface -

* Stratum TCP Socket Server -

* Job Manager -

* P2P Block Notifier -

* Multiple Daemons -

* PoS/Masternode Support - The server also includes functionality for coins that have
established a hybrid PoW/PoS system or masternodes. When a block is found, it will make
the necessary adjustments to the generation transaction and ensure that all payouts
are handled properly.

* Variable Difficulty - The server is able to automatically determine the most optimal
difficulty for a miner based on their submitted shares. This takes the responsibility
away from the miner, as they might not necessarily know which difficulty they should be
mining at.

* Daemon Syncing - If the server is started while connected to a coin daemon that hasn't
finished syncing to the network, it'll display the progress of the blockchain download
and only initialize properly once completely synced.

### Transparency:

* Open-Source - The server itself will always be open-source. Feel free to look through the
code and create relevant issues and pull requests whenever necessary.

### Attack Mitigation:

* Socket Flooding - This is an attack in which garbage data is sent over a socket in order
to consume system resources. The server is both able to detect and thwart socket flooding
whenever it occurs.

* Zombie Miners - This is an attack in which botnet-infected computers connect to your
server in order to use up sockets but don't submit any shares. The server is both able
to detect and thwart zombie miners whenever they connect.

* IP Banning - If a miner submits enough invalid shares, their IP will be banned for a
configurable amount of time. This helps to ensure that each miner connected to the pool is
not attempting anything that would put the pool at risk.
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
    'Blinkhash-Multi-Hashing': '',
  }
];

// Generate Headers from Sections
export const headers = flatten(sections.map((section) => Object.keys(section)));
