import { Container, Middle, Logo, Icons } from "./styles";
import logo from "./logo.svg";
import { FaWhatsapp, FaInstagram, FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
export const Header = () => {
  return (
    <Container>
      <HiMenu className="menu" size={40} />
      <Logo>
        <a className="logo-link" href={"/"}>
          <img src={logo} />
        </a>
      </Logo>
      <Middle>
        <div className="search-box">
          <input placeholder="Procurar produto..." />
          <FaSearch size={20} />
        </div>
        <button>Buscar</button>
      </Middle>
      <Icons>
        <FaWhatsapp size={25} />
        <FaInstagram size={25} />
      </Icons>
    </Container>
  );
};
