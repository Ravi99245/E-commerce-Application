import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isLoginSuccess: false, inValidText: ''}

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  goToLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const inputData = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(inputData),
    }

    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (data.status_code === 400) {
      this.setState({isLoginSuccess: true, inValidText: data.error_msg})
    } else {
      this.setState({isLoginSuccess: false})
    }
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  renderUserNameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="nameText" htmlFor="inputElement">
          USERNAME
        </label>
        <input
          className="user-name-input"
          type="text"
          id="inputElement"
          placeholder="Username"
          value={username}
          onChange={this.updateUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="nameText" htmlFor="passwordElement">
          PASSWORD
        </label>
        <input
          className="user-name-input"
          type="password"
          value={password}
          placeholder="Password"
          id="passwordElement"
          onChange={this.updatePassword}
        />
      </>
    )
  }

  render() {
    const {isLoginSuccess, inValidText} = this.state

    return (
      <div className="loginForm-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="mobile-logo"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.goToLogin}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="desktop-logo"
            alt="website logo"
          />

          <div className="input-container">{this.renderUserNameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button className="button" type="submit" onClick={this.goToLogin}>
            Login
          </button>
          {isLoginSuccess && <p className="failed-text">*{inValidText}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
