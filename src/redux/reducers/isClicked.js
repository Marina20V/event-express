const isclickReducer = (state = false, action) => {

    switch(action.type) {
        case 'test_action':
            return !state;
        case '':
            default: 
            return state;
        }
};

export default isclickReducer;