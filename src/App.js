import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const loading = useSelector((state) => state?.data?.loading);
  const photos = useSelector((state) => state?.data?.photos);

  const fetchQuery = (e) => {
    e.preventDefault();
    dispatch({ type: "QUERY", query });
    dispatch({ type: "REQUEST_DATA" });
  };
  console.log(
    "FROM APP.JS STATE IS:",
    useSelector((state) => state?.data)
  );
  return (
    <div className="App">
      <form onSubmit={fetchQuery}>
        <div>
          <input type="text" onChange={(e) => setQuery(e.target.value)} />
          <button type="submit" onClick={fetchQuery}>
            Fetch
          </button>
        </div>
      </form>
      <div style={{ marginTop: "1rem" }}>
        {loading
          ? "loading"
          : photos?.map((item, index) => (
              <img key={item?.id} src={item?.src?.tiny} alt="nothing" />
            ))}
      </div>
    </div>
  );
}
