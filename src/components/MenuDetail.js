import React from 'react';
import { Card, CardImg, CardText, CardBody, 
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
    
    function  MenuDetail(props) {
      
      if(props.dish == null){
        return (<></>);
      }

      return( 
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>
        );
    }

export default MenuDetail;