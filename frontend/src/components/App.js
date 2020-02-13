import React from 'react';
import Customer from 'components/Customer'
import CustomerAdd from 'components/CustomerAdd'
import { CircularProgress, Table, TableHead, TableBody, TableRow, TableCell, withStyles, Paper } from '@material-ui/core'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'; 
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const styles = theme => ({
  root:{
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table:{
    minWidth: 720
  },
  progress: {
    margin: theme.spacing(2)
  }
})

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      customers:"",
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers:'',
      completed: 0
    });
    this.callApi = () => {
      axios
        .get('/api/post/')
        .then(res => this.setState({customers: res.data}))
        .catch(err => console.log(err)) 
    }
  }


  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
  }

  callApi = () => {
    axios
      .get('/api/post/')
      .then(res => this.setState({customers: res.data}))
      .catch(err => console.log(err)) 
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 })
  }

  render(){
  const { classes } = this.props;
  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>고객사</TableCell>
              <TableCell>포스트제목</TableCell>
              <TableCell>키워드</TableCell>
              <TableCell>포스트주소</TableCell>
              <TableCell>현재순위</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => { return (
                <Customer 
                  key={c.id} 
                  id={c.id} 
                  customer={c.customer}
                  keyword={c.keyword}
                  title={c.title}
                  post_url={c.post_url}
                  />
            )}
            ):
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress 
                  className={classes.progress} 
                  variant="determinate" 
                  value={this.state.completed}
                /> 
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
      <CustomerAdd stateRefresh={this.stateRefresh}/>
    </div>
    );
  }
}

export default withStyles(styles)(App);
