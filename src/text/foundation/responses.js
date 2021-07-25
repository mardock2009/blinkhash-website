export const exampleResponse = `{
    "coin": "Litecoin",
    "endpoint": "/[endpoint]/[method?]",
    "time": 1626799094560,
    "response": {
        "code": 200,
        "message": ''
    },
    "data": [...]
}`;

export const blocksConfirmedResponse = `[
    {
        "time": 1623624801946,
        "height": 1924458,
        "hash": "6e6b8dee61bee39b9f02db4111cc7feb00e28fb42d41072fdbfa60b140e73f67",
        "reward": 1250000259,
        "transaction": "f653bf31a56b719f82f774f1ec4b417bdfa04c69c36123cb77dc620922a20e24",
        "difficulty": 8,
        "worker": "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
        "solo": false
    },
    {
        "time": 1623624845195,
        "height": 1924459,
        "hash": "d55e8c29a4def73354f1457fdda61d91e2ed73258528a8a4257a88bde9f65d1a",
        "reward": 1250000000,
        "transaction": "edebcb8f176b0785c90a94f3725952457bd33bc904a693fdb99af3a7d2d484d4",
        "difficulty": 8,
        "worker": "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
        "solo": false
    },
]`;

export const blocksKickedResponse = `[
    {
        "time": 1623624858194,
        "height": 1924461,
        "hash": "b4ef0a99b7a810605ac894ae801b927a2b6e2e2f96876129555f98eafb287e40",
        "reward": 1250000000,
        "transaction": "0a689e50d3f09c7664fa17683fa96935d6cd2662badff0f04e3c936d39a3ea22",
        "difficulty": 8,
        "worker": "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
        "solo": false
    },
]`;

export const blocksPendingResponse = `[
    {
        "time": 1623901893184,
        "height": 1928855,
        "hash": "f5026aa6116665d3e18a4219d9ae93dab3a016feee7921726258bedee418af8d",
        "reward": 1250006928,
        "transaction": "2c81c6aed147484ca41cd977338826875b5e142f94321b1a508b71f29e515a63",
        "difficulty": 8,
        "worker": "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
        "solo": false
    }
]`;

export const blocksCombinedResponse = `{
    "confirmed": [
        {
            "time": 1623624801946,
            "height": 1924458,
            "hash": "6e6b8dee61bee39b9f02db4111cc7feb00e28fb42d41072fdbfa60b140e73f67",
            "reward": 1250000259,
            "transaction": "f653bf31a56b719f82f774f1ec4b417bdfa04c69c36123cb77dc620922a20e24",
            "difficulty": 8,
            "worker": "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
            "solo": false
        },
        {
            "time": 1623624845195,
            "height": 1924459,
            "hash": "d55e8c29a4def73354f1457fdda61d91e2ed73258528a8a4257a88bde9f65d1a",
            "reward": 1250000000,
            "transaction": "edebcb8f176b0785c90a94f3725952457bd33bc904a693fdb99af3a7d2d484d4",
            "difficulty": 8,
            "worker": "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
            "solo": false
        },
    ],
    "kicked": [
        {
            "time": 1623624858194,
            "height": 1924461,
            "hash": "b4ef0a99b7a810605ac894ae801b927a2b6e2e2f96876129555f98eafb287e40",
            "reward": 1250000000,
            "transaction": "0a689e50d3f09c7664fa17683fa96935d6cd2662badff0f04e3c936d39a3ea22",
            "difficulty": 8,
            "worker": "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
            "solo": false
        },
    ],
    "pending": [
        {
            "time": 1623901893184,
            "height": 1928855,
            "hash": "f5026aa6116665d3e18a4219d9ae93dab3a016feee7921726258bedee418af8d",
            "reward": 1250006928,
            "transaction": "2c81c6aed147484ca41cd977338826875b5e142f94321b1a508b71f29e515a63",
            "difficulty": 8,
            "worker": "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
            "solo": false
        }
    ],
}`;

export const minersCurrentResponse = `[
    "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ",
    "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
]`;

