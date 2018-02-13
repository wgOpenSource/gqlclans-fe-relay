const fs = require('fs')
const http = require('http')


const GRAPHQL_SCHEMA_URL = 'http://localhost:8567/schema'

http.get(GRAPHQL_SCHEMA_URL, request => {
    let body = ''

    request.on('data', chunk => body += chunk)
    request.on('end', () => {
        try {
            JSON.parse(body)
        } catch (SyntaxError) {
            console.error(`Got invalid json from ${GRAPHQL_SCHEMA_URL}: ${body}`)
            return
        }

        fs.writeFile('schema.json', body, 'utf8', () => {})
        console.info('Schema was written to schema.json')
    })
}).on('error', error => {
    console.error(`Got error response from ${GRAPHQL_SCHEMA_URL}: ${error}`)
})