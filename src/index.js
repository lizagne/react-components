import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';


const App = () => {
    return (
    <div className="ui container comments">
        <CommentDetail 
            author="Helen" 
            timeAgo="Today at 4:15PM" 
            comment="Well done!" 
            avatar={faker.image.image()}
        />
        <CommentDetail 
            author="Jon" 
            timeAgo="Today at 2PM" 
            comment="Great stuff!" 
            avatar={faker.image.image()}
        />
        <CommentDetail 
            author="Liz" 
            timeAgo="Yesterday at 5PM" 
            comment="This is wicked!" 
            avatar={faker.image.image()}
        />
    </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));