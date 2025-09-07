import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-center px-4">
    <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
    <p className="text-lg text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
    <Link to="/">
      <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
        Go Home
      </button>
    </Link>
  </div>
);


export default NotFound;

