import HostCard from "../components/HostCard";
import data from "../data/hosts.json";

function TeamCharlie() {
  const team = data.teams.find(t => t.name === "Charlie");

  return (
    <div className="page">
      <h1 className="team-title">{team.name} Team</h1>

      <div className="dashboard-grid">
        {team.hosts.map((host, i) => (
          <HostCard key={i} host={{ ...host, icon: team.icon }} />
        ))}
      </div>
    </div>
  );
}

export default TeamCharlie;
