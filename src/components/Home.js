import React, { Component } from 'react';

class Home extends Component {
    render(){
        return(
            <div className="container">
                <div className="container">
                    <form>
                        <div className="form-group textpattern">
                            <label htmlFor="text">Text : </label>
                            <input type="text" className="form-control" name="" id="text" placeholder="Enter Text"/>
                            <label htmlFor="pattern">Pattern : </label>
                            <input type="text" className="form-control" name="" id="pattern" placeholder="Enter Pattern"/>
                        </div>
                    </form>
                </div>
            </div>
        )}
}

export default Home;