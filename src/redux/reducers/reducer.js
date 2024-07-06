const initialState = {
    token: null,
    tabPosition: 0,
    numberOrders: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TOKEN':
            return {
                ...state,
                token: action.payload,
            };
        case 'TAB_POSITION':
            return {
                ...state,
                tabPosition: action.payload,
            };
        case 'NUMBER_ORDERS':
            return {
                ...state,
                numberOrders: action.payload,
            };
        default:
            return state;
    }
};