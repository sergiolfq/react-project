import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody, 
  CardTitle, Breadcrumb,Button, BreadcrumbItem,
  Modal, ModalBody, ModalHeader, Input, Label, Row, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

    function RenderDish(props){
      if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) 
      return(
        <Card>
          <CardImg width="100%" src={props.dish.image} alt={props.dish.name}/>
          <CardBody>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>{props.dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }    

    function RenderComments({comments, addComment, dishId }){

      const commentList = comments.map((comment) => {
        return (
            <li key={comment.id}>{comment.id} -- {comment.author} -- {comment.comment}</li>
        );
        });

        return (<div> 
                <ul> {commentList} </ul> <br/>
                <CommentForm dishId={dishId} addComment={addComment}  />
                </div> 

                );
    }
    
    class MenuDetail extends Component {
      
      constructor(props){
        super(props);
        this.state = {
          dish: props.dish,
          comments: props.comments
        };
      } 

      render(){
    
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
                <RenderComments comments={this.state.comments} 
                  addComment={this.props.addComment}
                  dishId={this.props.dish.id}/>
            </div>
        </div>  
            
        </div>
        );
    }

  }

  class CommentForm extends Component {
      
    constructor(props){
      super(props);
      this.state = {
        isModalOpen: false,
        dishId: props.dishId
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
    /*  console.log('Current State is: ' + JSON.stringify(values)); */
      alert('Current State is: ' + JSON.stringify(values));
      // event.preventDefault();
      this.toggleModal(); 
      this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
  }

    render(){
   
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    if(this.state.dishId == null){
      return (<></>);
    }

    return(
    <> 
      <br/>
      <Button className="pull-left" outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit a Comment</Button>

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
                                <option  value="1"> 1 </option>
                                <option value="2"> 2 </option>       
                              </Control.select>  
                          </div>
                          <div className="formGroup">
                              <Label for="author">
                                  Your name  
                              </Label>
                              <Control.text model=".author" id="author" name="author"
                                      placeholder="Author"
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
                              <Control.textarea model=".comment" name="comment" id="comment" name="comment"
                                rows="7"
                                className="form-control" />        
                          </div>
                          <div className="formGroup">
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                          </div>            
                      </LocalForm>
                  </ModalBody>
      </Modal>
    </>  
      );
  }

}


export default MenuDetail;