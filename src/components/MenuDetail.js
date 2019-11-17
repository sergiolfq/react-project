import React, { Component } from 'react';
import { Card, CardImg ,CardImgOverlay , CardTitle,CardText ,CardBody } from 'reactstrap';

class MenuDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    
     render() {
      
      if(this.props.dish == null){
        return (<></>);
      }

      const commentList = this.props.dish.comments.map((comment) => {
        return (
            <li key={comment.id}>{comment.id} -- {comment.author} -- {comment.description}</li>
        );
        });
      
     
      return( 
          <div className="container">
            <div class="row">
                <div className="col-12 col-md-5 m-1">
                  <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                      <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                      </CardBody>
                  </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                  <Card>
                      <CardBody>
                      <CardTitle>Comments</CardTitle>
                        <CardText>                    
                          {commentList}                    
                        </CardText>
                      </CardBody>
                  </Card>
                </div>
            </div>    
          </div>  
        );
    }
}

export default MenuDetail;