import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initList, removeItem } from '../store/list/list.action'
import { Table, Message } from '../components'

function Home (props) {
  const { list, initList } = props
  const [data, setData] = React.useState([])
  const [error, setError] = React.useState(null)

  useEffect(() => initList(), [initList])

  useEffect(() => {
    const abortController = new AbortController()
    const { data, error } = list

    if (data) {
      setData(data)
    }

    if (error && error.message) {
      setError(error.message)
    }

    return function cleanup () {
      abortController.abort()
    }

  }, [list])

  function removeItem (id) {
    props.removeItem(id)
  }

  return <React.Fragment>
    <Message message={error} onClick={() => setError(null)}/>
    {list.loading ? <h5 className="text-center">Loading...</h5> : <Table removeItem={removeItem} data={data}/>}
  </React.Fragment>
}

const mapStateToProps = ({ list }) => ({ list })

const mapDispatchToProps = dispatch => ({
  initList: () => dispatch(initList()),
  removeItem: id => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
