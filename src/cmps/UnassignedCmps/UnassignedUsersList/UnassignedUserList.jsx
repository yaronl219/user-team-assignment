import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { connect } from "react-redux";
import { AssignSilhouette } from '../../TeamsCmps/AssignSilhouette/AssignSilhouette';
import { UserPreview } from '../../UserCmps/UserPreview/UserPreview';
import { UnassignedListHeader } from '../UnassignedListHeader/UnassignedListHeader';

function _UnassignedUsersList({ onToggleDrawer, unassignedUsers = [] }) {


    return (
        <div className="unassigned-user-container">
            <UnassignedListHeader onToggleDrawer={onToggleDrawer} />
            <Droppable droppableId="unassigned">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {(snapshot.isDraggingOver || !unassignedUsers.length) && <AssignSilhouette teamDisplayName={'unassigned'} />}
                        <div className="unassigned-user-list">{unassignedUsers.map((user, idx) => <UserPreview user={user} key={user._id} idx={idx} isTeamHidden={snapshot.isDraggingOver} />)}</div>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        unassignedUsers: state.unassignedUsersReducer.unassignedUsers
    }
}

const mapDispatchToProps = {

}

export const UnassignedUsersList = connect(mapStateToProps, mapDispatchToProps)(_UnassignedUsersList);

