import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'

class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.name.trim().length > 0) {
      const newItem = {
        name: this.state.name
      }
      this.props.addItem(newItem)
      this.toggle()
    }
  }

  render() {
    return (
      <div>
        <Button color="dark" style={{ marginBottom: '2rem' }} onClick={this.toggle}>
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>Enter a new item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Enter a new shopping item"
                  onChange={this.handleChange}
                />
                <Button color="dark" type="submit" block className="mt-4">
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal)
