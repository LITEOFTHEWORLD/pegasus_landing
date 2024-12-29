

export type TicketState = {
    cart: any[];
    user: any | null;
    notifications: Array<{
      id: string;
      type: 'success' | 'error' | 'warning';
      message: string;
    }>;
  };


  export type Action = 
  | { type: 'ADD_TO_CART'; payload: any }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'SET_USER'; payload: any }
  | { type: 'ADD_NOTIFICATION'; payload: { type: 'success' | 'error' | 'warning'; message: string } }
  | { type: 'REMOVE_NOTIFICATION'; payload: string };


  export type Event = {
    id: string;
    homeTeam: string;
    awayTeam: string;
    competition: string;
    venue: string;
    matchDate: string;
    price: number;
    block: string;
    turnstile: string;
  };

  export type EventProps = {
    id: string;
    title: string;
    date: string;
    image: string;
    price: number;
    startTime: string;
    status: string
  };