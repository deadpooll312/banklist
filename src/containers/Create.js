import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// local files
import { Input, Message } from '../components'
import { createTransaction } from '../store/transaction/transaction.action'

function Create (props) {
  const { transaction } = props
  const [formData, setFormData] = React.useState({ id: `${Date.now()}` })
  const [message, setMessage] = React.useState(null)
  const [error, setError] = React.useState(null)

  useEffect(() => {
    const abortController = new AbortController()
    const { error, data } = transaction

    if (data && data.id) {
      setMessage('Created Successfully!')
    }

    if (error && error.message) {
      setError(error.message)
    }

    return function cleanup () {
      abortController.abort()
    }

  }, [transaction])

  function submit (e) {
    e.preventDefault()
    props.createTransaction(formData)
  }

  function onChange (e, name) {
    const value = {}
    value[name] = e.target.value

    setFormData(Object.assign(formData, value))
  }

  function clearMessage () {
    setMessage(null)
    setError(null)
  }

  return <React.Fragment>
    <h1 className="text-center">Create new Transaction</h1>
    <Message message={error} onClick={() => clearMessage()}/>
    <Message type="info" message={message} onClick={() => clearMessage()}/>

    <form onSubmit={submit}>
      <Input
        name="bankId"
        required={true}
        onChange={onChange}
        label="Bank Id"/>
      <Input
        name="amount"
        required={true}
        type="number"
        onChange={onChange}
        label="Amount"/>
      <button
        type="submit"
        className="btn btn-primary">{transaction.loading ? 'Loading...' : 'Submit'}</button>
    </form>
  </React.Fragment>
}

const mapStateToProps = ({ transaction }) => ({
  transaction
})

const mapDispatchToProps = dispatch => ({
  createTransaction: data => dispatch(createTransaction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Create)
