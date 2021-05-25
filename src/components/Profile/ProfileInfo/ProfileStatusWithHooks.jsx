import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  const  activeteEditMode = () => {
    setEditMode(true)
  }

  const deactiveteEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  // useEffect({

  // }, [])

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

    return <div>
      {
        editMode 
        ? <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactiveteEditMode} value={status}/>
          </div> 
        : <div>
            <span onDoubleClick={activeteEditMode}>{props.status || '----'}</span>
          </div>
      }
    </div>
}

export default ProfileStatusWithHooks