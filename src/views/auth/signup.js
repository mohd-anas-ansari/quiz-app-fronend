import React from "react";
import { Link } from "react-router-dom";
import { userSignup } from "../../state/actions/authActions";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    isPosting: false,
    successMsg: "",
    errorMsg: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async () => {
    if (this.state.isPosting) {
      return;
    }

    // validation is missing

    this.setState({ isPosting: true });
    setTimeout(async () => {
      try {
        var res = await userSignup({ user: this.state });
        this.setState({ isPosting: false });

        if (res.status === 200) {
          this.setState({
            successMsg: (
              <p>
                Signed up successfully. <Link to="/login">Login here.</Link>
              </p>
            ),
            errorMsg: "",
          });
        }
      } catch (error) {
        this.setState({
          successMsg: "",
          errorMsg: <p>{error.error || "Something went wrong."}</p>,
        });
      }
    }, 3000);
  };

  render() {
    return (
      <div className="container">
        <div className="columns is-mobile">
          <div className="column is-half is-offset-one-quarter">
            <h1 className="title is-4 has-text-centered">Signup</h1>
            <div style={{ background: "green", color: "white" }}>
              {this.state.successMsg}
            </div>
            <div style={{ background: "red", color: "white" }}>
              {this.state.errorMsg}
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  name="name"
                  placeholder="Name"
                  type="text"
                  value={this.state.name}
                  onChange={(e) => this.handleChange(e)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  name="email"
                  placeholder="email"
                  type="email"
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  name="password"
                  placeholder="password"
                  type="password"
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="has-text-right">
              <button
                className="button is-primary"
                onClick={() => this.handleSubmit()}
              >
                {this.state.isPosting ? "Submitting" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
