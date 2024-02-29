const FriendList = (props) => {
    return (
    <div>
        <img 
        width={300}
        src="https://images.pexels.com/photos/15486370/pexels-photo-15486370/free-photo-of-mexican-tacos-ona-serving-dish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="" />
    <h2>{props.title}</h2>
    <h3>Price: ${props.price}</h3>
    <p>{props.description}</p>

    <button type="button">Add to cart</button>
    <button type="button">😍</button>

    </div>
    );
    };
    
    export default FriendList;
    