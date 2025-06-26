'use client';

import { useState } from 'react';

const SubstackWidget = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Redirect to Substack with email pre-filled
      window.open(`https://substack.com/@noishey?email=${encodeURIComponent(email)}`, '_blank');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubscribe} className="w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-white/70"
          required
        />
      </form>
    </div>
  );
};

export default SubstackWidget; 