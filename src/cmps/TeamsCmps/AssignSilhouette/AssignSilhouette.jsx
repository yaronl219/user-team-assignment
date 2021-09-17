import React, { useMemo } from 'react'
import { connect } from 'react-redux'

const _AssignSilhouette = ({ teamDisplayName, draggedElement, unassignedUsers, teams }) => {

    const username = useMemo(() => {
        const getUsernameByIdFromTeam = (userId, selectedTeam) => {
            const selectedUser = selectedTeam.find(user => user._id === userId)
            return selectedUser.machineSignature.displayUserName
        }

        const getUsernameById = () => {
            console.log(draggedElement)
            const sourceTeam = (draggedElement.source.droppableId === 'unassigned') ? unassignedUsers :
                teams.find(team => team.tenantId === draggedElement.source.droppableId)
            return getUsernameByIdFromTeam(draggedElement.draggableId, sourceTeam)
        }

        try {
            return getUsernameById()
        } catch {
            return ''
        }
    }, [draggedElement, unassignedUsers, teams])

    const isAssigning = useMemo(() => {
        return teamDisplayName !== 'unassigned'
    }, [teamDisplayName])

    return (
        <div className="assign-silhouette-container">
            {`${isAssigning ? 'Assign' : 'Unassign'} ${username} ${isAssigning ? `to ${teamDisplayName}` : ''}`}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        draggedElement: state.viewElementsReducer.draggedElement,
        unassignedUsers: state.unassignedUsersReducer.unassignedUsers,
        teams: state.assignedTeamsReducer.teams
    }
}

export const AssignSilhouette = connect(mapStateToProps)(_AssignSilhouette)

