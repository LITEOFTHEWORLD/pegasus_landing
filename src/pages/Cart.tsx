import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import { useTicketContext } from '../utils/Context';

const Cart = () => {
  const { state, dispatch } = useTicketContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleCheckout = () => {
    // Add checkout logic here
    setIsModalOpen(true);
    // Clear cart after successful purchase
  };

  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {state.cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {state.cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">${item.price}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <button
                onClick={handleCheckout}
                className="mt-4 w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Purchase Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your tickets have been sent to your email.
          </p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;