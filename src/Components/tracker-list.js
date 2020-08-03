import React from 'react';
import TrackerLog from './tracker-log';
import GrowingContext from '../growing-up-context';
//import TokenService from '../token-service';

export default class TrackerList extends React.Component {
    static contextType = GrowingContext;

    

    render() {
        return (
            <ul className="feed-log-container">
                {this.context.sleepData.map((item) => {
                    return (
                        <li key={item.id} className="feed-list-container">
                            <TrackerLog {...item} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}
