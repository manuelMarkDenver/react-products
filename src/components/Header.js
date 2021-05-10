import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full">
      <div className="container flex items-center justify-between mx-auto my-12">
        <div>logo</div>
        <ul className="flex">
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
