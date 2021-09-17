import { useEffect } from 'react';
import {connect} from "react-redux";
import React from 'react';
import { setTeams, setUsers } from './store/actions/usersActions';
import { UsersView } from './pages/UsersView/UsersView';
import './global.scss'

function _App(props) {
  useEffect(() => {
    appInit()
  }, [])
  
  const appInit = () => {
    props.setTeams()
    props.setUsers({})
  } 

  return (
    <div className="App">
      <UsersView />
    </div>
  );
}

const mapStateToProps = state => state

const mapDispatchToProps = {
  setTeams,
  setUsers
}

export const App = connect(mapStateToProps,mapDispatchToProps)(_App);

