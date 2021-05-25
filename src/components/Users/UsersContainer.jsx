import React from 'react'
// import * as axios from 'axios'
import Users from './Users'
import { connect } from "react-redux";
import { setCurrentPage,follow, unFollow, requestUsers} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { withRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import {  getUsers, getPageSize, getTotalUsersCount, 
          getCurrentPage, getIsFetching, getFollowingInPropgress } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
  }
  render(){
    return <>
    { this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  followingInPropgress={this.props.followingInPropgress}
                  follow={this.props.follow}
                  unFollow={this.props.unFollow}
                  
      />
    </>
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInPropgress: state.usersPage.followingInPropgress
//   }
// }

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInPropgress: getFollowingInPropgress(state)
  }
}

export default compose(
  connect(mapStateToProps, { setCurrentPage, follow, unFollow, requestUsers}),
  withRedirect,
)(UsersContainer) 
