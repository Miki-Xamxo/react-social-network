import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInPropgress: []
}

const usersReducer = (state = initialState, action) => {
  switch(action.type){
      case FOLLOW:  
        return {
          ...state,
          users: updateObjectInArray(state.users, action.userId, { followed: true } )
          // users: state.users.map(u => {
          //   if(u.id === action.userId){
          //     return{...u, followed: true}
          //   }
          //   return u;
          // })
        }
        
      case UNFOLLOW:
        return {
          ...state,
          users: updateObjectInArray(state.users, action.userId, { followed: false } )
          // users: state.users.map(u => {
          //   if(u.id === action.userId){
          //     return{...u, followed: false}
          //   }
          //   return u;
          // })
        }
      case SET_USERS: {
        return { ...state, users: [ ...action.users]}
      }
      case SET_CURRENT_PAGE:{
        return {...state, currentPage: action.currentPage}
      }
      case SET_TOTAL_USERS_COUNT:{
        return {...state,  totalUsersCount: action.totalCount}
      }
      case TOGGLE_IS_FETCHING:
        return{
          ...state,
          isFetching: action.isFetching
        }
      case TOGGLE_IS_FOLLOWING_PROGRESS:
        return{
          ...state,
          followingInPropgress: action.disabled
            ? [...state.followingInPropgress, action.userId]
            : state.followingInPropgress.filter(id => id !== action.userId)
        }
      default:
        return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (disabled, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, disabled, userId})

export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    usersAPI.getUsers(page, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreater) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
      if(data.resultCode === 0){
        dispatch(actionCreater(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess )
}

export const unFollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unfollowSuccess)
}

// export const unFollow = (usersId) => {
//   return (dispatch) => {
//     dispatch(toggleFollowingProgress(true, usersId))
//       usersAPI.unFollow(usersId).then(data => {
//         if(data.resultCode === 0){
//           dispatch(unfollowSuccess(usersId))
//         }
//         dispatch(toggleFollowingProgress(false, usersId))
//       })
//   }
// }

export default usersReducer