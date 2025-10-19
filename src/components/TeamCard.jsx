// src/components/TeamCard.jsx
import "../App.css";

function TeamCard({ team }) {
  // Combine all services from all hosts and compute "up" status
  const serviceStatus = {};

  team.hosts.forEach((host) => {
    host.services.forEach((svc) => {
      if (!serviceStatus[svc.name]) {
        serviceStatus[svc.name] = { upCount: 0, total: 0 };
      }
      serviceStatus[svc.name].total += 1;
      if (svc.up) serviceStatus[svc.name].upCount += 1;
    });
  });

  const combinedServices = Object.entries(serviceStatus).map(([name, val]) => ({
    name,
    up: val.upCount === val.total, // all instances up = green
  }));

  return (
    <div className="host-card">
      <h2 className="team-summary-title">
        <span className="team-icon">{team.icon}</span> {team.name}
      </h2>

      <ul className="service-list">
        {combinedServices.map((service, i) => (
          <li key={i}>
            <span className={`status-dot ${service.up ? "up" : "down"}`} />
            {service.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamCard;
