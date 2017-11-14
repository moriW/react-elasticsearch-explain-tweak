import {ElasticSearchResponse} from "../models/ElasticHit";

export default {
    "took": 7,
    "timed_out": false,
    "_shards": {
        "total": 6,
        "successful": 6,
        "skipped": 0,
        "failed": 0
    },
    "hits": {
        "total": 45,
        "max_score": 9.48797,
        "hits": [
            {
                "_shard": "[delimio][4]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "2166",
                "_score": 9.48797,
                "_source": {
                    "id": 2166,
                    "englishName": [
                        "brown sugar"
                    ],
                    "czechName": [
                        "hnědý cukr"
                    ],
                    "childIngredientIds": [
                        2240,
                        14039,
                        3879,
                        10863,
                        11804,
                        8507
                    ],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 9.487969,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 5.600095,
                            "description": "weight(czechName:hnědý in 124) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 5.600095,
                                    "description": "score(doc=124,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 6.037075,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 627,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.92761725,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1499202,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "value": 3.8878744,
                            "description": "weight(czechName:cukr in 124) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.8878744,
                                    "description": "score(doc=124,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.1912484,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 627,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.92761725,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1499202,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][3]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "10863",
                "_score": 7.467829,
                "_source": {
                    "id": 10863,
                    "englishName": [
                        "brown muscovado sugar"
                    ],
                    "czechName": [
                        "hnědý cukr muscovado"
                    ],
                    "childIngredientIds": [
                        10606
                    ],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 7.4678297,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 4.4113812,
                            "description": "weight(czechName:hnědý in 1482) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 4.4113812,
                                    "description": "score(doc=1482,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 6.0096316,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 610,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7340518,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1213114,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "value": 3.0564487,
                            "description": "weight(czechName:cukr in 1482) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.0564487,
                                    "description": "score(doc=1482,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.163805,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 610,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7340518,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1213114,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][0]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "8507",
                "_score": 7.1685205,
                "_source": {
                    "id": 8507,
                    "englishName": [
                        "brown sugar substitute"
                    ],
                    "czechName": [
                        "hnědý cukr náhražka"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 7.1685205,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 4.039183,
                            "description": "weight(czechName:hnědý in 1409) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 4.039183,
                                    "description": "score(doc=1409,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 5.4328485,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 2,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 571,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7434743,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1698773,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "value": 3.1293373,
                            "description": "weight(czechName:cukr in 1409) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.1293373,
                                    "description": "score(doc=1409,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.2090726,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 8,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 571,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7434743,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1698773,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][0]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "3879",
                "_score": 7.1685205,
                "_source": {
                    "id": 3879,
                    "englishName": [
                        "golden brown sugar"
                    ],
                    "czechName": [
                        "zlatý hnědý cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 7.1685205,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 4.039183,
                            "description": "weight(czechName:hnědý in 1417) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 4.039183,
                                    "description": "score(doc=1417,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 5.4328485,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 2,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 571,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7434743,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1698773,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "value": 3.1293373,
                            "description": "weight(czechName:cukr in 1417) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.1293373,
                                    "description": "score(doc=1417,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.2090726,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 8,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 571,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7434743,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1698773,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][1]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "11804",
                "_score": 6.601367,
                "_source": {
                    "id": 11804,
                    "englishName": [
                        "brown muscavado sugar"
                    ],
                    "czechName": [
                        "hnědý cukr muscavado"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 6.601367,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.7373111,
                            "description": "weight(czechName:hnědý in 129) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.7373111,
                                    "description": "score(doc=129,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 5.0911174,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 3,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.73408467,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "value": 2.8640559,
                            "description": "weight(czechName:cukr in 129) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 2.8640559,
                                    "description": "score(doc=129,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 3.9015334,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 11,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.73408467,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][1]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "14039",
                "_score": 6.601367,
                "_source": {
                    "id": 14039,
                    "englishName": [
                        "granulated brown sugar"
                    ],
                    "czechName": [
                        "granulovaný hnědý cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 6.601367,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.7373111,
                            "description": "weight(czechName:hnědý in 130) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.7373111,
                                    "description": "score(doc=130,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 5.0911174,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 3,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.73408467,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "value": 2.8640559,
                            "description": "weight(czechName:cukr in 130) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 2.8640559,
                                    "description": "score(doc=130,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 3.9015334,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 11,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.73408467,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][1]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "2240",
                "_score": 6.601367,
                "_source": {
                    "id": 2240,
                    "englishName": [
                        "dark brown sugar"
                    ],
                    "czechName": [
                        "tmavě hnědý cukr"
                    ],
                    "childIngredientIds": [
                        10606
                    ],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 6.601367,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.7373111,
                            "description": "weight(czechName:hnědý in 131) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.7373111,
                                    "description": "score(doc=131,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 5.0911174,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 3,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.73408467,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "value": 2.8640559,
                            "description": "weight(czechName:cukr in 131) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 2.8640559,
                                    "description": "score(doc=131,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 3.9015334,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 11,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.73408467,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][1]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "2247",
                "_score": 4.978084,
                "_source": {
                    "id": 2247,
                    "englishName": [
                        "sugar"
                    ],
                    "czechName": [
                        "cukr"
                    ],
                    "childIngredientIds": [
                        2166,
                        2244,
                        5143,
                        37522,
                        7003,
                        3279,
                        7131,
                        21397,
                        3937,
                        37471,
                        6086,
                        3829,
                        10600,
                        26419,
                        9372,
                        4723,
                        6088,
                        2512,
                        16641,
                        6529,
                        5471,
                        11023,
                        5181,
                        6693,
                        12196,
                        2739,
                        4207,
                        10040,
                        9407,
                        7334,
                        10269
                    ],
                    "categoryTip": true,
                    "categoryId": 11,
                    "lastChecked": 1499974207272
                },
                "_explanation": {
                    "value": 4.9780836,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 4.9780836,
                            "description": "weight(czechName:cukr in 122) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 4.9780836,
                                    "description": "score(doc=122,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 3.9015334,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 11,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 1.27593,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][4]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "2512",
                "_score": 4.6399755,
                "_source": {
                    "id": 2512,
                    "englishName": [
                        "vanilla sugar"
                    ],
                    "czechName": [
                        "vanilinový cukr",
                        "vanilkový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 4.639975,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 4.639975,
                            "description": "weight(czechName:cukr in 121) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 4.639975,
                                    "description": "score(doc=121,freq=2.0 = termFreq=2.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.1912484,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 627,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 1.1070628,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 2,
                                                    "description": "termFreq=2.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1499202,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][2]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "8308",
                "_score": 4.3363986,
                "_source": {
                    "id": 8308,
                    "englishName": [
                        "brown rice vinegar"
                    ],
                    "czechName": [
                        "hnědý rýžový ocet"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 4.3363986,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 4.3363986,
                            "description": "weight(czechName:hnědý in 150) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 4.3363986,
                                    "description": "score(doc=150,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 6.0354815,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 626,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7184843,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.0431309,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][2]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "3244",
                "_score": 4.0109453,
                "_source": {
                    "id": 3244,
                    "englishName": [
                        "superfine sugar"
                    ],
                    "czechName": [
                        "moučkový cukr"
                    ],
                    "childIngredientIds": [
                        3225
                    ],
                    "categoryTip": false,
                    "categoryId": 15,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 4.0109453,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 4.0109453,
                            "description": "weight(czechName:cukr in 68) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 4.0109453,
                                    "description": "score(doc=68,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.4260435,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 7,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 626,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.90621465,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.0431309,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][2]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "10040",
                "_score": 4.0109453,
                "_source": {
                    "id": 10040,
                    "englishName": [
                        "colored sugar"
                    ],
                    "czechName": [
                        "barevný cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 4.0109453,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 4.0109453,
                            "description": "weight(czechName:cukr in 233) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 4.0109453,
                                    "description": "score(doc=233,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.4260435,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 7,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 626,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.90621465,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.0431309,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][2]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "5143",
                "_score": 4.0109453,
                "_source": {
                    "id": 5143,
                    "englishName": [
                        "demerara sugar"
                    ],
                    "czechName": [
                        "demerara cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 4.0109453,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 4.0109453,
                            "description": "weight(czechName:cukr in 234) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 4.0109453,
                                    "description": "score(doc=234,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.4260435,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 7,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 626,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.90621465,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.0431309,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][0]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "9407",
                "_score": 3.920703,
                "_source": {
                    "id": 9407,
                    "englishName": [
                        "caster sugar"
                    ],
                    "czechName": [
                        "cukr krystal"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.920703,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.920703,
                            "description": "weight(czechName:cukr in 1408) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.920703,
                                    "description": "score(doc=1408,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.2090726,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 8,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 571,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.9314886,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1698773,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][0]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "6529",
                "_score": 3.920703,
                "_source": {
                    "id": 6529,
                    "englishName": [
                        "muscovado sugar"
                    ],
                    "czechName": [
                        "muscovado cukr"
                    ],
                    "childIngredientIds": [
                        10863,
                        10236
                    ],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.920703,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.920703,
                            "description": "weight(czechName:cukr in 1415) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.920703,
                                    "description": "score(doc=1415,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.2090726,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 8,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 571,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.9314886,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1698773,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][0]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "4723",
                "_score": 3.920703,
                "_source": {
                    "id": 4723,
                    "englishName": [
                        "maple sugar"
                    ],
                    "czechName": [
                        "javorový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.920703,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.920703,
                            "description": "weight(czechName:cukr in 1416) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.920703,
                                    "description": "score(doc=1416,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.2090726,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 8,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 571,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.9314886,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1698773,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][0]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "3187",
                "_score": 3.920703,
                "_source": {
                    "id": 3187,
                    "englishName": [
                        "granulated sugar"
                    ],
                    "czechName": [
                        "krystalový cukr"
                    ],
                    "childIngredientIds": [
                        8336
                    ],
                    "categoryTip": false,
                    "categoryId": 15,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.920703,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.920703,
                            "description": "weight(czechName:cukr in 132) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.920703,
                                    "description": "score(doc=132,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.2090726,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 8,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 571,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.9314886,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1698773,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][0]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "7334",
                "_score": 3.920703,
                "_source": {
                    "id": 7334,
                    "englishName": [
                        "icing sugar"
                    ],
                    "czechName": [
                        "moučkový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.920703,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.920703,
                            "description": "weight(czechName:cukr in 53) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.920703,
                                    "description": "score(doc=53,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.2090726,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 8,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 571,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.9314886,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1698773,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][4]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "4207",
                "_score": 3.8878746,
                "_source": {
                    "id": 4207,
                    "englishName": [
                        "cinnamon sugar"
                    ],
                    "czechName": [
                        "skořicový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.8878744,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.8878744,
                            "description": "weight(czechName:cukr in 119) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.8878744,
                                    "description": "score(doc=119,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.1912484,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 627,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.92761725,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1499202,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][4]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "12196",
                "_score": 3.8878746,
                "_source": {
                    "id": 12196,
                    "englishName": [
                        "raw sugar"
                    ],
                    "czechName": [
                        "surový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.8878744,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.8878744,
                            "description": "weight(czechName:cukr in 120) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.8878744,
                                    "description": "score(doc=120,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.1912484,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 627,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.92761725,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1499202,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][4]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "26419",
                "_score": 3.8878746,
                "_source": {
                    "id": 26419,
                    "englishName": [
                        "cane sugar"
                    ],
                    "czechName": [
                        "třtinový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.8878744,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.8878744,
                            "description": "weight(czechName:cukr in 122) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.8878744,
                                    "description": "score(doc=122,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.1912484,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 627,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.92761725,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1499202,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][4]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "8336",
                "_score": 3.8878746,
                "_source": {
                    "id": 8336,
                    "englishName": [
                        "crystal sugar"
                    ],
                    "czechName": [
                        "cukr krystal"
                    ],
                    "childIngredientIds": [
                        3187
                    ],
                    "categoryTip": false,
                    "categoryId": 15,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.8878744,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.8878744,
                            "description": "weight(czechName:cukr in 135) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.8878744,
                                    "description": "score(doc=135,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.1912484,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 627,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.92761725,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1499202,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][4]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "6086",
                "_score": 3.8878746,
                "_source": {
                    "id": 6086,
                    "englishName": [
                        "sugar pumpkin"
                    ],
                    "czechName": [
                        "dýňový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 5,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.8878744,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.8878744,
                            "description": "weight(czechName:cukr in 185) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.8878744,
                                    "description": "score(doc=185,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.1912484,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 627,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.92761725,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1499202,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][3]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "3937",
                "_score": 3.8390226,
                "_source": {
                    "id": 3937,
                    "englishName": [
                        "coarse sugar"
                    ],
                    "czechName": [
                        "hrubý cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.8390226,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.8390226,
                            "description": "weight(czechName:cukr in 1487) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.8390226,
                                    "description": "score(doc=1487,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.163805,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 610,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.9219987,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1213114,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][3]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "2244",
                "_score": 3.8390226,
                "_source": {
                    "id": 2244,
                    "englishName": [
                        "white sugar"
                    ],
                    "czechName": [
                        "bílý cukr"
                    ],
                    "childIngredientIds": [
                        13048,
                        9980,
                        9382
                    ],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.8390226,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.8390226,
                            "description": "weight(czechName:cukr in 1489) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.8390226,
                                    "description": "score(doc=1489,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.163805,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 610,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.9219987,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1213114,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][3]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "3547",
                "_score": 3.8390226,
                "_source": {
                    "id": 3547,
                    "englishName": [
                        "cane sugar"
                    ],
                    "czechName": [
                        "třtinový cukr"
                    ],
                    "childIngredientIds": [
                        3727
                    ],
                    "categoryTip": false,
                    "categoryId": 15,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.8390226,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.8390226,
                            "description": "weight(czechName:cukr in 131) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.8390226,
                                    "description": "score(doc=131,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.163805,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 610,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.9219987,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1213114,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][3]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "3225",
                "_score": 3.8390226,
                "_source": {
                    "id": 3225,
                    "englishName": [
                        "powdered sugar"
                    ],
                    "czechName": [
                        "cukr moučka"
                    ],
                    "childIngredientIds": [
                        3244
                    ],
                    "categoryTip": false,
                    "categoryId": 15,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.8390226,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.8390226,
                            "description": "weight(czechName:cukr in 156) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.8390226,
                                    "description": "score(doc=156,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.163805,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 610,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.9219987,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1213114,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][3]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "21397",
                "_score": 3.8390226,
                "_source": {
                    "id": 21397,
                    "englishName": [
                        "unrefined sugar"
                    ],
                    "czechName": [
                        "nerafinovaný cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.8390226,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.8390226,
                            "description": "weight(czechName:cukr in 46) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.8390226,
                                    "description": "score(doc=46,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.163805,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 610,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.9219987,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1213114,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][1]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "2739",
                "_score": 3.597338,
                "_source": {
                    "id": 2739,
                    "englishName": [
                        "turbinado sugar"
                    ],
                    "czechName": [
                        "turbinado cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.5973377,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.5973377,
                            "description": "weight(czechName:cukr in 109) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.5973377,
                                    "description": "score(doc=109,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 3.9015334,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 11,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.92203176,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][1]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "5181",
                "_score": 3.597338,
                "_source": {
                    "id": 5181,
                    "englishName": [
                        "palm sugar"
                    ],
                    "czechName": [
                        "palmový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.5973377,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.5973377,
                            "description": "weight(czechName:cukr in 110) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.5973377,
                                    "description": "score(doc=110,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 3.9015334,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 11,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.92203176,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][1]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "7003",
                "_score": 3.597338,
                "_source": {
                    "id": 7003,
                    "englishName": [
                        "coconut sugar"
                    ],
                    "czechName": [
                        "kokosový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.5973377,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.5973377,
                            "description": "weight(czechName:cukr in 128) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.5973377,
                                    "description": "score(doc=128,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 3.9015334,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 11,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.92203176,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][1]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "10600",
                "_score": 3.597338,
                "_source": {
                    "id": 10600,
                    "englishName": [
                        "organic sugar"
                    ],
                    "czechName": [
                        "organický cukr"
                    ],
                    "childIngredientIds": [
                        11803
                    ],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.5973377,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.5973377,
                            "description": "weight(czechName:cukr in 209) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.5973377,
                                    "description": "score(doc=209,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 3.9015334,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 11,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.92203176,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.56,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][0]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "9372",
                "_score": 3.527956,
                "_source": {
                    "id": 9372,
                    "englishName": [
                        "golden caster sugar"
                    ],
                    "czechName": [
                        "cukr krupice",
                        "pískového cukru",
                        "pískový cukr"
                    ],
                    "childIngredientIds": [
                        9772,
                        9382
                    ],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.527956,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.527956,
                            "description": "weight(czechName:cukr in 1414) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.527956,
                                    "description": "score(doc=1414,freq=2.0 = termFreq=2.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.2090726,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 8,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 571,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.83817893,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 2,
                                                    "description": "termFreq=2.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1698773,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 7.111111,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][4]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "37471",
                "_score": 3.4947891,
                "_source": {
                    "id": 37471,
                    "englishName": [],
                    "czechName": [
                        "cukr krupice",
                        "krupicového cukru",
                        "krupicový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.4947891,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.4947891,
                            "description": "weight(czechName:cukr in 123) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.4947891,
                                    "description": "score(doc=123,freq=2.0 = termFreq=2.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.1912484,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 627,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.8338301,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 2,
                                                    "description": "termFreq=2.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1499202,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 7.111111,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][2]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "9382",
                "_score": 3.1800427,
                "_source": {
                    "id": 9382,
                    "englishName": [
                        "white caster sugar"
                    ],
                    "czechName": [
                        "bílý cukr krupice"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.1800427,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.1800427,
                            "description": "weight(czechName:cukr in 238) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.1800427,
                                    "description": "score(doc=238,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.4260435,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 7,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 626,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7184843,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.0431309,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][2]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "11803",
                "_score": 3.1800427,
                "_source": {
                    "id": 11803,
                    "englishName": [
                        "organic cane sugar"
                    ],
                    "czechName": [
                        "organický třtinový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.1800427,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.1800427,
                            "description": "weight(czechName:cukr in 239) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.1800427,
                                    "description": "score(doc=239,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.4260435,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 7,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 626,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7184843,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.0431309,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][2]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "9980",
                "_score": 3.1800427,
                "_source": {
                    "id": 9980,
                    "englishName": [
                        "white sanding sugar"
                    ],
                    "czechName": [
                        "bílý pískový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.1800427,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.1800427,
                            "description": "weight(czechName:cukr in 240) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.1800427,
                                    "description": "score(doc=240,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.4260435,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 7,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 626,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7184843,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.0431309,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][2]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "10606",
                "_score": 3.1800427,
                "_source": {
                    "id": 10606,
                    "englishName": [
                        "dark brown muscovado sugar"
                    ],
                    "czechName": [
                        "tmavě hnědá muscovado cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.1800427,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.1800427,
                            "description": "weight(czechName:cukr in 241) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.1800427,
                                    "description": "score(doc=241,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.4260435,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 7,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 626,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7184843,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.0431309,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][4]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "6088",
                "_score": 3.0999517,
                "_source": {
                    "id": 6088,
                    "englishName": [
                        "red decorator sugar"
                    ],
                    "czechName": [
                        "červený dekorační cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.0999515,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.0999515,
                            "description": "weight(czechName:cukr in 182) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.0999515,
                                    "description": "score(doc=182,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.1912484,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 627,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.73962486,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1499202,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][3]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "37522",
                "_score": 3.0564485,
                "_source": {
                    "id": 37522,
                    "englishName": [],
                    "czechName": [
                        "kostkového cukru",
                        "kostkový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.0564487,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.0564487,
                            "description": "weight(czechName:cukr in 1414) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.0564487,
                                    "description": "score(doc=1414,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.163805,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 610,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7340518,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1213114,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][3]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "10269",
                "_score": 3.0564485,
                "_source": {
                    "id": 10269,
                    "englishName": [
                        "golden granulated sugar"
                    ],
                    "czechName": [
                        "zlatý krystalový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.0564487,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.0564487,
                            "description": "weight(czechName:cukr in 1475) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.0564487,
                                    "description": "score(doc=1475,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.163805,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 610,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7340518,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1213114,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][3]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "13048",
                "_score": 3.0564485,
                "_source": {
                    "id": 13048,
                    "englishName": [
                        "white granulated sugar"
                    ],
                    "czechName": [
                        "bílý krystalový cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 3.0564487,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 3.0564487,
                            "description": "weight(czechName:cukr in 1488) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 3.0564487,
                                    "description": "score(doc=1488,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 4.163805,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 9,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 610,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.7340518,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1213114,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][1]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "10236",
                "_score": 2.8640559,
                "_source": {
                    "id": 10236,
                    "englishName": [
                        "dark muscovado sugar"
                    ],
                    "czechName": [
                        "dark muscovado cukr"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 2.8640559,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 2.8640559,
                            "description": "weight(czechName:cukr in 112) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 2.8640559,
                                    "description": "score(doc=112,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 3.9015334,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 11,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.73408467,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][1]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "9772",
                "_score": 2.8640559,
                "_source": {
                    "id": 9772,
                    "englishName": [
                        "green sanding sugar"
                    ],
                    "czechName": [
                        "zelený cukr krupice"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 2.8640559,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 2.8640559,
                            "description": "weight(czechName:cukr in 125) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 2.8640559,
                                    "description": "score(doc=125,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 3.9015334,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 11,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.73408467,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_shard": "[delimio][1]",
                "_node": "yfRfo1hwQaiQUcOY3ly27A",
                "_index": "delimio",
                "_type": "ingredient",
                "_id": "4205",
                "_score": 2.8640559,
                "_source": {
                    "id": 4205,
                    "englishName": [
                        "sugar cookie dough"
                    ],
                    "czechName": [
                        "cukr cookie těsto"
                    ],
                    "childIngredientIds": [],
                    "categoryTip": false,
                    "categoryId": 11,
                    "lastChecked": null
                },
                "_explanation": {
                    "value": 2.8640559,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 2.8640559,
                            "description": "weight(czechName:cukr in 8) [PerFieldSimilarity], result of:",
                            "details": [
                                {
                                    "value": 2.8640559,
                                    "description": "score(doc=8,freq=1.0 = termFreq=1.0\n), product of:",
                                    "details": [
                                        {
                                            "value": 3.9015334,
                                            "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                            "details": [
                                                {
                                                    "value": 11,
                                                    "description": "docFreq",
                                                    "details": []
                                                },
                                                {
                                                    "value": 568,
                                                    "description": "docCount",
                                                    "details": []
                                                }
                                            ]
                                        },
                                        {
                                            "value": 0.73408467,
                                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                            "details": [
                                                {
                                                    "value": 1,
                                                    "description": "termFreq=1.0",
                                                    "details": []
                                                },
                                                {
                                                    "value": 1.2,
                                                    "description": "parameter k1",
                                                    "details": []
                                                },
                                                {
                                                    "value": 0.75,
                                                    "description": "parameter b",
                                                    "details": []
                                                },
                                                {
                                                    "value": 2.1214788,
                                                    "description": "avgFieldLength",
                                                    "details": []
                                                },
                                                {
                                                    "value": 4,
                                                    "description": "fieldLength",
                                                    "details": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    }
} as ElasticSearchResponse