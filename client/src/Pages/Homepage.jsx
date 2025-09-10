
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate(); 
  
  return (
    <>
      <h1>this is the dashboard </h1>
      <button  onClick={() => navigate("/complaint")}>complaints</button>
    </>
  );
}
