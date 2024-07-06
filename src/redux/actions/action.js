export const setToken = (token) => {
    return {
        type: 'TOKEN',
        payload: token,
    };
};

export const setTabPosition = (tabPosition) => {
    return {
        type: 'TAB_POSITION',
        payload: tabPosition,
    };
};

export const setNumberOrders = (numberOrders) => {
    return {
        type: 'NUMBER_ORDERS',
        payload: numberOrders,
    };
};