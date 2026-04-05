import { useState } from 'react';
import API from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/api/users/register', form);
      navigate('/login');
    } catch {
      setError('Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input className="w-full border p-2 mb-4 rounded" type="text" placeholder="Username"
            onChange={e => setForm({...form, username: e.target.value})} required />
          <input className="w-full border p-2 mb-4 rounded" type="email" placeholder="Email"
            onChange={e => setForm({...form, email: e.target.value})} required />
          <input className="w-full border p-2 mb-4 rounded" type="password" placeholder="Password"
            onChange={e => setForm({...form, password: e.target.value})} required />
          <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Register</button>
        </form>
        <p className="mt-4 text-center">Have account? <Link to="/login" className="text-blue-500">Login</Link></p>
      </div>
    </div>
  );
}
