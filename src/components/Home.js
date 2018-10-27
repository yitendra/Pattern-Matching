import React, { Component } from 'react';

class Home extends Component {
    state={
        text:'',
        pattern:''
    }

    pm=()=>{
        setTimeout(()=>{
        if(this.state.pattern!=='' && this.state.text!=='')
        console.log(this.rabinKarp(this.state.text,this.state.pattern))}
        ,100)
    }

    // Naive String Matching Algorithm
    naive=(text,pattern)=>{
        for(let i=0; i<=(text.length-pattern.length); i++){
            let j;
            for(j=0; j<pattern.length; j++){
                if(text[i+j]!==pattern[j])break;
            }
            if(j===pattern.length){
                //console.log("Pattern Matched at index: "+i)
                return i;   //Return the found index
            }
        }
        return -1;      //-1 is not found
    }

    //Finding Hash Value for Rabin Karp algo
    hash=(text)=>{
        let hash=0;
          for(let i=0; i<text.length;i++){
              hash=hash+text.charCodeAt(i)
          }
          return hash;
      }

    //RabinKarp String Matching Algorithm
    rabinKarp=(text,pattern)=>{
        let hpat=this.hash(pattern);
        for(let i=0; i<=text.length-pattern.length; i++){
            if(this.hash(text.slice(i,i+pattern.length))===hpat && this.naive(text.slice(i,i+pattern.length),pattern)>=0)return i;
        }
        return -1
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