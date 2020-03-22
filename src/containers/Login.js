import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
// local files
import { loginUser } from '../store/user/user.actions'
import { Input, Message } from '../components'
import { ID_TOKEN } from '../constants'

function Login (props) {
  const history = useHistory()
  const [formData, setFormData] = React.useState({})
  const [error, setError] = React.useState(null)
  const { user } = props

  useEffect(() => {
    const abortController = new AbortController()
    const { error, data } = user

    if (error && error.message) {
      setError(error.message)
    }

    if (data && data.id_token) {
      localStorage.setItem(ID_TOKEN, data.id_token)
      history.push('/list')
    }

    return function clean () {
      abortController.abort()
    }

  }, [user, history])

  function onChange (e, name) {
    const value = {}
    value[name] = e.target.value

    setFormData(Object.assign(formData, value))
  }

  function submit (e) {
    e.preventDefault()
    props.loginUser(formData)
  }

  function onClick () {
    setError(null)
  }

  return <React.Fragment>
    <h1 className="text-center">Login Page</h1>
    <Message message={error} onClick={onClick}/>

    <form onSubmit={submit}>
      <Input
        name="name"
        onChange={onChange}
        label="Name"/>
      <Input
        name="password"
        onChange={onChange}
        label="Password"
        type="password"/>
      <button type="submit" className="btn btn-primary">{user.loading ? 'Loading ...' : 'Submit'}</button>
      <p>Name/password: admin</p>
    </form>
  </React.Fragment>
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
