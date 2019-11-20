import React from 'react'
import { connect } from 'react-redux'
import SideBar from '../components/SideBar';

class Index extends React.Component {

  render() {
    return <SideBar />
  }
}

export default connect()(Index)