// @flow

import React, { Component } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../envinronment'
import logo from './logo.svg'
import './App.css'

export default class App extends Component<{}> {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query AppClansQuery {
                        clans {
                            clanId
                        }
                    }
                `}
                variables={{}}
                render={({error, props}) => {
                    if (error) {
                        return <div>Error!</div>
                    }

                    if (!props) {
                        return <div>Loading...</div>
                    }

                    console.info(props)

                    return <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to React</h1>
                        </header>
                        <p className="App-intro">
                            {props.clans.map(clan => (
                                <div key={clan.clanId}>Clan {clan.clanId}</div>
                            ))}
                            To get started, edit <code>src/App.js</code> and save to reload.
                        </p>
                    </div>
                }}
            />
        )
    }
}
