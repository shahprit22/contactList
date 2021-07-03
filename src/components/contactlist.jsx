import React, { Component } from "react";
import axios from "axios";
import './contactlist.css'
import RenderList from './../utlis/renderlist';

class ContactList extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:1,
            per_page:6,
            total:12,
            total_pages:2,
            data:[{id:1,email:"george.bluth@reqres.in",first_name:"George",last_name:"Bluth",avatar:"https://reqres.in/img/faces/1-image.jpg"},
            {id:2,email:"janet.weaver@reqres.in",first_name:"Janet",last_name:"Weaver",avatar:"https://reqres.in/img/faces/2-image.jpg"},
            {id:3,email:"emma.wong@reqres.in",first_name:"Emma",last_name:"Wong",avatar:"https://reqres.in/img/faces/3-image.jpg"},
            {id:4,email:"eve.holt@reqres.in",first_name:"Eve",last_name:"Holt",avatar:"https://reqres.in/img/faces/4-image.jpg"},
            {id:5,email:"charles.morris@reqres.in",first_name:"Charles",last_name:"Morris",avatar:"https://reqres.in/img/faces/5-image.jpg"},
            {id:6,email:"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos",avatar:"https://reqres.in/img/faces/6-image.jpg"}],
            support:{"url":"https://reqres.in/#support-heading",
            text:"To keep ReqRes free, contributions towards server costs are appreciated!"},
            sorting:"A-Z"
        }
    }
    componentDidMount(){
        const data = [...this.state.data]
        const sortedDataasc = data.sort((a,b) => a.first_name>b.first_name?1:-1)
        this.setState({data:sortedDataasc})
    }

    sortingHandler = (e) => {
        const data = [...this.state.data]
        console.log("sorting:" + e.target.value)
        this.setState({sorting : e.currentTarget.value}, () => {
        if(this.state.sorting==="A-Z"){
           const sortedDataasc = data.sort((a,b) => a.first_name>b.first_name?1:-1)
           this.setState({data:sortedDataasc})
        }
        else{
             const sortedDatadesc = data.sort((a,b) => a.first_name<b.first_name?1:-1)
             this.setState({data:sortedDatadesc})
        }
        })
        // console.log(sortedData)
        
    }

    render() { 
        console.log(this.state.data)
        const {data,sorting} = this.state
        return ( 
            <div className="maincontainer">
                
                <RenderList data={data} sorting={sorting} sortingHandler={this.sortingHandler} />
            </div>
         );
    }
}
 
export default ContactList;