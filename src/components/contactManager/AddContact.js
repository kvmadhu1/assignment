import React from "react";


class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("all fields are mandatery");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">AddContact</h5>
        </div>

        <form onSubmit={this.add}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              
              
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              
              
              placeholder="Enter email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      </>
    );
  }
}

export default AddContact;
