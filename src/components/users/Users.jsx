export const Users = (props) => {
  return (
    <div style={userStyle}>
      {props.users.map((user) => (
        <div key={user.id} className="card">
          <h3>{user.login}</h3>
          <img
            className="round-img"
            src={user.avatar_url}
            alt={user.login}
            style={{ width: "90px" }}
          />
          <div>
            <a href={user.html_url} className="btn btn-dark btn-sm my-1">
              More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
