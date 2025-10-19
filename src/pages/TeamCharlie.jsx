// src/pages/TeamCharlie.jsx
import HostList from "../components/HostList";

function TeamCharlie() {
  const hosts = [
    {
      id: 1,
      name: "Charlie Host 1",
      icon: "🖥️",
      services: [
        { name: "Database", up: true },
        { name: "API", up: true },
        { name: "Frontend", up: false },
      ],
    },
  ];

  return (
    <div className="page">
      <h1>Team Charlie</h1>
      <HostList hosts={hosts} />
    </div>
  );
}

export default TeamCharlie;
