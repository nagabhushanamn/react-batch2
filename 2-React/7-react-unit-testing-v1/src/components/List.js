
import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem'

function List(props) {
    const { items } = props;
    if (items.length === 0) {
        return (<span className="alert alert-info">No items in List</span>);
    }
    return (
        <ul className="list-group">
            {/* {items.map(item => <li className="list-group-item" key={item}>{item}</li>)} */}
            {items.map(item => <ListItem key={item} item={item} />)}
        </ul>
    )
}

List.propTypes = {
    items: PropTypes.array
}
List.defaultProps = {
    items: []
}

export default List;