
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-millysat/10 mb-6">
          <span className="text-3xl font-bold text-millysat">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-6">
          We couldn't find the page you were looking for. Please check the URL or return to the home page.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-millysat text-white rounded-md font-medium hover:bg-millysat/90 transition-all"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
