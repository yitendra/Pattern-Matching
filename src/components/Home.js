import React, { Component } from 'react';

class Home extends Component {
    state={
        text:'',
        pattern:'',
        kmpTime:0,
        naiveTime:0,
        rabinTime:0
    }

    pm=()=>{
        setTimeout(()=>{
        if(this.state.pattern!=='' && this.state.text!==''){
        
        let t0=window.performance.now();
        this.kmp(this.state.text,this.state.pattern)
        let t1=window.performance.now();
        let kmpTime=(t1-t0).toFixed(5)

        let t3=window.performance.now()
        this.naive(this.state.text,this.state.pattern)
        let t4=window.performance.now()
        let naiveTime=(t4-t3).toFixed(5)

        let t5=window.performance.now()
        this.rabinKarp(this.state.text,this.state.pattern)
        let t6=window.performance.now()
        let rabinTime=(t6-t5).toFixed(5)

        this.setState({
            kmpTime:kmpTime,
            naiveTime:naiveTime,
            rabinTime:rabinTime
        })

        console.log(naiveTime)

        }
            }
        ,100)
    }

    // Naive Sthing Matching Algorithm
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

    //RabinKarp Sthing Matching Algorithm
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
                   
                <hr/>
                    <div className="container">
                        {/* Display text and pattern matched to it */}
                        {this.state.text.split(this.state.pattern)}
                    </div>

                   <div className="container timeTable">
                        {/* Create Table to show Time taken by algorithms */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Algorithm</th>
                                <th scope="col">Time Taken</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>KMP algo</td>
                                <td>{this.state.kmpTime}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Naive algo</td>
                                <td>{this.state.naiveTime}</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>RabinKarp algo</td>
                                <td>{this.state.rabinTime}</td>
                            </tr>
                        </tbody>
                    </table>
                   </div>
            </div>
        )}
}

export default Home;