export const exampleResponse = `{
    "pool": "Pool1",
    "coins": ["Litecoin"],
    "logo": "",
    "endpoint": "/[endpoint]/[method?]",
    "time": 1626799094560,
    "response": {
        "code": 200,
        "message": ''
    },
    "data": [...]
}`;

export const blocksConfirmedResponse = `// Block Object
const block = {
    "time": 1623624801946,
    "height": 1924458,
    "hash": "6e6b8dee61bee39b9f02db4111cc7feb00e28fb42d41072fdbfa60b140e73f67",
    "reward": 1250000259,
    "transaction": "f653bf31a56b719f82f774f1ec4b417bdfa04c69c36123cb77dc620922a20e24",
    "difficulty": 8,
    "worker": "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
    "solo": false
};

// Main Response
const response = {
    "primary": [block, ...],
    "auxiliary": [block, ...]
}`;

export const blocksKickedResponse = `// Ex. Block Object
const block = {
    "time": 1623624801946,
    "height": 1924458,
    "hash": "6e6b8dee61bee39b9f02db4111cc7feb00e28fb42d41072fdbfa60b140e73f67",
    "reward": 1250000259,
    "transaction": "f653bf31a56b719f82f774f1ec4b417bdfa04c69c36123cb77dc620922a20e24",
    "difficulty": 8,
    "worker": "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
    "solo": false
};

// Main Response
const response = {
    "primary": [block, ...],
    "auxiliary": [block, ...]
}`;

export const blocksPendingResponse = `// Ex. Block Object
const block = {
    "time": 1623624801946,
    "height": 1924458,
    "hash": "6e6b8dee61bee39b9f02db4111cc7feb00e28fb42d41072fdbfa60b140e73f67",
    "reward": 1250000259,
    "transaction": "f653bf31a56b719f82f774f1ec4b417bdfa04c69c36123cb77dc620922a20e24",
    "difficulty": 8,
    "worker": "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
    "solo": false
};

// Main Response
const response = {
    "primary": [block, ...],
    "auxiliary": [block, ...]
}`;

export const blocksCombinedResponse = `// Ex. Block Object
const block = {
    "time": 1623624801946,
    "height": 1924458,
    "hash": "6e6b8dee61bee39b9f02db4111cc7feb00e28fb42d41072fdbfa60b140e73f67",
    "reward": 1250000259,
    "transaction": "f653bf31a56b719f82f774f1ec4b417bdfa04c69c36123cb77dc620922a20e24",
    "difficulty": 8,
    "worker": "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
    "solo": false
};

// Main Response
const response = {
    "primary": {
        confirmed: [block, ...],
        kicked: [block, ...],
        pending: [block, ...],
    },
    "auxiliary": {
        confirmed: [block, ...],
        kicked: [block, ...],
        pending: [block, ...],
    }
}`;

export const minersSpecificResponse = `// Ex. Current Object
const current = {
    "solo": 0,
    "shared": 56,
    "times": 99.107
};

// Ex. Status Object
const status = {
    "hashrate": 26214.4,
    "workers": 1
},

// Ex. Payments Object
const payments = {
    "balances": 0,
    "generate": 13.53891331,
    "immature": 26.71790558,
    "paid": 104.2918239
},

// Main Response
const response = {
    "primary": {
        "current": current,
        "status": status,
        "payments": payments,
        "workers": [
            "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ.worker1"
        ]
    },
    "auxiliary": {
        "current": current,
        "status": status,
        "payments": payments,
        "workers": [
            "nYYa24C8NwM8PKGvTr2X9jPW6r7yaY5KP6"
        ]
    },
}`;

export const minersCurrentResponse = `// Main Response
const response = {
    primary: [
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ",
        "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
    ],
    auxiliary: [
        "nYYa24C8NwM8PKGvTr2X9jPW6r7yaY5KP6",
        "nW8tMJ4BxDcc1tKZTBh7uNS8639Aj2Hz6s",
    ]
]`;

export const paymentsBalancesResponse = `// Main Response
const response = {
    primary: {
        "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 0,
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 0
    },
    auxiliary: {
        "nYYa24C8NwM8PKGvTr2X9jPW6r7yaY5KP6": 0,
        "nW8tMJ4BxDcc1tKZTBh7uNS8639Aj2Hz6s": 0,
    }
}`;

export const paymentsImmatureResponse = `// Main Response
const response = {
    primary: {
        "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 8.90595713,
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 26.71790558
    },
    auxiliary: {
        "nYYa24C8NwM8PKGvTr2X9jPW6r7yaY5KP6": 1331.6413,
        "nW8tMJ4BxDcc1tKZTBh7uNS8639Aj2Hz6s": 9138.3111,
    }
}`;

export const paymentsGenerateResponse = `// Main Response
const response = {
    primary: {
        "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 139.1393,
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 56.3151
    },
    auxiliary: {
        "nYYa24C8NwM8PKGvTr2X9jPW6r7yaY5KP6": 75511.893,
        "nW8tMJ4BxDcc1tKZTBh7uNS8639Aj2Hz6s": 8913.813,
    }
}`;

