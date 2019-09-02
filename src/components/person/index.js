import React from 'react';

class Person extends React.Component {
    state = {}

    render () {
        const { person } = this.props
        return (
            <div>
                <p>{person.name}</p>
            </div>
        )
    }
}

export default Person