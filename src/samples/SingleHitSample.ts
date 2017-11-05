import {ExplainScoreComponent} from "../models/parsers/Parser";

export default {
    "value": 16.93343,
    "description": "max of:",
    "details": [
        {
            "value": 16.93343,
            "description": `weight(czechName:"hněd cukr" in 1870) [PerFieldSimilarity], result of:`,
            "details": [
                {
                    "value": 16.93343,
                    "description": "score(doc=1870,freq=1.0 = phraseFreq=1.0\n), product of:",
                    "details": [
                        {
                            "value": 2,
                            "description": "boost",
                            "details": []
                        },
                        {
                            "value": 9.15188,
                            "description": "idf(), sum of:",
                            "details": [
                                {
                                    "value": 4.949548,
                                    "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                    "details": [
                                        {
                                            "value": 4,
                                            "description": "docFreq",
                                            "details": []
                                        },
                                        {
                                            "value": 634,
                                            "description": "docCount",
                                            "details": []
                                        }
                                    ]
                                },
                                {
                                    "value": 4.202333,
                                    "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                    "details": [
                                        {
                                            "value": 9,
                                            "description": "docFreq",
                                            "details": []
                                        },
                                        {
                                            "value": 634,
                                            "description": "docCount",
                                            "details": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "value": 0.92513394,
                            "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                            "details": [
                                {
                                    "value": 1,
                                    "description": "phraseFreq=1.0",
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
                                    "value": 2.137224,
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
} as ExplainScoreComponent;