const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center p-4 rounded-2xl shadow-md border border-transparent
      hover:border-cyan-400 hover:shadow-[0_0_20px_#22d3ee]
      hover:-translate-y-2 hover:scale-105
      transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card