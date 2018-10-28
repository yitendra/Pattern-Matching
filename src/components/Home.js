import React, { Component } from 'react';

class Home extends Component {
    state={
        text:'',
        pattern:''
    }

    pm=()=>{
        setTimeout(()=>{
        if(this.state.pattern!=='' && this.state.text!=='')
        console.log(this.kmp(this.state.text,this.state.pattern))
        // console.log(this.prefix(this.state.pattern))
            }
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

    //KMP algorithm
    kmp=(text,pattern)=>{
          let textIndex = 0;
          let patternIndex = 0;
        
          const patternTable = this.prefix(pattern);
        
          while (textIndex < text.length) {
            if (text[textIndex] === pattern[patternIndex]) {
              // We've found a match.
              if (patternIndex === pattern.length - 1) {
                return (textIndex - pattern.length) + 1;
              }
              patternIndex += 1;
              textIndex += 1;
            } else if (patternIndex > 0) {
              patternIndex = patternTable[patternIndex - 1];
            } else {
              patternIndex = 0;
              textIndex += 1;
            }
          }
        
          return -1;
    }

    //findiPrefix Function
    prefix=(S)=>{
        const p=[];
        p[0]=0;
        let j=0;
        for (let i = 1; i < S.length; i++) {
            while (j > 0 && S[j] !== S[i])
                j = p[j-1];
    
            if (S[j] === S[i])
                j++;
            p[i] = j;
        }   
        return p;
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