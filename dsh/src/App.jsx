import { useEffect, useState } from "react";

function UserDashboardAsync() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("failed to load users");
      }

      const data = await res.json();
      console.log(data)
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.includes(searchTerm)
  );

  return (
    <div>
      <h2>User Dashboard (Async/Await)</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={fetchUsers}>reload users</button>

      {loading && <p>loading users...</p>}
      {error && <p>{error}</p>}

      {!loading &&
        !error &&
        filteredUsers.map((user) => (
          <div key={user.id}>
            <p><strong>{user.username}</strong></p>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default UserDashboardAsync;
