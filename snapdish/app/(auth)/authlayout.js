export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen w-full py-12">
      {children}
    </div>
  );
}