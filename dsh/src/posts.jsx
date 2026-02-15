import { useEffect, useState } from "react";

function PostsDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      if (!res.ok) throw new Error("Error fetching posts");

      const data = await res.json();
      setPosts(data);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Auto refresh every 5 seconds
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchPosts();
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, [autoRefresh]);

  return (
    <div>
      <h2>Posts Dashboard</h2>

      <button onClick={fetchPosts}>Refresh Now</button>
      <button onClick={() => setAutoRefresh(!autoRefresh)}>
        {autoRefresh ? "Disable Auto" : "Enable Auto"}
      </button>

      <p>Last Updated: {lastUpdated || "Not yet"}</p>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading &&
        !error &&
        posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default PostsDashboard;
