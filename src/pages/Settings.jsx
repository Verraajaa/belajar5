import { Outlet } from "react-router";

function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <p>Welcome to Settings Page</p>

      <Outlet />
    </div>
  );
}

export default Settings;