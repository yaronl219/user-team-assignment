import { utilsService } from "../../services/utilsService";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    teams: [],
};

export const assignedTeamsReducerActions = {
    moveAssignedUser: 'MOVE_ASSIGNED_USER_IN_TEAM',
    moveAssignedUserToDifferentTeam: 'MOVE_ASSIGNED_USER_TO_DIFFERENT_TEAM',
    addNewUserToTeam: 'ADD_NEW_USER_TO_TEAM',
    setTeams: 'SET_TEAMS',
    unAssignUser: 'UNASSIGN_USER_FROM_TEAM',
    addNewTeam: 'ADD_NEW_TEAM'
}

export default function (state = initialState, action = {}) {
    const { setTeams, moveAssignedUser, moveAssignedUserToDifferentTeam, addNewTeam, unAssignUser, addNewUserToTeam } = assignedTeamsReducerActions

    switch (action.type) {
        case setTeams: {
            const { teams } = action.payload
            return { ...state, teams };
        }

        case moveAssignedUser: {
            const { teamId, sourceIdx, destinationIdx } = action.payload
            const teams = [...state.teams]
            const currTeamIdx = teams.findIndex(team => team.tenantId === teamId)
            if (currTeamIdx === -1) return state

            teams[currTeamIdx].users = utilsService.moveItemInArray(teams[currTeamIdx].users, sourceIdx, destinationIdx)

            return { ...state, teams }
        }

        case addNewUserToTeam: {
            const { teamId, destinationIdx, user } = action.payload
            const teams = [...state.teams]
            const currTeamIdx = teams.findIndex(team => team.tenantId === teamId)
            if (currTeamIdx === -1) return state

            teams[currTeamIdx].users.splice(destinationIdx, 0, user)
            return { ...state, teams }
        }

        case unAssignUser: {
            const { userId, sourceTeamId } = action.payload
            const teams = state.teams.map(team => {
                if (team.tenantId !== sourceTeamId) return team
                team.users = team.users.filter(user => user._id !== userId)
                return team
            })
            return { ...state, teams }

        }

        case addNewTeam: {
            const { newTeam } = action.payload
            const teams = [...state.teams, newTeam]
            debugger
            return { ...state, teams }
        }
        // case moveAssignedUserToDifferentTeam: {
        //     const 
        // }

        default:
            return state;
    }
}

