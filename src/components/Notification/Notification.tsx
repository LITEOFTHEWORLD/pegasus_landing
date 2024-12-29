import { useEffect } from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { useTicketContext } from '../../utils/Context';

const Notification = () => {
  const { state, dispatch } = useTicketContext();

  useEffect(() => {
    if (state.notifications.length > 0) {
      const timer = setTimeout(() => {
        dispatch({ 
          type: 'REMOVE_NOTIFICATION', 
          payload: state.notifications[0].id 
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.notifications]);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {state.notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex items-center p-4 rounded-lg shadow-lg ${
            notification.type === 'success' ? 'bg-green-500' :
            notification.type === 'error' ? 'bg-red-500' :
            'bg-yellow-500'
          } text-white`}
        >
          {notification.type === 'success' && <CheckCircle className="w-5 h-5 mr-2" />}
          {notification.type === 'error' && <XCircle className="w-5 h-5 mr-2" />}
          {notification.type === 'warning' && <AlertCircle className="w-5 h-5 mr-2" />}
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notification;