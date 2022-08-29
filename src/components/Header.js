import '../styles/Header.scss';
import logo from '../images/logo.png';
import hat from '../images/sorting-hat.png';
const Header = () => {
  return (
    <header className="header">
      <img
        className="header__hat"
        src={hat}
        alt="Sombrero seleccionador"
        title="Sombrero seleccionador"
      ></img>
      <h1 className="header__title">Busca a tu personaje de</h1>
      <img
        className="header__logo"
        src={logo}
        alt="Logo de Harry Potter"
        title="Logo de Harry Potter"
      ></img>
    </header>
  );
};
export default Header;
