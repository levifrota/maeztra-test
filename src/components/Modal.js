import '../styles/Modal.css';
import ImgModal from '../assets/image 4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-background">
      <div className="modal">
        <button onClick={onClose} className="close-btn">
          FECHAR
        </button>
        <div className="modal-content">
          <img src={ImgModal} alt="" className="modal-img"></img>
          <div className="modal-right">
            <FontAwesomeIcon icon={faEnvelope} class="modal-icon" />
            <h3>BEM VINDO À MAEZTRA</h3>
            <p>
              Receba em primeira mão <br />
              <strong>desconto e ofertas exclusivas</strong>
            </p>
            <div className="modal-form">
              <div className="modal-input">
                <input placeholder="Digite seu e-mail"></input>
              </div>
              <button className="modal-send">
                ENVIAR <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
