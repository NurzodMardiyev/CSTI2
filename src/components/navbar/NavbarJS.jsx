import React, { useEffect, useState } from "react";
import logo from "../../images/logo_center.png";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "../../App.css";
import { icons } from "../../icons/iconc.js";
import { csti } from "../../feature/queryApi.js";
import { useQuery } from "react-query";
import { MenuButton, Menu, MenuItem, MenuItems } from "@headlessui/react";

export default function NavbarJS() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState("Uz");

  const { data } = useQuery(["news"], () => csti.news(""));
  const { data: dyjes } = useQuery(["dyjes"], () => csti.dyjes(""));
  const { data: projects } = useQuery(["projects"], () => csti.projects(""));

  const menuNav = [
    {
      title: "Rahbariyat",
      to: location.pathname === "/" ? "rahbariyat" : "/",
      smooth: true,
    },
    {
      title: "Faoliyat",
      to: location.pathname === "/" ? `faoliyat` : "/",
      smooth: true,
    },
    { title: "Yangiliklar", to: `/newspage/${data?.length}`, smooth: true },
    {
      title: "Xalqaro hamkorlik",
      to: location.pathname === "/" ? "hamkorlar" : "/",
      smooth: true,
    },
    { title: "Dayjestlar", to: `dayjes/${dyjes?.length}`, smooth: true },
  ];

  const items1 = [
    {
      key: "1",
      label:
        location.pathname === "/" ? (
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-[14px] font-[500]  menu_item"
          >
            Markaz haqida
          </Link>
        ) : (
          <RouterLink to="/" className="text-[14px] font-[500]  menu_item">
            Markaz haqida
          </RouterLink>
        ),
    },
    {
      key: "2",
      label: (
        <RouterLink
          rel="noopener noreferrer"
          to="/tuzilma"
          className="text-[14px] font-[500]  menu_item"
        >
          Tashkiliy tuzilma
        </RouterLink>
      ),
    },
  ];

  const items2 = [
    {
      key: "1",
      label: (
        <RouterLink
          rel="noopener noreferrer"
          to={`projects/${projects?.length}`}
          className="text-[14px] font-[500]  menu_item"
        >
          Loyihalar
        </RouterLink>
      ),
    },
    {
      key: "2",
      label: (
        <RouterLink
          rel="noopener noreferrer"
          to="/photogallery"
          className="text-[14px] font-[500]  menu_item"
        >
          Fotogalereya
        </RouterLink>
      ),
    },
    {
      key: "3",
      label: (
        <RouterLink
          rel="noopener noreferrer"
          to="/videogallery"
          className="text-[14px] font-[500]  menu_item"
        >
          Videogalereya
        </RouterLink>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseMenu = () => {
    setOpenMenu(!openMenu);
  };

  const languages = [
    {
      title: "Uz",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAbFBMVEX///8etToAmbXOESbKAAAlk67WABDWACQzrjkAl7QAmLUAkrAAlLEAkbAAja0Wnbhvu83f8PSq1eBIrMLu+PpftcnT6u+GxdTn9Pey2uQtpLz0+vx5v9COydfG5OtRsMWg0d2PyNe/4OguorzHBxS5AAAE0UlEQVR4nO2caYOiOBCGs+wxWyQYbpRb/f//cTnUwPZwOGXPtJn3+RYFGx4rSaVIKxzAQPzqC3hvoI8F9LGAPhb79ZFSUqmX/FH3JZ/yFdinj6TMy/ZS15Xed3xOs3Y+a7n6uu/ivj579CmV1KLjWF13RZ/rqFRNQsyVdU6TpsrOypIA3NZHsox7eUHi7ey6VycSkfOIMO2QOJO+x63Wqk6V3hfGX51NfSoPenkik7R16A2qhhOq2/GUDPYvd195OnwZ+eL578SWPpkNLo75E5OGjLozInlvkhP09s3bp07m7i/ja7OhT7aDvcB55m4pF4GYRJcqjiIz+uVFFLX8znlvyLo+OfbD43OhotrskLUPX5RcZGR8uTrVTmrH0LeuT5WDveKp2OvQylF61qRps/s0+g30dZ1wILJjnPoM1vR545x78n7a1bwdK/rIH4Pv513M+7EixzsO9trXrHPtZFkfNWPwWTLIfw7L+vrstiO1JEP7HFb0FYO+8w/1XUsqApss63sua5l3cVe7K+9axKK++7y7786v4SxI1WXeDGcFPvJLWzLJRX1qXK/FO27UVV4ZH0wRQEkttDSLNnmIS89U+OThdDnYXjJQY7HguD1zuLoOYpEG/r1C1QaBCIL23iyDVMRBfe/PUZp2E1Jqx1JmWV+4V1/HpVsYN49wU32Ry5RYVNNNQpeHLboGfbnPCnvb0bdn4lXdOBlMl3bztUq/+PPN53jdF3OyJB16xdjnyLTScTQ5tXbryox9UayrSfpIcdLs+tg3YHnmTfbPvBRJIqOPGunIxgiKiKQZ6tzrVZG2o1b/oryPPja/89INm1LqZX1ejIrBJsv6blNvYMkg/zmsVFyisfdakmJ8Div1PpmOxWaE3zJr1WYU/DZZfdYx7GwRNZ51LLL+JGMs+fk7Jt/lPOU7TXtY1XdPnT/OHpQ009dcnc0OUdXMOGWzAYCaxBafG7sMxufksZ7fLinv1Jr9Vq6SSXBQpmClnMIxOylJHY6JNAUr5bUnT9khcGuPy83fbGMfNWFVxOfwtkxzddimog0fBatzexKn9rHDyg9bkbbho2AVnuO4Ci0vWN2Q4/RbNNP0hQapd119TaBfnjx86D7jMbtYqK/dxA9dYxnbknrz5kNwcsb5N5zua+43XlVGqOocpwdziuqOn+g+dDqjScGq6lxbkkzu2EMgmyF/LjKS9y22smjDSSFVXdJMmMcZVBZ+4ZvwuooynTz8kMewLX4ffQ55UTjUD07JrUfmifT8ia/Mk5GZTal0lGN6JyWR9CYzc+5L6VtfsJpCSl6TrA3D8nbbNM/l+uak3QWpS7N3Pxz9o9f7xXjq/zqUJenG68D+KRbQxwL6WEAfC/E3YCD+AQzEn4CB+AswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgfv/rXAN4b/JIGC/ENMBD/AgbiD8AA+lhAHwvoYwF9LKCPBfSxgD4W0McC+lhAHwvoYwF9LKCPBfSxgD4W0McC+lhAHwvoYwF9LKCPBfSxgD4W0McC+lhAHwvoYwF9LKCPBfSxgD4W0McC+lhAHwvoYwF9LKCPBfSxgD4W0McC+lhAHwvoYwF9LKCPBfSxgD4W0McC+lj8BytNFGBx8GG2AAAAAElFTkSuQmCC",
    },
    {
      title: "Ru",
      flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Y9UKrDPiNrvGiwuhru3ETteOH4XJnBIakw&s",
    },
    {
      title: "En",
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    },
  ];
  const handleLanguageChange = (langCode) => {
    setSelectedLanguage(langCode);
  };
  return (
    <div
      className={`${
        isFixed ? "fixed bg-[#12274B]  " : "opacity-100 headerInfo "
      } top-0  text-white left-0 z-[999] w-full duration-300 `}
    >
      <div className="container md:max-w-9xl md:mx-auto flex justify-between md:py-3 py-1.5 max-w-[90%] mx-auto items-center">
        <RouterLink
          className="logoSec  flex items-center gap-3"
          to="/"
          smooth={true}
          duration={500}
        >
          <img src={logo} alt="csti logo" className="md:w-[70px]  w-[30px]" />
          <p className="md:text-[20px] font-semibold md:mb-1 text-[12px] md:leading-[25px] logo">
            Ilmiy texnik <br /> axborot markazi
          </p>
        </RouterLink>
        <div className="menu hidden lg:block">
          <div className="flex lg:space-x-4 md:space-x-2 items-center  font-[600] text-[14px]">
            <Dropdown menu={{ items: items1 }}>
              <Link
                onClick={(e) => e.preventDefault()}
                to="#"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <Space className="menu_item">
                  Bosh Sahifa
                  <DownOutlined className="text-[12px]" />
                </Space>
              </Link>
            </Dropdown>
            {menuNav.map((item, index) =>
              item.title === "Yangiliklar" ||
              item.title === "Dayjestlar" ||
              location.pathname !== "/" ? (
                <RouterLink
                  key={index}
                  to={item.to}
                  className="cursor-pointer menu_item"
                >
                  {item.title}
                </RouterLink>
              ) : (
                <Link
                  key={index}
                  to={item.to}
                  className="cursor-pointer menu_item"
                  smooth={true}
                  duration={500}
                >
                  {item.title}
                </Link>
              )
            )}
            <Dropdown menu={{ items: items2 }}>
              <Link className="cursor-pointer" to="#">
                <Space className="menu_item">
                  Galereyalar
                  <DownOutlined className="text-[12px]" />
                </Space>
              </Link>
            </Dropdown>
          </div>
        </div>
        <div className="lang hidden lg:block">
          <Menu as="div" className="relative md:ml-0 md:mr-4  mx-3">
            <div>
              <MenuButton className="relative flex text-sm focus:outline-none rounded-l-lg md:border-r">
                <span className="sr-only">Open user menu</span>
                <div className="flex items-center gap-2 md:px-4 ps-0  md:py-1.5 py-1">
                  <img
                    alt=""
                    src={
                      languages.find((lang) => lang.title === selectedLanguage)
                        ?.flag
                    }
                    className="md:w-7 w-5"
                  />
                  <span className="font-[500] dark:text-white md:text-[14px] text-[12px]">
                    {selectedLanguage}
                  </span>
                </div>
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute dark:bg-gray-800 right-0 z-10 mt-2 md:w-36 w-24 origin-top-right rounded-md bg-[#00000090] py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
            >
              {languages
                .filter((lang) => lang.title !== selectedLanguage)
                .map((lang) => (
                  <MenuItem
                    key={lang.title}
                    onClick={() => handleLanguageChange(lang.title)}
                  >
                    <div className="flex items-center gap-2 px-4 py-1.5 cursor-pointer">
                      <img alt="" src={lang.flag} className="md:w-7 w-5" />
                      <span className="font-[500] md:text-[14px] text-[12px] dark:text-white ">
                        {lang.title}
                      </span>
                    </div>
                  </MenuItem>
                ))}
            </MenuItems>
          </Menu>
        </div>
        <div
          className="cursor-pointer block lg:hidden md:text-[30px] text-[20px]"
          onClick={() => setOpenMenu(true)}
        >
          {icons.burger}
        </div>
        <div
          className={`absolute ${
            openMenu ? "w-full" : "overflow-hidden w-0"
          } transition-all duration-150 flex justify-start min-h-[100vh] items-center border top-0 left-0 menuBg  lg:hidden text-black`}
          onClick={() => handleCloseMenu()}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-start font-[600] text-[14px] border w-[50%] bg-white min-h-[100vh] opacity-100 gap-4 border-e-2 border-e-blue-500  relative"
          >
            <div
              className="absolute top-10 right-[-15px] z-20 text-[28px]  bg-blue-500 text-white rounded"
              onClick={handleCloseMenu}
            >
              {icons.close}
            </div>
            <Link
              className="logoSec  flex items-start gap-3 pt-8 pb-6 bg-blue-100 ps-5 pe-3 w-full"
              onClick={handleCloseMenu}
              to="#"
              smooth={true}
              duration={500}
            >
              <img
                src={logo}
                alt="csti logo"
                className="md:max-w-[70px]  w-[30px]"
              />
              <p className="md:text-[20x] font-semibold md:mb-2 text-[12px]">
                Ilmiy texnik axborot markazi
              </p>
            </Link>
            <Dropdown menu={{ items: items1 }} className="px-5">
              <Link className="" onClick={(e) => e.preventDefault()}>
                <Space>
                  Bosh Sahifa
                  <DownOutlined className="text-[12px]" />
                </Space>
              </Link>
            </Dropdown>
            {menuNav?.map((item, index) =>
              item.title === "Yangiliklar" ||
              item.title === "Dayjestlar" ||
              location.pathname !== "/" ? (
                <RouterLink
                  key={index}
                  to={item.to}
                  className="cursor-pointer menu_item px-5"
                  onClick={handleCloseMenu}
                >
                  {item.title}
                </RouterLink>
              ) : (
                <Link
                  key={index}
                  to={item.to}
                  className="cursor-pointer menu_item px-5"
                  smooth={true}
                  duration={500}
                  onClick={handleCloseMenu}
                >
                  {item.title}
                </Link>
              )
            )}
            <Dropdown menu={{ items: items2 }} className="px-5">
              <div className="cursor-pointer">
                <Space>
                  Galereyalar
                  <DownOutlined className="text-[12px]" />
                </Space>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
