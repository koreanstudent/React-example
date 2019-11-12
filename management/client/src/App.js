import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';





class App extends Component{

  state = {
    customers: ""
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err  => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/customers'); 
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <Paper >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이름</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.customers ? 
            this.state.customers.map(c=> {
              return <Customer key={c.id} id={c.id}  name={c.name}/>
            }) : ""

          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
