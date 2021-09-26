import PropTypes from "prop-types";
function Profile(props) {
  props.alertName(props.name);
  return (
    <>
      <img src={props.children} />
      <h1 style={{ color: "red" }}>fullName : {props.name}</h1>
      <p>bio : {props.bio}</p>
      <h2 style={{ backgroundColor: "lightblue" }}>
        profession : {props.profession}
      </h2>
    </>
  );
}
export default Profile;

Profile.defaultProps = {
  name: "gimy",
  bio: "alala",
  profession: "sbak",
  children: "https://via.placeholder.com/150/#FF0000",
};
