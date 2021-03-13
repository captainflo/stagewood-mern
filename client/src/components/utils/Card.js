import '../../styles.css/card.css';

const Card = ({ user }) => {
  return (
    <div className="card-wrapper">
      <div className="card-image-wrapper">
        <img className="card-image" src={user.avatar} alt="backgroung" />
      </div>
      <div className="card-wrapper-body">
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
export default Card;
