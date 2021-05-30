import React from 'react';

const compareDate = (a, b) => {
    return Date.parse(b.props.startDate) - Date.parse(a.props.startDate);
};

const Sort = ({children, by}) => {
    if (!by) {
        return children
    };
    console.log("Sorting!!!")
    console.log(React.Children.toArray(children))
    console.log(React.Children.toArray(children).map(x=>x.props.startDate))
    console.log(React.Children.toArray(children).sort(compareDate).map(x=>x.props.startDate))
    return React.Children.toArray(children).sort(compareDate)
};

export default Sort;