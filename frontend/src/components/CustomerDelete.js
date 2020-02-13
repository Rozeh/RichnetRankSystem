import React from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'; 
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class CustomerDelete extends React.Component {
    
    deleteCustomer(id){
        const url = '/api/post/' + id;
        axios.delete(url)
    }
        

    render() {
        return (
            <button 
                onClick={(e) => {this.deleteCustomer(this.props.id)}}
            >
            삭제
            </button>
        )
    }
}

export default CustomerDelete;