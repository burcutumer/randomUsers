import { User } from "../User"

interface Props {
    user: User
}
function SingleUser({ user }: Props) {
    return (

        <div className="single-user">
            <img src={user.picture.medium} alt="pic medium" />
            <div className="user-info">
                <h3>{user.username}</h3>
                <p className="user-mail">Email: {user.email}</p>
                <p className="user-mail">{user.location.city} | {user.location.state}</p>
            </div>
        </div>
    )
}

export default SingleUser