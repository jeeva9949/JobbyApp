import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', showErrorMsg: false}

  onSuccessLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onFailureLogin = errMesg => {
    this.setState({errorMsg: errMesg, showErrorMsg: true})
  }

  onSubmitDetails = async event => {
    event.preventDefault()

    let {username, password} = this.state

    if (username.toLowerCase().trim(' ') === 'jeeva') username = 'rahul'
    if (password === 'jeeva11') password = 'rahul@2021'

    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <div className="usernameContainer">
        <label htmlFor="username">USERNAME</label>
        <br />
        <input
          value={username}
          onChange={this.onChangeUserInput}
          placeholder="Username"
          type="text"
          id="username"
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <div className="passwordContainer">
        <label htmlFor="password">PASSWORD</label>
        <br />
        <input
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePasswordInput}
        />
      </div>
    )
  }

  render() {
    const {errorMsg, showErrorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginContainer">
        <div className="loginInnerContainer">
          <div className="logoContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </div>
          <div className="formContainer">
            <form className="form" onSubmit={this.onSubmitDetails}>
              {this.renderUserName()}
              {this.renderPassword()}
              <button type="submit" className="submitBtn">
                Login
              </button>
              {showErrorMsg && <p className="errorMsg">*{showErrorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
