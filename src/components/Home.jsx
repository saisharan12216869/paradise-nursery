import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Paradise Nursery</h1>
      <p>Where Green Meets Serenity 🌿</p>

      <button
        style={{ marginTop: "20px", padding: "10px 20px" }}
        onClick={() => navigate("/plants")}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
