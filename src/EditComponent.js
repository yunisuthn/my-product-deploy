import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  //const newNom = this.getNom.value;
  const newPrenom = this.getPrenom.value;
  const data = {
    //newNom,
    newPrenom
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getPrenom = input}
    defaultValue={this.props.post.prenom} placeholder="Enter Post Title" /><br /><br />
    {/* <textarea required rows="5" ref={(input) => this.getPrenom = input}
    defaultValue={this.props.post.prenom} cols="28" placeholder="Enter Post" /><br /><br /> */}
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);