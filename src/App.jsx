import Profile from "./components/Profile/Profile"


import FriendList from "./components/FriendList/FriendList"


import TransactionHistory from "./components/TransactionHistory/TransactionHistory"


import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      </div>
      
    <div> 
      <FriendList/>
    </div>
        <TransactionHistory />
    </>
  )
}

export default App
