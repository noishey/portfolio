'use client';

const SubstackWidget = () => (
  <div className="w-full max-w-md mx-auto">
    <form
      action="https://noishey.substack.com/subscribe"
      method="post"
      target="_blank"
      className="w-full flex"
    >
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-white/70"
        required
      />
      <button
        type="submit"
        className="ml-2 px-4 py-3"
        style={{ backgroundColor: '#b49d1f', color: 'white', borderRadius: '0.5rem', transition: 'background 0.2s' }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = '#a0881a')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = '#b49d1f')}
      >
        Subscribe
      </button>
    </form>
  </div>
);

export default SubstackWidget; 