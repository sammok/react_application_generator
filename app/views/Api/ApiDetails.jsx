import React from 'react';

export default class ApiDetails extends React.Component {
    render() {
        let details = this.props.currentPokemon;

        if (details) {
            details = (
                <ul>
                    <li><span className="label">id:</span>{details.id}</li>
                    <li><span className="label">name:</span>{details.name}</li>
                    <li><span className="label">weight:</span>{details.weight}</li>
                    <li><span className="label">height:</span>{details.height}</li>
                </ul>
            );
        }

        return (
            <div className="details">
                {details}
            </div>
        );
    }
}
