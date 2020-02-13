import React from 'react';
import {TableRow, TableCell } from '@material-ui/core';
import CustomerDelete from 'components/CustomerDelete'

class Customer extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.customer}</TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell>{this.props.keyword}</TableCell>
                <TableCell>{this.props.post_url}</TableCell>
                <TableCell><CustomerDelete id={this.props.id}/></TableCell>
            </TableRow>
        )
    }
}

export default Customer; 