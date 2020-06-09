import React from "react";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {};
  render() {
    return (
      <div className="container">
        <div className="columns is-mobile">
          <div className="column is-half is-offset-one-quarter">
            <h1 className="title is-4 has-text-centered">Login</h1>

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
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
