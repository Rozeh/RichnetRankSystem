import React from 'react';
import { post } from 'axios';

class CustomerAdd extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            customer: "",
            title:"",
            keyword:"",
            post_url:"",
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            customer:"",
            title:"",
            keyword:"",
            post_url:"",
        })
    }

    addCustomer = () => {
        const url = '/api/post/'
        const formData = new FormData();
        formData.append('customer', this.state.customer);
        formData.append('title', this.state.title);
        formData.append('keyword', this.state.keyword);
        formData.append('post_url', this.state.post_url);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

 
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>순위체크 추가</h1>
                고객사: <input type="text" name="customer" value={this.state.customer} onChange={this.handleValueChange} /><br />
                제목: <input type="text" name="title" value={this.state.title} onChange={this.handleValueChange} /><br />
                키워드: <input type="text" name="keyword" value={this.state.keyword} onChange={this.handleValueChange} /><br />
                블로그주소: <input type="url" name="post_url" value={this.state.post_url} onChange={this.handleValueChange} /><br />
                <button type="submit">추가하기</button>
            </form>
        )
    }

}

export default CustomerAdd;
