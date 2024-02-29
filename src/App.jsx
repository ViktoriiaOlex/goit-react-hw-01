import Profile from "./components/Profile/Profile";
import userData from "./userData.json";


// import FriendList from "./components/FriendList/FriendList";


// import TransactionHistory from "./components/TransactionHistory/TransactionHistory";


import './App.css';

function App() {
  return (
    <>
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      </div>
      
    {/* <div> 
      <FriendList/>
    </div>
        <TransactionHistory /> */}
    </>
  )
}

export default App
