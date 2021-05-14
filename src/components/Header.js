import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full bg-red-400">
      <div className="container flex items-center justify-between mx-auto my-12">
        <div className="text-9xl">
          <i className="fab fa-angrycreative"></i>
        </div>
        <ul className="flex text-xl">
          <li className="mr-4">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productspage">Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
