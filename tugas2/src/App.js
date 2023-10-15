import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [users, setUsers] = useState([]);

  const [currPage, setCurrPage] = useState(1);

  // DISPLAY 5 DATA
  const postPerPage = 5;
  const lastIndex = currPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const records = users.slice(firstIndex, lastIndex);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await axios.get(url);
    const data = await resp.data;
    // console.log(data);
    setUsers(data);
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
          </tr>
        </thead>

        <tbody>
          {records.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
