import React from 'react';

class ToDoList extends React.Component{

render(){
    return(
        <div>
            <ul>
            {this.props.items.map(item =>(
                <li key={item.id}>{item.text}</li>
            ))}
            </ul>
        </div>
    );
}

}

export default ToDoList;