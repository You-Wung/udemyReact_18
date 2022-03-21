import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
	reducer: { counter: counterReducer, auth: authReducer },
});


//절대 state의 값을 변경해서는 안된다. (리퍼런스가 아니기에, 기존값 절대 안바뀜)
//const counterReducer = (state = initialState, action) => {
//	if (action.type === "increment") {
//		return {
//			counter: state.counter + 1,
//			showCounter: state.showCounter,
//		};
//	} else if (action.type === 'increase') {
//		return {
//			counter: state.counter + action.amount,
//			showCounter: state.showCounter,
//		}
//	} else if (action.type === "decrement") {
//		return {
//			counter: state.counter - 1,
//			showCounter: state.showCounter,
//		};
//	} else if (action.type === 'toggle') {
//		return {
//			counter: state.counter,
//			showCounter: !state.showCounter,
//		}
//	}
//	return state;
//};


export default store;