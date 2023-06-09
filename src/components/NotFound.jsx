import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  }, [navigate]);
  return <div>Not Found</div>;
};

