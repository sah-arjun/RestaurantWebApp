import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

export default class DishDetail extends Component {
  renderDish(selectedDish) {
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

  renderComments(comments) {
    if (comments != null) {
      const commentList = comments.map(comment => {
        return (
          <ul className="list-unstyled" key={comment.id}>
            <li>{comment.comment}</li>
            <li>
              -- {comment.author},
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit"
              }).format(new Date(comment.date))}
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

  render() {
    if (this.props.selectedDish != null) {
      return (
        <div className="row">
          {this.renderDish(this.props.selectedDish)}
          {this.renderComments(this.props.selectedDish.comments)}
        </div>
      );
    } else return <div />;
  }
}
