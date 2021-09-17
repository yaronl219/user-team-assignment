import { Accordion, AccordionDetails, AccordionSummary, IconButton } from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'
import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { UserPreview } from '../../UserCmps/UserPreview/UserPreview'
import { AssignSilhouette } from '../AssignSilhouette/AssignSilhouette'
import { TeamActionBtns } from '../TeamActionBtns/TeamActionBtns'

export function SingleTeamContainer({ team }) {

    const [isAccordionOpen, setIsAccordionOpen] = useState(true)



    return (
        <Accordion expanded={isAccordionOpen}>
            <AccordionSummary>
                <div className="accordion-header-container">
                    <div className="header">
                        {team.displayName}
                    </div>
                    <div className="icon-container">
                        <TeamActionBtns team={team} />
                        <div className="chevron-container">
                            <div className={`chevron-point-${isAccordionOpen ? 'up' : 'down'}`}>
                                <IconButton onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
                                    <ChevronLeft />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <Droppable droppableId={team.tenantId} isDropDisabled={!isAccordionOpen}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={`droppable-team-container ${snapshot.isDraggingOver ? 'droppable-team-container-dragged-over' : ''}`}
                        >
                            {/* {snapshot.isDraggingOver ?  */}
                            {/* <div>DRAG!</div> :  */}
                            {snapshot.isDraggingOver && <AssignSilhouette teamDisplayName={team.displayName} />}
                            {team.users.map((user, idx) => <UserPreview user={user} key={user._id} idx={idx} isTeamMember={true} isTeamHidden={snapshot.isDraggingOver} />)}

                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </AccordionDetails>
        </Accordion>
    )
}


