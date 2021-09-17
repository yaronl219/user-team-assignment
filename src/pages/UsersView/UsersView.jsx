import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { TeamsContainer } from '../../cmps/TeamsCmps/TeamsContainer/TeamsContainer'
import { UnassignedUsersList } from '../../cmps/UnassignedCmps/UnassignedUsersList/UnassignedUserList'
import { connect } from "react-redux";
import { moveUserInTeam, moveUserToDifferentTeam, assignUser, unAssignUser } from '../../store/actions/usersActions';
import { Drawer } from '@material-ui/core';
import { setDraggedElement } from '../../store/actions/viewElementsActions';

function _UsersView({ unassignedUsers, moveUserInTeam, moveUserToDifferentTeam, assignUser, unAssignUser, setDraggedElement, teams }) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(true)

    const onToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const onDragStart = (dragEv) => {
        console.log('drag start', dragEv)
        // const draggableId = dragEv || null
        setDraggedElement(dragEv)
    }

    const onDragEnd = (dragEv) => {

        setDraggedElement(null)
        console.log(dragEv)
        const { source, destination, draggableId: userId } = dragEv
        if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) return // no move has happened

        if (source.droppableId === destination.droppableId) {
            onMoveItemInSameGroup(source.droppableId, source.index, destination.index)
            return
        }

        if (source.droppableId === 'unassigned') {
            onAssignUser(destination.droppableId, destination.index, userId)
            return
        }

        if (destination.droppableId === 'unassigned') {
            onUnassignUser(userId, destination.index, source.droppableId)
        }
        // moveUserToDifferentTeam({srcTeamId: source.droppableId, targetTeamId: destination.droppableId, sourceIdx: source.index, destinationIdx: destination.index, userId: draggableId})
    }

    const onAssignUser = (targetTeamId, destinationIdx, userId) => {
        const user = unassignedUsers.find(_user => _user._id === userId)
        assignUser({ targetTeamId, destinationIdx, user })
        return
    }

    const onUnassignUser = (userId, destinationIdx, sourceTeamId) => {
        const user = getUserFromTeam(userId, sourceTeamId)
        unAssignUser({ user, destinationIdx, sourceTeamId })
    }

    const onMoveItemInSameGroup = (teamId, sourceIdx, destinationIdx) => {
        moveUserInTeam({ teamId, sourceIdx, destinationIdx })
    }

    const getUserFromTeam = (userId, teamId) => {
        const selectedTeam = teams.find(team => team.tenantId === teamId)
        if (!selectedTeam || !selectedTeam.users) return null
        return selectedTeam.users.find(user => user._id === userId)
    }

    return (
        <div>
            <div className="top">

            </div>
            <div className="main">
                <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
                    <div className="assigned-teams-container" style={{ marginRight: '22rem' }}>
                        <TeamsContainer />
                    </div>
                    <div className="unassigned-teams-container">
                        <Drawer anchor={'right'} open={isDrawerOpen} variant={'persistent'}>
                            <UnassignedUsersList onToggleDrawer={onToggleDrawer} />
                        </Drawer>
                    </div>
                </DragDropContext>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        unassignedUsers: state.unassignedUsersReducer.unassignedUsers,
        teams: state.assignedTeamsReducer.teams
    }
}

const mapDispatchToProps = {
    moveUserInTeam,
    moveUserToDifferentTeam,
    assignUser,
    unAssignUser,
    setDraggedElement
}

export const UsersView = connect(mapStateToProps, mapDispatchToProps)(_UsersView);

