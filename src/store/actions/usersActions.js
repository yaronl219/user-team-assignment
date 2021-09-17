import { userService } from "../../services/userService"
import {assignedTeamsReducerActions} from '../reducers/assignedTeamsReducer'
import {unassignedUsersReducerActions} from '../reducers/unassignedUsersReducer'

export function setUsers({skip, limit, textFilter, filterParam, team, sortBy}) {
    return async dispatch => {
        try {
            const unassignedUsers = await userService.getUnassignedUsers({skip, limit, textFilter, filterParam, team, sortBy})
            dispatch({type: unassignedUsersReducerActions.setTextFilter, payload: {textFilter}})
            dispatch({type: unassignedUsersReducerActions.setUnassignedUsers, payload: {unassignedUsers}})
        } catch (err) {
            console.error(err)
        }
    }
}

export function setTeams() {
    return async dispatch => {
        try {
            const teams = await userService.getTeams()
            dispatch({type: assignedTeamsReducerActions.setTeams, payload: {teams}})
        } catch (err) {
            console.error(err)
        }
    }
}

export function moveUserInTeam({teamId, sourceIdx, destinationIdx}) {
    return dispatch => {
        try {
            const dispatchType = teamId === 'unassigned' ? unassignedUsersReducerActions.moveUnassignedUserInTeam : assignedTeamsReducerActions.moveAssignedUser

            dispatch({type: dispatchType, payload: {teamId, sourceIdx, destinationIdx}})
        } catch (err) {
            console.error(err)
        }
    }
}

export function assignUser({targetTeamId, destinationIdx, user}) {
    return dispatch => {
        try {
            runActionAsync(() => userService.assignUserToNewTeam({teamId: targetTeamId, userId: user._id}))
            dispatch({type: assignedTeamsReducerActions.addNewUserToTeam, payload: {destinationIdx, user, teamId: targetTeamId}})
            dispatch({type: unassignedUsersReducerActions.onAssignUser, payload: {userId : user._id}})
        } catch (err) {
            console.error(err)
        }
    }
}

export function unAssignUser({user, destinationIdx, sourceTeamId}) {
    return dispatch => {
        try {
            runActionAsync(() => userService.unAssignUser(user._id))
            dispatch({type: assignedTeamsReducerActions.unAssignUser, payload: {userId: user._id, sourceTeamId}})
            dispatch({type: unassignedUsersReducerActions.unAssignUser, payload: {user, destinationIdx}})
        } catch (err) {
            console.error(err)
        }
    }
}

export function createNewTeam(teamName) {
    return async dispatch => {
        try {
            const newTeam = await userService.createNewTeam(teamName)
            dispatch({type: assignedTeamsReducerActions.addNewTeam, payload: {newTeam}})
        } catch (err) {
            console.error(err)
        }
    }
}

export function moveUserToDifferentTeam({srcTeamId, targetTeamId, sourceIdx, destinationIdx, userId}) {
    
    // try {
    //     dispatch({type: assignedTeamsReducerActions.})
    // } catch (err) {
    //     console.error(err)
    // }
}

async function runActionAsync(fn, onError = (e) => console.error(e)) {
    try {
        await fn()
    } catch (e) {
        onError(e)
    }
} 