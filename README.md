# Blinkhash Documentation

[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
[![Discord](https://img.shields.io/discord/738590795384356904)](https://discord.gg/8xtHZFKJQY)

This repository is a custom-built website intended to serve the documentation for Blinkhash's various services. It was written using the ReactJS/NextJS framework, and is currently hosted at https://docs.blinkhash.com.

#### Need Support?

If you need help with a code-related matter, the first place to look is our [Discord](https://discord.gg/8xtHZFKJQY), where the developers will be available to answer any questions. However, please do not come to me with issues regarding setup. Use Google and the existing documentation for that.

---

### Introduction

Blinkhash was born out of a desire to simplify the process of creating, hosting, and managing a mining pool for the layman. It's no secret that mining pools, and the mining process as a whole, has been becoming more and more centralized, especially for smaller altcoins, where a single pool is most often responsible for the majority of the hashrate on the network. Viable, easy-to-use, open-source software would not only help to solve this issue, but it would provide another way for many less-technical individuals to supplement their income passively while contributing to a project. Anyone should be able to setup and host a mining pool with minimal difficulties.

This documentation will outline each of the individual modules that make up Blinkhash, as well as a breakdown of the API and configuration files, tutorials that explain how to setup and work with Blinkhash, and a repository of FAQs. If you need help with any code-related matters, the first place to look is our Discord, where the developers will be available to answer any questions. However, please try not to come with issues regarding setup. Use Google and the existing documentation for that.

### Why Blinkhash?

As a mining platform, Blinkhash expands upon the framework initially established in Matthew Little's NOMP. It addresses many of the issues brought up by users over the years and implements a number of features left out of the original solution, while simultaneously boasting cleaner source code and an expansive testing suite. Some of the main improvements notwithstanding the rewrite itself and those mentioned above include the following:

- Segwit/Bech32 compliance
- Updated stratum methods according to documentation
- AsicBoost support (needs further testing)
- Reorganized configurations that are more intuitive/cleaner
- Reorganized database schema that is more intuitive/cleaner
- Solo-mining functionality for users
- PPLNT made the default payout scheme (removed PROP)
- 'Partnering' support for usage w/ API to promote advertising
- Reorganized/reworked API to improve statistics management
- API caching to cut down on database workload
- Updated Node version from v0.10.x to v15.x+
- CI/coverage/linting pipelines

With all these changes and improvements upon the initial source, Blinkhash is no doubt one of the most sophisticated open-source solutions currently available, and one of the few that is still being actively developed.

---

### Donations

Maintaining this project has always been driven out of nothing more than a desire to give back to the mining community, however I always appreciate donations, especially if this repository helps you in any way.

- Bitcoin: 3EbrVYLxN5WeQmPpL6owo3A7rJELXecbbc
- Ethereum: 0xd3e3daED621d228244Fa89A3dd8AF07B52E72319
- Litecoin: MFWpARrSADAy3Qj79C4pSasS9F156QipwC
- ZCash: t1NSk8gyiou8TxWRZTVuUkfM5f9riopN58A

---

### License

Released under the GNU General Public License v2. See http://www.gnu.org/licenses/gpl-2.0.html for more information

---
