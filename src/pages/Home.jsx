// src/pages/Home.jsx
import TeamCard from "../components/TeamCard";
import data from "../data/hosts.json";

function Home() {
  const { teams } = data;

  return (
    <div className="page home-page">
      <h1 className="team-title">Team Service Overview</h1>

      <div className="dashboard-grid">
        {teams.map((team, i) => (
          <div key={i} className="dashboard-item">
            <TeamCard team={team} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
