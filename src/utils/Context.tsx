import { createContext, useContext, useReducer } from "react";
import { Action, TicketState } from "./Types&Interfaces";

const initialState: TicketState = {
    cart: [],
    user: null,
    notifications: [],
  };
  
  const TicketContext = createContext<{
    state: TicketState;
    dispatch: React.Dispatch<Action>;
  }>({ state: initialState, dispatch: () => null });
  
  const ticketReducer = (state: TicketState, action: Action): TicketState => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.payload] };
      case 'REMOVE_FROM_CART':
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'ADD_NOTIFICATION':
        return {
          ...state,
          notifications: [...state.notifications, { id: Date.now().toString(), ...action.payload }],
        };
      case 'REMOVE_NOTIFICATION':
        return {
          ...state,
          notifications: state.notifications.filter(n => n.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export const TicketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(ticketReducer, initialState);
    return (
      <TicketContext.Provider value={{ state, dispatch }}>
        {children}
      </TicketContext.Provider>
    );
  };
  
  export const useTicketContext = () => useContext(TicketContext);