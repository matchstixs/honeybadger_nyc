import axios from 'axios';

export const fetchUserType = 'FETCH_USER_FULFILLED';

export function fetchUser() {
    return {
        type: fetchUserType,
        payload: {
            name: 'Will',
            age: 99
        }
    }
}

export const creatingUserType = 'CREATING_USER';
export const userCreatedType = 'USER_CREATED';
export const userCreationError = 'USER_CREATION_ERROR';


export function createUser(data) {
    return function(dispatch) {
        dispatch({ type: creatingUserType });
        axios.post('/users/signup', data)
            .then(function(response) {
                // dispatch success action
                dispatch({ type: userCreatedType, payload: response.data })
            })
            .catch(function(err){
                // dispatch err action
                dispatch({ type: userCreationError, payload: err })

            })
    }
}


