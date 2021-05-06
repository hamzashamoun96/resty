import React from 'react';
import Form from './Form';
import History from './History';
import Results from './Results';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          people: [],
          history: [],
        };
      }
    dataHandler = (result , history) => {
        this.setState({
          people: result,
          history:true,
        });
      };
      componentDidMount(){
      console.log("MOUNT")  
      }
      componentDidUpdate(){
        console.log("UPADTE")
      }
    render(){
        return(
            <>
            <Form dataHandler={this.dataHandler} data={this.props.location}/>
            <Results people={this.state.people} />
            <History history={this.state.history}/>
            </>
        )
    }
}

export default Home;