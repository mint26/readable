import React from 'react'; 
import { Button } from 'reactstrap'; 

const controls = (props) => {
    
    return (
        <div className={`col-12 controls`}>
            <Button onClick={props.addHandler}>New Post</Button>
            <div className="order-by-vote" onClick={props.sortByVoteHandler}>
                <img src="./assets/sortBy.svg" alt="sort by vote"/>
            </div>
            <div className="order-by-timestamp" onClick={props.sortByTimeHandler}>
                <img src="./assets/sortByTime.png" alt="sort by time"/>
            </div>
        </div>
    )
}

export default controls; 