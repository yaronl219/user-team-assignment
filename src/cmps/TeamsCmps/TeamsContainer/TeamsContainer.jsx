import React from 'react'
import {connect} from "react-redux";
import { CreateTeam } from '../CreateTeam/CreateTeam';
import {SingleTeamContainer} from '../SingleTeamContainer/SingleTeamContainer';

function _TeamsContainer({teams}) {
    return (
        <div className="teams-container">
            {teams.map((team)=> <SingleTeamContainer team={team} key={team.tenantId} />)}
            <CreateTeam />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        teams: state.assignedTeamsReducer.teams
    }
}

const mapDispatchToProps = {

}

export const TeamsContainer = connect(mapStateToProps,mapDispatchToProps)(_TeamsContainer);

