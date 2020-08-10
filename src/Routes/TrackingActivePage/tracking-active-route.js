import React from 'react';
import HomeMenu from '../../Components/home-menu';
import Timer from '../../Components/timer';
import StopButton from '../../Components/stop-button';
import SelectOptButtons from '../../Components/select-opt-buttons';
import GrowingContext from '../../growing-up-context';

export default class TrackingActivePage extends React.Component {
    static contextType = GrowingContext;

    constructor(props) {
        super(props);

        this.state = {
            type: props.match.params.type
        };
    }

    render() {
        return (
            <div className="tracking-active">
                <HomeMenu />
                <div className="main-container feed-main-container">
                    <div className="feed-dashboard">
                        {this.context.type === 'feeding' ? (
                            <h2 className="feed-header">Feeding Tracker</h2>
                        ) : (
                            <h2 className="sleep-header">Sleep Tracker</h2>
                        )}
                        <Timer />
                    </div>
                    <SelectOptButtons />
                    <StopButton />
                </div>
            </div>
        );
    }
}
