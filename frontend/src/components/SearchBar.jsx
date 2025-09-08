import { useState } from "react";

function SearchBar() {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [result, setResult] = useState(null);

  const searchSummonerPuuid = async () => {
    console.log("-<<<<<<<-")
    try {
      const res = await fetch(`http://localhost:5000/summoner/${name}/${tag}`);
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter summoner name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter summoner tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button onClick={searchSummonerPuuid}>Search</button>

      {result && (
        <div>
          <h3> PUUID: {result.puuid}</h3>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
