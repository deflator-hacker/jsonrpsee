window.BENCHMARK_DATA = {
  "lastUpdate": 1634324699447,
  "repoUrl": "https://github.com/paritytech/jsonrpsee",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "paritytech",
            "username": "paritytech"
          },
          "committer": {
            "name": "paritytech",
            "username": "paritytech"
          },
          "id": "a2e368c53a2870cc6f47b92f9bba210a5be45098",
          "message": "testme",
          "timestamp": "2021-10-15T13:13:38Z",
          "url": "https://github.com/paritytech/jsonrpsee/pull/529/commits/a2e368c53a2870cc6f47b92f9bba210a5be45098"
        },
        "date": 1634324698818,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 167,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 192,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 138850,
            "range": "± 21915",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_round_trip/0",
            "value": 96,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_round_trip/1",
            "value": 137307,
            "range": "± 15971",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_round_trip/2",
            "value": 117384,
            "range": "± 12380",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_round_trip/4",
            "value": 198727,
            "range": "± 32929",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_round_trip/8",
            "value": 306273,
            "range": "± 29504",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1902974,
            "range": "± 78783",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3701859,
            "range": "± 246627",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7347544,
            "range": "± 384680",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14599875,
            "range": "± 714777",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 28364222,
            "range": "± 1511791",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 56814500,
            "range": "± 2237190",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 82884,
            "range": "± 8068",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_round_trip/0",
            "value": 103,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_round_trip/1",
            "value": 96431,
            "range": "± 10866",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_round_trip/2",
            "value": 113288,
            "range": "± 12141",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_round_trip/4",
            "value": 124194,
            "range": "± 24320",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_round_trip/8",
            "value": 179175,
            "range": "± 12178",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 131847,
            "range": "± 13034",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 198523,
            "range": "± 17154",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 346807,
            "range": "± 60456",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 723434,
            "range": "± 117462",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1425970,
            "range": "± 167810",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2847370,
            "range": "± 298220",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 130756,
            "range": "± 14112",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_round_trip/0",
            "value": 99,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_round_trip/1",
            "value": 135844,
            "range": "± 18384",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_round_trip/2",
            "value": 119103,
            "range": "± 14564",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_round_trip/4",
            "value": 179736,
            "range": "± 13167",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_round_trip/8",
            "value": 306955,
            "range": "± 19209",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1942132,
            "range": "± 123891",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3730460,
            "range": "± 266430",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7271624,
            "range": "± 301847",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14667838,
            "range": "± 731740",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 29943023,
            "range": "± 1119114",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 58353757,
            "range": "± 2503638",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 87562,
            "range": "± 9004",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_round_trip/0",
            "value": 101,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_round_trip/1",
            "value": 94334,
            "range": "± 9749",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_round_trip/2",
            "value": 103483,
            "range": "± 8089",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_round_trip/4",
            "value": 116961,
            "range": "± 5909",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_round_trip/8",
            "value": 176543,
            "range": "± 18317",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 129429,
            "range": "± 39285",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 206703,
            "range": "± 24249",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 366530,
            "range": "± 43924",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 739444,
            "range": "± 66570",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1475324,
            "range": "± 134245",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2892565,
            "range": "± 273608",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 96927,
            "range": "± 9728",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 19174,
            "range": "± 3147",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1276,
            "range": "± 425",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}