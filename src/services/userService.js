import { mockUserHandler } from "./_mockUserHandler"


const getUnassignedUsers = async ({skip, textFilter, filterParam, team, sortBy}) => {
        return await mockUserHandler.getMockUsers({skip, textFilter, filterParam, team, sortBy})
}

const getTeams = async() => {
    return await mockUserHandler.getMockTeams()
}

const assignUserToNewTeam = async({teamId, userId}) => {
    return await mockUserHandler.assignUserToTeam({teamId, userId})
}

const unAssignUser = async(userId) => {
    return await mockUserHandler.unAssignUser(userId)
}

const createNewTeam = async(teamName) => {
    return await mockUserHandler.createNewTeam(teamName)
}

export const userService = {
    getUnassignedUsers,
    getTeams,
    assignUserToNewTeam,
    unAssignUser,
    createNewTeam
}