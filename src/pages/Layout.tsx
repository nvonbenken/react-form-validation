import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav className="text-lg bg-blue-400 p-2">
        <Link className="p-2 hover:bg-blue-300" to="/">
          Home
        </Link>
        <Link className="p-2 hover:bg-blue-300" to="/Mui">
          MUI Examples
        </Link>
        <Link className="p-2 hover:bg-blue-300" to="/Custom">
          Wrapped MUI Examples
        </Link>
      </nav>
      <div className="p-4 w-full h-full bg-slate-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
