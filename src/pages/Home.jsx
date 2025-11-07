import TeamCard from "../components/TeamCard";
import data from "../data/hosts.json";

function Home() {
  const { teams } = data;

  // Collect all host-service combinations for table headers
  const allHostServices = [];
  teams.forEach((team) => {
    team.hosts.forEach((host) => {
      host.services.forEach((svc) => {
        const key = `${host.name} - ${svc.name}`;
        if (!allHostServices.includes(key)) {
          allHostServices.push(key);
        }
      });
    });
  });

  return (
    <div className="page home-page">
      <h1 className="team-title">Team Service Overview</h1>

      <div className="table-container">
        <table className="team-table">
          <thead>
            <tr>
              <th>Team Name</th>
              {allHostServices.map((hs, i) => (
                <th key={i}>{hs}</th>
              ))}
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, i) => (
              <TeamCard key={i} team={team} allHostServices={allHostServices} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