export const paymentsPaidResponse = `// Main Response
const response = {
    primary: {
        "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 439.36143932,
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 0,
    },
    auxiliary: {
        "nYYa24C8NwM8PKGvTr2X9jPW6r7yaY5KP6": 1437.8134,
        "nW8tMJ4BxDcc1tKZTBh7uNS8639Aj2Hz6s": 1738.71834,
    }
}`;

export const paymentsRecordsResponse = `// Ex. Round Object
const round = {
    "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": {
        "amounts": 11.8746,
        "shares": 8,
        "times": 1
    }
};

// Ex. Record Object
const record = {
    "time": 1623731733403,
    "paid": 237.49206868,
    "transaction": "effe1fc3ecb538c14837b0e1bb6b28841742f0338d38d15e612801623e6e8766",
    "records": {
        "1924466": round,
        "1924471": round,
    }
},

// Main Response
const response = {
    "primary": [record, ...],
    "auxiliary": [record, ...],
}`;

export const paymentsCombinedResponse = `// Ex. Payment Object
const payment = {
    "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 0,
    "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 0
}

// Main Response
const response = {
    "primary": {
        "balances": payment,
        "generate": payment,
        "immature": payment,
        "paid": payment,
    },
    "auxiliary": {
        "balances": payment,
        "generate": payment,
        "immature": payment,
        "paid": payment,
    }
}`;

export const roundsSpecificResponse = `// Ex. Statistics Object
const statistics = {
    "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 0,
    "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 0
}

// Main Response
const response = {
    "primary": {
        "solo": statistics,
        "shared": statistics,
        "times": statistics,
    },
    "auxiliary": {
        "solo": statistics,
        "shared": statistics,
        "times": statistics,
    }
}`;

export const roundsCurrentResponse = `// Ex. Statistics Object
const statistics = {
    "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 0,
    "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 0
}

// Main Response
const response = {
    "primary": {
        "solo": statistics,
        "shared": statistics,
        "times": statistics,
    },
    "auxiliary": {
        "solo": statistics,
        "shared": statistics,
        "times": statistics,
    }
}`;

export const roundsCombinedResponse = `// Ex. Statistics Object
const statistics = {
    "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a": 0,
    "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ": 0
}

// Main Response
const response = {
    "primary": {
        "1974011": {
            "solo": statistics,
            "shared": statistics,
            "times": statistics,
        },
        "1974012": {
            "solo": statistics,
            "shared": statistics,
            "times": statistics,
        },
    },
    "auxiliary": {
        "3278448": {
            "solo": statistics,
            "shared": statistics,
            "times": statistics,
        },
        "3278451": {
            "solo": statistics,
            "shared": statistics,
            "times": statistics,
        },
    }
}`;

export const statisticsSpecificResponse = `// Ex. Counts Object
const counts = {
    "valid": 5,
    "invalid": 0,
}

// Ex. Status Object
const status = {
    "hashrate": 3189134,
    "miners": 20,
    "workers": 24,
}

// Ex. Payments Object
const payments = {
    "last": 1628221568988,
    "next": 1628228768988,
    "total": 23.7492,
}

// Main Response
const response = {
    "primary": {
        "blocks": counts,
        "shares": counts,
        "status": status,
        "payments": payments,
    },
    "auxiliary": {
        "blocks": counts,
        "shares": counts,
        "status": status,
        "payments": payments,
    },
}`;

export const workersSpecificResponse = `// Ex. Current Object
const current = {
    "solo": 0,
    "shared": 56,
    "times": 99.107
};

// Ex. Status Object
const status = {
    "hashrate": 26214.4,
},

// Main Response
const response = {
    "primary": {
        "current": current,
        "status": status,
    },
    "auxiliary": {
        "current": current,
        "status": status,
    },
}`;

export const workersCurrentResponse = `// Main Response
const response = {
    primary: [
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ.worker1",
        "QWGi9SmwdGnQq5fVarbnQoY4hJdtCp8vtZ.worker2",
        "tltc1qkek8r3uymzqyajzezqgl84u08c0z8shjuwqv3a",
    ],
    auxiliary: [
        "nYYa24C8NwM8PKGvTr2X9jPW6r7yaY5KP6",
        "nW8tMJ4BxDcc1tKZTBh7uNS8639Aj2Hz6s.worker1",
        "nW8tMJ4BxDcc1tKZTBh7uNS8639Aj2Hz6s.worker2",
    ]
]`;

export const poolsCurrentResponse = `// Main Response
const response = [
    "Pool1",
    "Pool2",
    "Litecoin_Dogecoin",
    "Bitcoin"
]`;

export const partnersCurrentResponse = `// Ex. Subscription Object
const subscription = {
    "startDate": "01/01/2000",
    "endDate": "01/01/3000"
}

// Main Response
const response = {
    "name": "Blinkhash",
    "url": "https://blinkhash.com",
    "image": "",
    "tier": 4
    "subscription": subscription
}`;
