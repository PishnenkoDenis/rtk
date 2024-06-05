import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsersThunk } from "./store/reducers/actionCreators";
import { Posts } from "./components/Posts";

function App() {
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  return (
    <div className="App">
      {error && <h3>{error}</h3>}
      {isLoading ? (
        <h3>...Loading</h3>
      ) : (
        <ul>
          {users.length &&
            users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      )}
      <br />
      <Posts />
    </div>
  );
}

export default App;
