 import React, { Component, useState } from 'react';

 class Counter extends Component {
   
    state ={
        value:this.props.counter.value,
    }

    handleIncrement  = ()=>{
        this.setState({ value: this.state.value + 1 });
    }


   
    render() { 
        return (
            <div>
                <h4>{this.props.id}</h4>
                <span className={ this.getBadgeClasses() } style={{ fontSize:30 , fontWeight: 'bold'}}>{this.formatCount()}</span>     
                <button className='btn btn-secondary btn-sm' onClick={() => this.handleIncrement()}>Increment</button>
                <button className="btn btn-danger m-2 btn-sm" onClick={()=> this.props.onDelete()}>Delete</button>
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