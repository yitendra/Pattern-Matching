import React, { Component } from 'react';

class Home extends Component {
    state={
        text:'',
        pattern:''
    }

    pm=()=>{
        //setTimeout(()=>console.log(this.state.text+this.state.pattern),100)
        if(this.state.pattern!=='')
        this.naive(this.state.text,this.state.pattern);
    }

    // Naive String Matching Algorithm
    naive=(text,pattern)=>{
        for(let i=0; i<text.length-pattern.length; i++){
            let j=0;
            for(j=0; j<pattern.length; j++){
                if(text[i+j]!==pattern[i])break;
            }
            if(j===pattern.length)console.log("Pattern Matched at index: "+i)
        }
    }

    handleText=(e)=>{
        this.setState({text:e.target.value})
        this.pm()
    }

    handlePattern=(e)=>{
        this.setState({pattern:e.target.value})
        this.pm()
    }

    render(){
        return(
            <div className="container">
                <div className="container">
                    <form>
                        <div className="form-group textpattern">
                            <label htmlFor="text">Text : </label>
                            <input type="text" className="form-control" name="" id="text" placeholder="Enter Text" onChange={this.handleText} />
                            <label htmlFor="pattern">Pattern : </label>
                            <input type="text" className="form-control" name="" id="pattern" placeholder="Enter Pattern" onChange={this.handlePattern} />
                        </div>
                    </form>

                    {/* Displaying Text */}
                    <p>{this.state.text}</p>
                    <p>{this.state.pattern}</p>
                    
                </div>
            </div>
        )}
}

export default Home;