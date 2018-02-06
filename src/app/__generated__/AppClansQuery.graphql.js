/**
 * @flow
 * @relayHash 81c66568b6b49a826f98d83219fcac62
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppClansQueryResponse = {|
  +clans: ?$ReadOnlyArray<?{|
    +clanId: ?string;
  |}>;
|};
*/


/*
query AppClansQuery {
  clans {
    clanId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppClansQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Clan",
        "name": "clans",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clanId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppClansQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppClansQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Clan",
        "name": "clans",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clanId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppClansQuery {\n  clans {\n    clanId\n  }\n}\n"
};

module.exports = batch;
