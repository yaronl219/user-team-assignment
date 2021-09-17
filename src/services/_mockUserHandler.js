import { storageService } from "./storageService"
import {mockUserGenerator} from './_mockUserGenerator'

const LAG_IN_MS = 200

const createNewTeam = async(teamName) => {
    const newTeam = _generateTeamProtoObject(teamName)
    newTeam.tenant = teamName.toLowerCase()
    const teams = storageService.loadFromStorage('mockTeams')
    debugger
    teams.push(newTeam)
    storageService.saveToStorage('mockTeams', teams)

    return _lagMock(newTeam)
}
const getMockUsers = async ({ skip, textFilter = '', filterParam, team, sortBy }) => {
    let mockUsers = storageService.loadFromStorage('mockUsers')
    const amountOfMockUsers = _getAmountOfMockUsers()
    if (!mockUsers || mockUsers.length !== amountOfMockUsers) {
        mockUsers = mockUserGenerator.generateMockUsers(amountOfMockUsers)
        storageService.saveToStorage('mockUsers', mockUsers)
    }

    const unassignedMockUsers = mockUsers.filter(user => user.tenant === 'unassigned')
    const filteredUnassignedMockUsers = unassignedMockUsers.filter(user => user.machineSignature.displayUserName.includes(textFilter))
    return _lagMock(filteredUnassignedMockUsers)

}

const getMockTeams = async () => {
    let mockTeams = storageService.loadFromStorage('mockTeams')
    if (!mockTeams) {
        mockTeams = await _getMockTeamsFromRobotData()
        storageService.saveToStorage('mockTeams', mockTeams)
    }

    return _lagMock(mockTeams)
}

const assignUserToTeam = async({teamId, userId}) => {
    const users = storageService.loadFromStorage('mockUsers')
    const teams = storageService.loadFromStorage('mockTeams')

    const selectedUserIdx = users.findIndex(user => user._id === userId)
    const selectedTeamIdx = teams.findIndex(team => team.tenantId === teamId)

    if (selectedUserIdx === -1 || selectedTeamIdx === -1) return console.error('Cannot find user or team',`userId: ${userId} teamId: ${teamId}`)
    
    teams[selectedTeamIdx].users.push(users[selectedUserIdx])
    users[selectedUserIdx].tenant = teams[selectedTeamIdx].tenant

    storageService.saveToStorage('mockUsers', users)
    storageService.saveToStorage('mockTeams', teams)

    return _lagMock(true)
} 

const unAssignUser = (userId) => {
    const users = storageService.loadFromStorage('mockUsers')
    const teams = storageService.loadFromStorage('mockTeams')

    const selectedUserIdx = users.findIndex(user => user._id === userId)
    const selectedTeamIdx = teams.findIndex(team => team.tenant === users[selectedUserIdx].tenant)

    if (selectedUserIdx === -1 || selectedTeamIdx === -1) return console.error('Cannot find user',`userId: ${userId}`)

    teams[selectedTeamIdx].users = teams[selectedTeamIdx].users.filter(user => user._id !== userId)
    users[selectedUserIdx].tenant = 'unassigned'

    storageService.saveToStorage('mockUsers', users)
    storageService.saveToStorage('mockTeams', teams)

    return _lagMock(true)
}

 
const _getMockTeamsFromRobotData = async () => {
    const mockUsers = await getMockUsers({})
    const teamsObject = {
        default: _generateTeamProtoObject()
    }

    mockUsers.forEach(user => {
        const {tenant} = user
        if (!tenant || tenant === 'unassigned') return
        if (!teamsObject[tenant]) teamsObject[tenant] = _generateTeamProtoObject()
        teamsObject[tenant].users.push(user)
    })


    return Object.keys(teamsObject).map(team => {
        return {
            tenant: team,
            tenantId: teamsObject[team].tenantId,
            displayName: teamsObject[team].displayName,
            users: teamsObject[team].users
        }
    })

}

const _generateTeamProtoObject = (displayName = 'Default') => {
    return {
        tenantId: mockUserGenerator.getMockUserId(),
        displayName,
        users: []
    }
}


const _getAmountOfMockUsers = () => {
    let mockUsersAmount = storageService.loadFromStorage('mockUsersAmount')
    if (!mockUsersAmount) {
        mockUsersAmount = '10'
        storageService.saveToStorage('mockUsersAmount', mockUsersAmount)
    }
    return +mockUsersAmount
}


const _lagMock = async (result) => {
    return new Promise(res => {
        setTimeout(() => {
            console.log('got res')
            res(result)
        }, LAG_IN_MS)
    })
}


export const mockUserHandler = {
    getMockUsers,
    getMockTeams,
    assignUserToTeam,
    unAssignUser,
    createNewTeam
}