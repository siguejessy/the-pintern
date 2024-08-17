import { Outlet, createBrowserRouter } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import AuthPage from "../src/pages/AuthPage/AuthPage";
import { getUser } from '../../utilities/users-service';


export default function Root() {
  const [user, setUser] = useState(getUser());

  return (
    <>
    <StrictMode>
    <AuthPage
    user={user}
    setUser={setUser}/>
    <NavBar
    user={user}
    setUser={setUser} />  
      <div id="detail">
        <Outlet />
      </div>
    </StrictMode>
    </>
  );
}