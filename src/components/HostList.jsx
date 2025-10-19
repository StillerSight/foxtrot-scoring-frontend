// hostlist contains a list of hosts
import HostCard from "./HostCard";

function HostList({ hosts }) {
  return (
    <div className="hosts">
      {hosts.map((host) => (
        <HostCard key={host.id} host={host} />
      ))}
    </div>
  );
}

export default HostList;