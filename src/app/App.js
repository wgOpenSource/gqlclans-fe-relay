// @flow

import React, { Component } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../envinronment'
import logo from './logo.svg'

import ClansListItem from './ClanListItem'

import './App.css'

export default class App extends Component<{}> {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query AppClansQuery {
                        servers {
                            server
                            playersOnline
                        }
                        clans {
                            ...ClanListItem_clan
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
                        <ClansListItem />
                    </div>
                }}
            />
        )
    }
}
