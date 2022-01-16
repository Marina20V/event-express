const isclickReducer = (state = false, action) => {

    switch(action.type) {
        case 'click':
            return !state;
        case '':
            default: 
            return state;
        }
};

export default isclickReducer;