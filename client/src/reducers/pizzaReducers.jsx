export const getAllPizzasReducer = (state = { pizzas: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case 'GET_PIZZAS_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'GET_PIZZAS_SUCCESS':
            return {
                loading: false,
                pizzas: action.payload
            };
        case 'GET_PIZZAS_FAILED':
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}


export const getPizzaByIdReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_PIZZABYID_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_PIZZABYID_SUCCESS': return {
            loading: false,
            pizza: action.payload
        }
        case 'GET_PIZZABYID_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}


export const addPizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'ADD_PIZZA_SUCCESS':
            return {
                loading: false,
                success: true
            };
        case 'ADD_PIZZA_FAILED':
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export const editPizzaReducer = (state = {}, action) => {

    switch (action.type) {
        case 'EDIT_PIZZA_REQUEST': return {
            editloading: true,
            ...state
        }
        case 'EDIT_PIZZA_SUCCESS': return {
            editloading: false,
            editsuccess: true,
        }
        case 'EDIT_PIZZA_FAILED': return {
            editerror: action.payload,
            editloading: false
        }
        default: return state
    }

}