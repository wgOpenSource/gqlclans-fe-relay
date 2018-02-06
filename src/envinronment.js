import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const GRAPHQL_URL = 'http://localhost:8567/graphql'

const fetchQuery = (operation, variables) => {
    return fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => response.json())
}

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
})

export default environment