import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ selectedDish }) {
  if (selectedDish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={selectedDish.image} alt={selectedDish.name} />
          <CardBody>
            <CardTitle>{selectedDish.name}</CardTitle>
            <CardText>{selectedDish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else return <div />;
}

function RenderComments({ comments }) {
  if (comments != null) {
    const commentList = comments.map(comment => {
      return (
        <ul className="list-unstyled" key={comment.id}>
          <li>{comment.comment}</li>
          <li>
            -- {comment.author},
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(comment.date)))}
          </li>
        </ul>
      );
    });

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {commentList}
      </div>
    );
  } else return <div />;
}

const DishDetail = props => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish selectedDish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else return <div />;
};

export default DishDetail;
