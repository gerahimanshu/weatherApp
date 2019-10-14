import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Input from '../components/input';
import * as actions from '../redux/actions/loginActions';

class Login extends Component{

    _handleUsername = (e) => {
        this.props.dispatch(actions.changeUsername(e.target.value))
    }

    _handlePassword = (e) => {
        this.props.dispatch(actions.changePassword(e.target.value))
    }

    _handleLogin = (e) => {
        e.preventDefault()
        const {username, password} = this.props.login;
        if (username === '') {
            alert('Username cannot be empty.')
            return;
        }
        if (password === '') {
            alert('Password cannot be empty.')
            return;
        }
        this.props.dispatch(actions.performLoginTask(username, password, this._loginSuccessCallback, this._loginFailureCallback))
    }

    _loginSuccessCallback = (token) => {
        localStorage.setItem('access-token', token)
        this.props.history.push('/dashboard')
    }

    _loginFailureCallback = (error) => {
        alert(error);
    }

    render(){
        return (
            <div className="container">
                <Input 
                    type='text' 
                    placeholder='Enter Username' 
                    name='Username' 
                    onChange={this._handleUsername}
                />
                <Input 
                    type='password' 
                    placeholder='Enter Password' 
                    name='Password' 
                    onChange={this._handlePassword}
                />     
                <button onClick={this._handleLogin}>Login</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default withRouter(connect(mapStateToProps)(Login));