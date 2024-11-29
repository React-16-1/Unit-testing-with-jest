import { useEffect, useState } from "react";
import getGitHubUser from "../../services/DataService";

function Info({ user }) {
  const [data, setData] = useState({});

  useEffect(() => {
    getGitHubUser(user)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setData({ error: "request error" });
      });
  }, [user]);

  return (
    <div>
      <h3>GitHub User Info</h3>
      <ul>
        {Object.keys(data).map((i) => (
          <li key={i}>
            {i}: {data[i]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