export const minersSpecificResponse = `{
    "current": {
        "solo": 0,
        "shared": 56,
        "times": 99.107
    },
    "status": {
        "hashrate": 26214.4,
        "workers": 1
    },
    "payments": {
        "balances": 0,
        "generate": 13.53891331,
        "immature": 26.71790558,
        "paid": 104.2918239
    },
    "workers": [
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ.worker1"
    ]
}`

export const paymentsBalancesResponse = `{
    "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 0,
    "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 0
}`;

export const paymentsGenerateResponse = `{
    "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 26.1311531,
    "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 13.53891331
}`;

export const paymentsImmatureResponse = `{
    "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 8.90595713,
    "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 26.71790558
}`;

export const paymentsPaidResponse = `{
    "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 439.36143932,
    "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 0
}`;

export const paymentsRecordsResponse = `[
    {
        "time": 1623731733403,
        "paid": 237.49206868,
        "transaction": "effe1fc3ecb538c14837b0e1bb6b28841742f0338d38d15e612801623e6e8766",
        "records": {
            "1924466": {
                "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": {
                    "amounts": 11.8746,
                    "shares": 8,
                    "times": 1
                }
            },
            "1924471": {
                "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": {
                    "times": 12.801,
                    "shares": 16.857142869999997,
                    "amounts": 11.8746
                }
            },
        }
    },
    {
        "time": 1623883249513,
        "paid": 11.8746,
        "transaction": "31f5978a31a2bac842e383170b019e17415c12fd425f155269bafe7b4bb00a21",
        "records": {
            "1928656": {
                "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": {
                    "times": 118.44,
                    "shares": 81.84905658,
                    "amounts": 11.8746
                }
            }
        }
    },
]`;

export const paymentsCombinedResponse = `{
    "balances": {
        "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 0,
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 0
    },
    "generate": {
        "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 26.1311531,
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 13.53891331
    },
    "immature": {
        "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 8.90595713,
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 26.71790558
    },
    "paid": {
        "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 439.36143932,
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 0
    }
}`;

export const roundsCurrentResponse = `{
    "solo": {},
    "shared": {
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 80
    },
    "times": {
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 118.62
    }
}`;

export const roundsSpecificResponse = `{
    "solo": {},
    "shared": {
        "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 24,
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 8
    },
    "times": {
        "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 24.665
    }
}`;

export const roundsCombinedResponse = `{
    "1974011": {
        "solo": {},
        "shared": {
            "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 24,
            "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 8
        },
        "times": {
            "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 24.665
        }
    },
    "1974012": {
        "solo": {},
        "shared": {
            "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 56
        },
        "times": {
            "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 55.046
        }
    },
    "1974013": {
        "solo": {},
        "shared": {
            "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 16
        },
        "times": {
            "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 43.741
        }
    }
}`;

export const statisticsSpecificResponse = `{
    "config": {
        "name": "Litecoin",
        "symbol": "LTC",
        "algorithm": "scrypt",
        "featured": true,
        "logo": "https://fr.wikipedia.org/wiki/Litecoin#/media/Fichier:LTC-400.png"
    },
    "blocks": {
        "valid": 26,
        "invalid": 0
    },
    "shares": {
        "valid": 10,
        "invalid": 0
    },
    "status": {
        "hashrate": 26214.4,
        "miners": 1,
        "workers": 1
    },
    "payments": {
        "last": 1626802786069,
        "next": 1626809986069,
        "total": 439.36143932
    }
}`;

export const workersCurrentResponse = `[
    "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ.worker1"
]`;

export const workersSpecificResponse = `{
    "current": {
        "solo": 0,
        "shared": 56,
        "times": 99.107
    },
    "status": {
        "hashrate": 20971.52
    }
}`;

export const partnersCurrentResponse = `[
    {
        "partner": {
            "name": "Blinkhash",
            "url": "https://blinkhash.com",
            "image": "",
            "tier": 4
        },
        "subscription": {
            "startDate": "01/01/2000",
            "endDate": "01/01/3000"
        }
    }
]`;

export const poolsCurrentResponse = `[
    "Bitcoin",
    "Bitcoin Cash",
    "Dash",
    "Litecoin",
    "Dogecoin",
    "Vertcoin"
]`;
