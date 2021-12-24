const buttonReducer = (state=true, action) => {

    switch(action.type) {
        case 'SIGN_UP':
            return state;
        case '':
            default: 
            return !state;
            }
};

export default buttonReducer;