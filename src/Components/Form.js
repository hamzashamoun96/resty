import React from 'react';
import '../scss/form.scss'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url:"null",
            method:"null",
        }
    }


    result = (e)=>{
        e.preventDefault();
        const method = e.target.method.value;
        const url = e.target.url.value;
        console.log(method , url)
        this.setState({url})
        this.setState({method});
        document.getElementById('methodSection').textContent = method;
        document.getElementById('urlSection').textContent = url;

    }

    render(){
        return(
            <div className="container">

            <form id="form" onSubmit = {this.result}>
                <label style={{display:'block'}}>URL
                <input id="url" name="url" type="text" placeholder="http://api.url"/>
                <input id="submit" type="submit" value="GO!"/><br/>
                </label>
                <label className="radio">
                <input  type="radio" value="get" name="method"/>
                <span className="checkmark">GET</span>
                </label>

                <label className="radio">
                <input type="radio" value="post" name="method"/>
                <span className="checkmark">POST</span>
                </label>

                <label className="radio">
                <input type="radio" value="put" name="method"/>
                <span className="checkmark">PUT</span>
                </label>

                <label className="radio">
                <input type="radio" value="delete" name="method"/>
                <span className="checkmark">DELETE</span>
                </label>
          
            </form>
            <section>
                <p id="methodSection"></p>
                <p id="urlSection" ></p>
            </section>
            </div>
        )
    }
}
export default Form;