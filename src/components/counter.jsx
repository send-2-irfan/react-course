 import React, { Component, useState } from 'react';

 class Counter extends Component {
    state ={
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    threeTags(){
        if( this.state.tags.length === 3) return <p>There are 3 tags!!!</p>;
    }
    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement  = ()=>{
        this.setState({ count: this.state.count + 1 });
    }

   
    render() { 
        return (
            <div>
                <span className={ this.getBadgeClasses() } style={{ fontSize:30 , fontWeight: 'bold'}}>{this.formatCount()}</span>     
                <button className='btn btn-secondary btn-sm' onClick={this.handleIncrement}>Increment</button>
                {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
                {/* { this.state.tags.length === 3 && <p>There are 3 tags!</p>} */}
                { this.threeTags()}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
 }
  
 export default Counter;