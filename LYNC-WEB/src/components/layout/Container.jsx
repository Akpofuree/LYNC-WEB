export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-container mx-auto px-sm md:px-lg ${className}`}>
      {children}
    </div>
  );
}
