import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTicketContext } from '../utils/Context';

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useTicketContext();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add actual authentication logic here
    dispatch({ 
      type: 'SET_USER', 
      payload: { email: formData.email, id: '1' } 
    });
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: { type: 'success', message: 'Successfully logged in!' }
    });
    navigate('/events');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6 flex flex-col gap-2.5 bg-white w-[450px] p-[30px] rounded-[20px]" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-5">
          <label>Email </label>
            <div className='h-[50px] flex items-center transition-[0.2s] duration-[ease-in-out] pl-2.5 rounded-[10px] border-[1.5px] border-solid border-[#ecedec]'>
            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
              <input
                type="email"
                required
                className="focus:z-10 sm:text-sm w-[85%] h-full ml-2.5 rounded-[10px] border-[none] outline-none bg-transparent"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className='mt-10'>
              <label>Password </label>
              <div className="h-[50px] flex items-center transition-[0.2s] duration-[ease-in-out] pl-2.5 rounded-[10px] border-[1.5px] border-solid border-[#ecedec]">
                <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>
                <input
                    type="password"
                    required
                    className="focus:z-10 sm:text-sm w-[85%] h-full ml-2.5 rounded-[10px] border-[none] outline-none bg-transparent"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                /> 
                        <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
              </div>
  
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#ED2839] text-[white] text-[15px] font-medium h-[50px] w-full cursor-pointer mt-5 mb-2.5 mx-0 rounded-[10px] border-[none]"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-red-600 hover:text-red-500">
              Sign up
            </Link>
          </p>


           <p className="text-gray-600 text-xs">Or With</p>

            <div className="flex justify-center gap-24">
                <button className="w-full h-[50px] flex justify-center items-center font-medium gap-2.5 border bg-[white] cursor-pointer transition-[0.2s] duration-[ease-in-out] mt-2.5 rounded-[10px] border-solid border-[#ededef]">
                    <svg width={20} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                        <path
                            d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                            fill="#fbbb00"
                        />
                        <path
                            d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                            fill="#518ef8"
                        />
                        <path
                            d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                            fill="#28b446"
                        />
                        <path
                            d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                            fill="#f14336"
                        />
                        </svg>

                    Google 
                </button>
                <button className="w-full h-[50px] flex justify-center items-center font-medium gap-2.5 border bg-[white] cursor-pointer transition-[0.2s] duration-[ease-in-out] mt-2.5 rounded-[10px] border-solid border-[#ededef]">
                    <svg
                        height={20}
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 22.773 22.773"
                        xmlSpace="preserve"
                        >
                        <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zM20.67 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" />
                        </svg>

                    Apple 
                    
                </button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;