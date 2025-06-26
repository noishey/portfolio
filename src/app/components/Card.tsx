'use client';

const Card = () => {
  const text = "into ai, iOS, green tech, finance, fitness, spirituality and more.";

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center gap-4">
      <h2 className="text-5xl font-bold text-white">
        hey 👋 i&apos;m noishey
      </h2>
      <h1 className="text-2xl font-mono text-white">
        {text}
      </h1>
    </div>
  );
};

export default Card; 