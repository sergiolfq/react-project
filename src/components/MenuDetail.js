import React from 'react';
import { Card, CardImg ,CardImgOverlay , CardTitle,CardText ,CardBody } from 'reactstrap';

    function RenderDescriptionItem({dish}){

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
    
    function  MenuDetail({dish}) {
      
      if(dish == null){
        return (<></>);
      }

      return( 
          <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                  <RenderDescriptionItem dish={dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                  <Card>
                      <CardBody>
                      <CardTitle>Comments</CardTitle>
                        <CardText>                    
                         <RenderComments comments={dish.comments} />              
                        </CardText>
                      </CardBody>
                  </Card>
                </div>
            </div>    
          </div>  
        );
    }

export default MenuDetail;