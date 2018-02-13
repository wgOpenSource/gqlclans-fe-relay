/**
 * @flow
 * @relayHash f651818c54f5290dd39f62a9d49a510d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppClansQueryResponse = {|
  +servers: ?$ReadOnlyArray<?{|
    +server: ?string;
    +playersOnline: ?number;
  |}>;
  +clans: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query AppClansQuery {
  servers {
    server
    playersOnline
  }
  clans {
    ...ClanListItem_clan
  }
}

fragment ClanListItem_clan on Clan {
  clanId
  name
  tag
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
        "concreteType": "ServerInfo",
        "name": "servers",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "server",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "playersOnline",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Clan",
        "name": "clans",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ClanListItem_clan",
            "args": null
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
        "concreteType": "ServerInfo",
        "name": "servers",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "server",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "playersOnline",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Clan",
        "name": "clans",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Clan",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "clanId",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "tag",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppClansQuery {\n  servers {\n    server\n    playersOnline\n  }\n  clans {\n    ...ClanListItem_clan\n  }\n}\n\nfragment ClanListItem_clan on Clan {\n  clanId\n  name\n  tag\n}\n"
};

module.exports = batch;
