import { viewElementsReducerActions } from "../reducers/viewElementsReducer"

export function setDraggedElement(element) {
    return dispatch => {
        dispatch({type: viewElementsReducerActions.setDraggedElement, payload: {element}})
    }
}

export function setMinifiedPreviewSelectedDisplayParam(minifiedUserPreviewSelectedDisplayParam) {
    return dispatch => {
        console.log('value', minifiedUserPreviewSelectedDisplayParam)

        dispatch({type: viewElementsReducerActions.setUserPreviewSelectedDisplayParam, payload: {minifiedUserPreviewSelectedDisplayParam}})
    }
}