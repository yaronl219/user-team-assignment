import { Card } from '@material-ui/core'
import React, { useMemo } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { connect } from 'react-redux'
import { ExpandedUserPreview } from '../ExpandedUserPreview/ExpandedUserPreview'
import { MinifiedUserPreview } from '../MinifiedUserPreview/MinifiedUserPreview'
import { UserAvatar } from '../UserAvatar/UserAvatar'

function _UserPreview({ user, idx, draggedElement, isTeamMember, isTeamHidden }) {

  const isDraggedElement = useMemo(() => {
    return draggedElement && draggedElement.draggableId === user._id
  }, [draggedElement, user._id])

  const isExpandedView = useMemo(() => {
    return !!(isTeamMember || isDraggedElement)
  }, [isTeamMember, isDraggedElement])

  const getClasses = () => {
    let basicClassArr = ['user-preview-container']
    basicClassArr.push(isExpandedView ? 'user-preview-expanded' : 'user-preview-not-expanded')
    basicClassArr.push(isDraggedElement ? 'user-preview-dragged' : 'user-preview-not-dragged')
    basicClassArr.push((!isDraggedElement && isTeamHidden) ? 'user-preview-hidden' : '' )
    return basicClassArr.join(' ')
  }

  return (
    <Draggable draggableId={user._id} index={idx}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card className={getClasses()} elevation={isDraggedElement ? 2 : 0} square={true}>
            {/* <UserAvatar displayName={user.machineSignature.displayUserName} /> */}
            {isExpandedView ? <ExpandedUserPreview user={user} /> : <MinifiedUserPreview user={user} />}
          </Card>
        </div>
      )}
    </Draggable>

  )
}

const mapStateToProps = state => {
  return {
    draggedElement: state.viewElementsReducer.draggedElement
  }
}

export const UserPreview = connect(mapStateToProps)(_UserPreview);

