import React, { Component } from 'react';
import ActionButton from './ActionButton';
import TotalCountDisplay from './TotalCountDisplay';

class CounterBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCount: 0
        }
    }
    incrementTotalCount(v) {
        let { totalCount } = this.state;
        totalCount += v;
        this.setState({ totalCount })
    }

    renderActionButtons() {
        let nums = [1, 5, 10, 50, 100, -1, -5, -10, -50, -100,1, 5, 10, 50, 100, -1, -5, -10, -50, -100];
        return nums.map((n, idx) => <ActionButton value={n} onAction={v=>this.incrementTotalCount(v)} key={idx} />)
    }

    render() {
        let { totalCount } = this.state;
        return (
            <div>
                <div className="card">
                    <div className="card-header"> Counter Box :
                        <span className="badge badge-primary">{totalCount}</span>
                    </div>
                    <div className="card-body">
                        {
                            /* 
                            <ActionButton value={1} onAction={v => this.incrementTotalCount(v)} />
                            <ActionButton value={10} onAction={v => this.incrementTotalCount(v)} /> 
                            */
                        }
                        {
                            this.renderActionButtons()}
                        }
                        <div style={{ clear: 'both' }}>
                            <hr />
                            <TotalCountDisplay value={totalCount} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CounterBox;