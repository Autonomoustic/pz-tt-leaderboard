import React from 'react';

class Person extends React.Component {
    state = {}

    render () {
        const { person } = this.props
        return (
            <div>
                <p>Player Name: {person.player}</p>
                <p>Points: {person.points}</p>
                <p>Games Played: {person.gamesPlayed}</p>
                <p>Score Difference: {person.scoreDifference}</p>
            </div>
        )
    }
}

export default Person