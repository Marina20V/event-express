const isclickReducer = (state=false, action) => {

    switch(action.type) {
        case 'CLICK':
            return state;
        case '':
            default: 
            return !state;
        }
};

export default isclickReducer;