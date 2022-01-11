// import {SEARCH} from '../actions/index';


// const [events, setEvent] = useState([]);
 
//     const getEvents = async () => {
//         const response = await axios.get('http://localhost:5000/events');
//         setEvent(response.data);
//     }
 
//     useEffect(() => {
//         getEvents();
//     }, []);


// const initialState = {
//   text: ''
//   // events: events,
//   // loading: false,
//   // event: []
// }
// const searchReducer = (state = initialState, action={}) => {

//   switch(action.type) {
//     case SEARCH:
//       return { 
//         ...state,
//         text: action.payload,
//     }
//     default:
//       return state;
//   }
//  }
// export default searchReducer;