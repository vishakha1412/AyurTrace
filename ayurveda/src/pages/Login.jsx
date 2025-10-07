import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8 "  style={{ backgroundImage: "url('/assets/herbs/registerback.jpg')" }}>
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg max-w-md w-full p-8 space-y-6">
        <h2 className="text-center text-2xl font-bold text-green-800">Welcome to AyurTrace</h2>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">ID Number</label>
            <input type="text" id="idNumber" name="idNumber" required className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select id="role" name="role" required className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
              <option value="">Select Role</option>
              <option value="farmer">Farmer</option>
              <option value="processor">Processor</option>
              <option value="distributor">Distributor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
 <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" id="location" name="location" required className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
          </div>

          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">Preferred Language</label>
            <select id="language" name="language" required className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
              <option value="">Choose Language</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="ta">Tamil</option>
              <option value="mr">Marathi</option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Log In
          </button>
        </form>

  <p className="text-center text-sm text-gray-600">
          Register YOURSELF <a href="#" className="text-green-700 font-medium hover:underline">Contact support</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

