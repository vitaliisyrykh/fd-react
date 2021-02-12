function UserCard(props) {
  const{user:{id,fistName,lastName},changeSelec}=props;

  return (
    <article>
      <h1>
        Full Name : {fistName} {lastName}
      </h1>
      <p>Id: {id}</p>
      <button onClick={(e)=>changeSelec()}></button>
    </article>
  )
}
export default UserCard;