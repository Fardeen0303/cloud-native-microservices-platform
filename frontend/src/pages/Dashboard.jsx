import { useState, useEffect } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/api/users/profile')
      .then(res => setProfile(res.data))
      .catch(() => navigate('/login'));
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
        {profile ? (
          <div>
            <p className="mb-2"><span className="font-bold">Username:</span> {profile.username}</p>
            <p className="mb-2"><span className="font-bold">Email:</span> {profile.email}</p>
            <p className="mb-4"><span className="font-bold">ID:</span> {profile.id}</p>
            <button onClick={() => navigate('/products')}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Go to Products</button>
          </div>
        ) : <p className="text-center">Loading...</p>}
      </div>
    </div>
  );
}
