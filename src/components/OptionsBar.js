import '../styles/OptionsBar.css';
import newIcon from '../assets/newIcon.svg';

const OptionsBar = () => {
  return (
    <div className="optionsBar">
      <ul className="listOptions">
        <li
          style={{ color: '#faa500', fontWeight: 700 }}
          className="itensOptionBar"
        >
          <img src={newIcon} alt="" />
          Novidades
        </li>
        <li className="itensOptionBar">Vestidos</li>
        <li className="itensOptionBar">Roupas</li>
        <li className="itensOptionBar">Sapatos</li>
        <li className="itensOptionBar">Lingerie</li>
        <li className="itensOptionBar">Acessórios</li>
        <li className="itensOptionBar">OUTLET</li>
      </ul>
    </div>
  );
};

export default OptionsBar;
