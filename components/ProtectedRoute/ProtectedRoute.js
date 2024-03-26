import { useEffect } from "react";

const ProtectedRoute = ({ children, router }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("Token:", token);

    if (!token) {
      console.log("Usuario no autenticado, redirigiendo a /login");
      router.push("/login");
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
