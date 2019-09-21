import React, { Component } from 'react';

class Counter extends Component 
{
    state = 
    {
        count:0, 
    };

    render() 
    { 
        return (
            //if we don't want to create a div, we can always use the <React.Fragment></React.Fragment>
            <div>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Incerment</button>
            </div> 
        );
    }

    formatCount()
    {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;