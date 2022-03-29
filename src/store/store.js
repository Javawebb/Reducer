const ADD_USER = "ADD_USER"


const reducer = (state,action) => {
    switch (action.type) {
        case ADD_USER:return
    }
}
const plusAction = {
    type: PLUS
}
const minusAction = {
    type: MINUS
}
const resetAction = {
    type:RESET
}

export {
    reducer,plusAction,minusAction,resetAction
}