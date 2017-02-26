import React from 'react';

export default class App extends React.Component {
    componentDidMount() {
        console.log('componentDidMount called');
    }

    render() {
        return (
            <div>
                <h1>It's Alive!</h1>
                <br/>
                <p>Hello, World...</p>
            </div>
        )
    }
}
