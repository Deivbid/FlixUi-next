import NavbarItem from './NavbarItem';
import MobileMenu from './MobileMenu';
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { menuItems, TOP_OFFSET } from './constants';
import AccountMenu from './AccountMenu';

const Navbar = () => {
  const [showmobileMenu, setShowmobileMenu] = useState<boolean>(false);
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false);
  const [showBackground, setShowBackground] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowmobileMenu(!showmobileMenu);
  };

  const toggleAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu);
  };

  const handleScroll = () => {
    if (window.screenY >= TOP_OFFSET) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? 'bg-zinc-900 bg-opacity-90' : ''
        }`}
      >
        <img className="h-6 lg:h-7" src="/images/logo.png" alt="logo" />
        <div className="flex-row ml-8 hidden lg:flex gap-7">
          {menuItems.map((item: string) => {
            return <NavbarItem label={item} key={item} />;
          })}
        </div>

        <div
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
          onClick={toggleMobileMenu}
        >
          <p className="text-white text-md">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showmobileMenu ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <MobileMenu visible={showmobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-green.png" alt="profile" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? 'rotate-180' : 'rotate-0'
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
