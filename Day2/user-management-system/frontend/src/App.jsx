import UserList from './Components/UserList';
import './App.css'; // ✅ Import CSS file

function App() {
  return (
    <div className="container">
      <h1>User Management System</h1>
      <UserList />
    </div>
  );
}

export default App;
