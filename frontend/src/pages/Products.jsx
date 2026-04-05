import { useState, useEffect } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', price: '', stock: '' });
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    API.get('/api/products').then(res => setProducts(res.data));
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await API.post('/api/products', form);
    const res = await API.get('/api/products');
    setProducts(res.data);
    setForm({ name: '', description: '', price: '', stock: '' });
  };

  const handleDelete = async (id) => {
    await API.delete(`/api/products/${id}`);
    setProducts(products.filter(p => p.id !== id));
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Products</h1>
          <div className="flex gap-4 items-center">
            <span className="text-gray-600">Hello, {username}</span>
            <button onClick={() => navigate('/dashboard')} className="bg-gray-500 text-white px-4 py-2 rounded">Dashboard</button>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
          </div>
        </div>
        <form onSubmit={handleAdd} className="bg-white p-6 rounded shadow mb-6 grid grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="Name" value={form.name}
            onChange={e => setForm({...form, name: e.target.value})} required />
          <input className="border p-2 rounded" placeholder="Description" value={form.description}
            onChange={e => setForm({...form, description: e.target.value})} />
          <input className="border p-2 rounded" placeholder="Price" type="number" value={form.price}
            onChange={e => setForm({...form, price: e.target.value})} required />
          <input className="border p-2 rounded" placeholder="Stock" type="number" value={form.stock}
            onChange={e => setForm({...form, stock: e.target.value})} />
          <button type="submit" className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Product</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map(p => (
            <div key={p.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold text-lg">{p.name}</h3>
              <p className="text-gray-600">{p.description}</p>
              <p className="text-green-600 font-bold">${p.price}</p>
              <p className="text-gray-500">Stock: {p.stock}</p>
              <button onClick={() => handleDelete(p.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded text-sm">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
