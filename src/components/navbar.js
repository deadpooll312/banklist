import React, { useEffect } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// local files
import { updateUser, clearUser } from '../store/user/user.actions'
import { ID_TOKEN } from '../constants'

function Navbar (props) {
  const { updateUser, user, clearUser } = props
  const { location } = window

  useEffect(() => {
    const token = localStorage.getItem(ID_TOKEN)
    if (token) {
      updateUser()
    }
  }, [updateUser])

  function getActiveClass (path) {
    return `nav-link ${location.pathname === path ? 'active' : ''}`
  }

  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={getActiveClass('/list')} to="/list">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={getActiveClass('/create')} to="/create">Create</NavLink>
        </li>
      </ul>
    </div>
    <h5>Username: <b className="active">{user.data.name}</b> <Link to="/login" onClick={clearUser}>Logout</Link></h5>
  </nav>
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = dispatch => ({
  updateUser: () => dispatch(updateUser()),
  clearUser: () => dispatch(clearUser())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))
