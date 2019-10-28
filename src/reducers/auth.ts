import { Action } from 'redux'

interface Store {
    isAuthenticated: Boolean,
    isLoading: Boolean
}

const initState: Store = {
    isAuthenticated: false,
    isLoading: false
}

const authReducer = (state: Store = initState, { type, paylod }: Action): Store => {
    switch(type){
        default:
            return state;
    }
}

export default authReducer;