import React, { useEffect, useRef, useState } from 'react'


// function App() {

//   const [renderCount, setRenderCount] = useState(1)
//   const  [value, setValue] = useState('initial') 
//   const renderCount = useRef(1)
//   const inputRef = useRef(null)
//   const prevValue = useRef('')

//   useEffect(() => {
//     renderCount.current++
//   })

//   useEffect(() => {
//     prevValue.current = value
//   }, [value])

//   const focus  = () => inputRef.current.focus() 


//   return <div>
//     <h1>Count: {renderCount.current}</h1>
//     <h1>Count: {prevValue.current}</h1>
//     <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value} />
//     <button onClick={focus}>focus</button>
//   </div>
// }

// export default App


import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { getAuthUsersData } from './redux/auth-reducer';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component{

  componentDidMount(){
    this.props.initializeApp()
  }

  render(){

    if(!this.props.initialized) return <Preloader />
  
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
              <Route  path='/profile/:userId?' 
                      render={() => <ProfileContainer />} />
              <Route  path='/dialogs' 
                      render={ () => <DialogsContainer />} />
              <Route  path='/users'
                      render={() => <UsersContainer />}/>        
              <Route path='/News' component={News} />
              <Route path='/Music' component={Music} />
              <Route path='/Settings' component={Settings} />
              <Route  path='/login' 
                      render={ () => <Login />} />
            </div>  
          </div>
      </BrowserRouter> 
    );
  }
}


const mapStateToProps = (state) => {
  return{ 
    initialized: state.app.initialized
  } 
}

export default connect(mapStateToProps, {initializeApp})(App)
