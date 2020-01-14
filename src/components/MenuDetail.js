import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody, 
  CardTitle, Breadcrumb,Button, BreadcrumbItem,
  Modal, ModalBody, ModalHeader, Input, Label, Row, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


    function RenderDish({dish}){

      return(
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}/>
          <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }    

    function RenderComments({comments}){

      const commentList = comments.map((comment) => {
        return (
            <li key={comment.id}>{comment.id} -- {comment.author} -- {comment.description}</li>
        );
        });

        return commentList;
    }
    
    class MenuDetail extends Component {
      
      constructor(props){
        super(props);
        this.state = {
          isModalOpen: false,
          dish: props.dish,
          comments: props.comments
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      } 

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
        this.toggleModal(); 
    }

      render(){
     
      const required = (val) => val && val.length;
      const maxLength = (len) => (val) => !(val) || (val.length <= len);
      const minLength = (len) => (val) => val && (val.length >= len);

      if(this.state.dish == null){
        return (<></>);
      }

      return( 
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{this.state.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{this.state.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={this.state.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={this.state.comments} />
                <br/>
                <Button className="pull-left" outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit a Comment</Button>
            </div>
        </div>  
        
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="formGroup">
                                <Label for="rate" >
                                    Rating  
                                </Label>
                                <Control.select model=".rate" id="rate" name="rate"
                                  className="form-control" >
                                  <option selected="selected" value="1"> 1 </option>
                                  <option value="2"> 2 </option>       
                                </Control.select>  
                            </div>
                            <div className="formGroup">
                                <Label for="name">
                                    Your name  
                                </Label>
                                <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </div>
                            <div className="formGroup">
                                <Label for="comment" >
                                    Your Comment  
                                </Label>
                                <Control.textarea model=".comment" id="comment" name="message"
                                  rows="7"
                                  className="form-control" />        
                            </div>
                            <div className="formGroup">
                              <Button type="submit" value="submit" color="primary">Submit</Button>
                            </div>            
                        </LocalForm>
                    </ModalBody>
        </Modal>


        </div>
        );
    }
  }
export default MenuDetail;