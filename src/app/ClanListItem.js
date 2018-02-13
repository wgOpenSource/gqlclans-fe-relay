// @flow

import React, { Component } from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import './App.css'
import type { IClan } from '../interfaces'

type Props = {
    clan: IClan,
}

class ClanListItem extends Component<Props> {
    render() {
        return (
            <div>ClansList</div>
        )
    }
}

export default createFragmentContainer(ClanListItem, {
    clan: graphql`
        fragment ClanListItem_clan on Clan {
            clanId
            name
            tag
        }
    `,
})