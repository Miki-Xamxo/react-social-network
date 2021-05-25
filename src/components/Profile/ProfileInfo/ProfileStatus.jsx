import React from 'react'

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activeteEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactiveteEditMode = () => {
    this.setState({
      editMode: false,
      // status: this.props.status
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }

  }

  render(){
    return <div>
      {
        this.state.editMode 
        ? <div>
            <input onChange={this.onStatusChange}  autoFocus={true} onBlur={this.deactiveteEditMode} type="text" value={this.state.status}/>
          </div> 
        : <div>
            <span onDoubleClick={this.activeteEditMode}>{this.props.status || '----'}</span>
          </div>
      }
    </div>
  }
}

export default ProfileStatus