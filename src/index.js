import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning!</h4>
                <p>Are you sure you want to do this?</p>
            </div>
        </ApprovalCard>
        <ApprovalCard> 
            <CommentDetail 
                author="Helen" 
                timeAgo="Today at 4:15PM" 
                comment="Well done!" 
                avatar={faker.image.image()}
            />
        </ApprovalCard>
        <ApprovalCard> 
            <CommentDetail 
                author="Jon" 
                timeAgo="Today at 2PM" 
                comment="Great stuff!" 
                avatar={faker.image.image()}
            />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail 
            author="Liz" 
            timeAgo="Yesterday at 5PM" 
            comment="This is wicked!" 
            avatar={faker.image.image()}
        />
        </ApprovalCard>
    </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));