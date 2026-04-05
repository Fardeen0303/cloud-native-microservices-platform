import { useState } from 'react';
import API from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/users/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      navigate('/products');
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input className="w-full border p-2 mb-4 rounded" type="email" placeholder="Email"
            onChange={e => setForm({...form, email: e.target.value})} required />
          <input className="w-full border p-2 mb-4 rounded" type="password" placeholder="Password"
            onChange={e => setForm({...form, password: e.target.value})} required />
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
        </form>
        <p className="mt-4 text-center">No account? <Link to="/register" className="text-blue-500">Register</Link></p>
      </div>
    </div>
  );
}
