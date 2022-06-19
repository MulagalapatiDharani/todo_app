import { Avatar, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import React from 'react';
import './Todo.css';

// const ListStyled = styled(List)`
//     display: flex;
//     justify-content: center;
// `;

function ToDo(props) {
  return (
    <List>
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    {/* <ImageIcon /> */}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.text} secondary="Deadline"/>
        </ListItem>
    </List>
  )
}

export default ToDo