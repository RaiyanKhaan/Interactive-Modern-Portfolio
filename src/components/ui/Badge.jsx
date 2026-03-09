export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light ${className}`}>
      {children}
    </span>
  );
}
