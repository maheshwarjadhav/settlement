/**
 * Created by kgehlot on 4/20/2018.
 */
import React, {Component} from 'react';
import Header from '../components/Header';
import axios, { post } from 'axios';
import toastr from 'toastr';
import './../css/notification.css';
import './../css/toastr.css';
import BlockUi from 'react-block-ui';


class FileUpload extends Component {
     constructor(props) {
    super(props);    
    this.state ={
      file:null,
       blocking: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  
  
  onFormSubmit(e){
  this.setState({blocking: !this.state.blocking});
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file)
    		.then(response => {    			
    			 toastr.success("File Upload Successfully", "Status")
    		})
      		.catch(error =>{
      			toastr.error("Error - File Not Upload")
      		 })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://localhost:8080/uploadFile';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)    		
  }

  render() {
    return (
    <div className="main-container mobile-responsive" style={{marginTop: "64px"}}>
      <BlockUi tag="div" blocking={this.state.blocking}>    
       <Header/>
      <form onSubmit={this.onFormSubmit}>
        <h1>Submit Sales Data Files</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Submit</button>
      </form>
      </BlockUi>
      </div>
   )
  }
}

export default FileUpload

