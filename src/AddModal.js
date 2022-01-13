import React from "react";

import { Modal, Button } from "react-bootstrap";

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: ""
    };
  }

  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title> Add Movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
          <input
            type="text"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            className="form-control mb-2"
            placeholder="enter movie title"
          />
          <input
            type="text"
            value={this.state.genre}
            onChange={(e) => this.setState({ genre: e.target.value })}
            className="form-control"
            placeholder="enter movie title"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              this.props.addMovieHandler(this.state.title, this.state.genre)
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default AddModal;
