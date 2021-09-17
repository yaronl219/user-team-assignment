import { utilsService } from "../../services/utilsService";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    unassignedUsers: [],
    textFilter: '',
}

export const unassignedUsersReducerActions = {
    setUnassignedUsers: 'SET_UNASSIGNED_USERS',
    moveUnassignedUserInTeam: 'MOVE_UNASSIGNED_USER_IN_TEAM',
    unAssignUser: 'UNASSIGN_USER',
    onAssignUser: 'ASSIGN_USER',
    setTextFilter: 'SET_TEXT_FILTER'
}

export default function (state = initialState, action = {}) {
    const { setUnassignedUsers, moveUnassignedUserInTeam, unAssignUser, onAssignUser, setTextFilter } = unassignedUsersReducerActions
    switch (action.type) {
        case setUnassignedUsers: {
            const { unassignedUsers } = action.payload
            return { ...state, unassignedUsers };
        }

        case moveUnassignedUserInTeam: {
            const { sourceIdx, destinationIdx } = action.payload
            const unassignedUsers = utilsService.moveItemInArray(state.unassignedUsers, sourceIdx, destinationIdx)
            return { ...state, unassignedUsers }
        }

        case onAssignUser: {
            const { userId } = action.payload
            const unassignedUsers = state.unassignedUsers.filter(user => user._id !== userId)
            return { ...state, unassignedUsers }
        }

        case unAssignUser: {
            const { user, destinationIdx } = action.payload
            user.tenant = 'unassigned'
            const unassignedUsers = [...state.unassignedUsers]
            unassignedUsers.splice(destinationIdx, 0, user)
            return { ...state, unassignedUsers }
        }

        case setTextFilter: {
            const {textFilter} = action.payload
            return {...state, textFilter}
        }

        default:
            return state;
    }
}

