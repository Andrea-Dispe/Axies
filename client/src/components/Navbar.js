import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Link to="/update-skills">Update SKills</Link>
      <div className="w-full shadow-bottomBar h-16 flex justify-end">
        <button className="py-2 px-4 rounded-lg bg-blue-500 text-white">Sign Up</button>
        <button className="py-2 px-4 rounded-lg bg-blue-500 text-white">login</button>
      </div>
    </>
  );
};

export default Navbar;
