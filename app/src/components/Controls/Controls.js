import React , { Component } from 'react'; 
import { Button } from 'reactstrap'; 

const controls = (props) => {
    
    let numericIcon = props.numericAsc ? 'fa-sort-numeric-up' : 'fa-sort-numeric-down'; 
    return (
        <div className={`col-12 controls`}>
            <Button onClick={props.addHandler}>New Post</Button>
            <div className="order-by-vote" onClick={props.sortByVoteHandler}>
                <i className={`fas ${numericIcon} ${props.numericAsc}`}></i> 
            </div>
            <div className="order-by-timestamp" onClick={props.sortByTimeHandler}>
                <i className="far fa-clock"></i>
            </div>
        </div>
    )
}

export default controls; 