import React from 'react';
import './person.css';

class Person extends React.Component {
    state = {}

    render () {
        const { person } = this.props
        return (
                <tr className='Stats'>
                    <td className='Name'>{person.player}</td>
                    <td>{person.gamesPlayed}</td>
                    <td>{person.points}</td>
                    <td>{person.scoreDifference}</td>
                </tr>
        )
    }
}

export default Person