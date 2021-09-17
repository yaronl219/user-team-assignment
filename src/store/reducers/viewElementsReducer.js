const initialState = {
    draggedElement: null,
    minifiedUserPreviewSelectedDisplayParam: 'machineSignature.displayUserName'
};

export const viewElementsReducerActions = {
    setDraggedElement: 'SET_DRAGGED_ELEMENT',
    setUserPreviewSelectedDisplayParam: 'SET_MINIFIED_PREVIEW_SELECTED_DISPLAY_PARAM'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action = {}) {
    const { setDraggedElement, setUserPreviewSelectedDisplayParam } = viewElementsReducerActions
    switch (action.type) {
        case setDraggedElement: {
            const draggedElement = action.payload.element
            return { ...state, draggedElement };
        }

        case setUserPreviewSelectedDisplayParam: {
            const minifiedUserPreviewSelectedDisplayParam = action.payload.minifiedUserPreviewSelectedDisplayParam
            return { ...state, minifiedUserPreviewSelectedDisplayParam };
        }

        default:
            return state;
    }
}