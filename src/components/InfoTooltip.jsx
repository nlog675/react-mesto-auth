import success from '../images/success.svg'
import error from '../images/error.svg'

const InfoTooltip = ({isOpen, onClose, registered}) => {
  return(
    <div className={`popup popup__infoTooltip ${isOpen && "popup_isOpen"}`}>
      <div className="popup__content popup__content-infoTooltip">
        <button 
          onClick={onClose} 
          type="button" 
          className="popup__close"
        />
        <img className="popup__infoTooltip-image" src={ registered ? success : error } alt="результат" />
        <p className="popup__infoTooltip-message">
          { registered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.' }
        </p>
      </div>
    </div>
  )
}

export default InfoTooltip;