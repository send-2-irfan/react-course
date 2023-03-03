 import React, { Component, useState } from 'react';

 class Counter extends Component {
   
    state ={
        value:this.props.value,
    }

    handleIncrement  = ()=>{
        this.setState({ value: this.state.value + 1 });
    }

   
    render() { 
        return (
            <div>
                <h4>{this.props.id}</h4>
                <span className={ this.getBadgeClasses() } style={{ fontSize:30 , fontWeight: 'bold'}}>{this.formatCount()}</span>     
                <button className='btn btn-secondary btn-sm' onClick={() => this.handleIncrement(this.state.value)}>Increment</button>
                {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
                {/* { this.state.tags.length === 3 && <p>There are 3 tags!</p>} */}
                {/* { this.threeTags()} */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.value === 0) ? 'warning' : 'primary';
        return classes;
    }
    formatCount(){
        const {value: count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
 }
  
 export default Counter;