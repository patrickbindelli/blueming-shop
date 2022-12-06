import { Container, Middle, Logo, Icons } from "./styles";
import logo from "./logo.svg";
import { FaWhatsapp, FaInstagram, FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
export const Header = ({ onclick, setSearchValue }) => {

  const [inputValue, setInputValue] = useState('');

  const inputValueHandler = event => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchValue(inputValue);
  }

  return (
    <Container>
      <HiMenu className="menu" size={40} onClick={onclick} />
      <Logo>
        <a className="logo-link" href={"/"}>
          <img src={logo} />
        </a>
      </Logo>
      <Middle>
        <div className="search-box">
          <input placeholder="Procurar produto..." value={inputValue} onChange={inputValueHandler}/>
          <button onClick={handleSearch}>
            <FaSearch size={20} />
          </button>
        </div>
      </Middle>
      <Icons>
        <a><FaWhatsapp size={25} /></a>
        <a href={'https://www.instagram.com/blueming.kshop/'}><FaInstagram size={25} /></a>
      </Icons>
    </Container>
  );
};
