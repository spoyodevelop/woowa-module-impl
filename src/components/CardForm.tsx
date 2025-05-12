import { useCardForm, UseCardFormReturn } from "woowacourse-hooks-marvin";
import "./CardForm.css";

interface CardFormProps {
  cardForm?: UseCardFormReturn;
}

const CardForm: React.FC<CardFormProps> = ({ cardForm }) => {
  const {
    values,
    errors,
    isValid,

    handleChange,
    handleSubmit,

    cardNetwork,
    formattedCardNumber,

    cardPlaceholder,
    cardNumberMaxLength,
    reset,
  } = cardForm || useCardForm();

  return (
    <div className="card-form-container">
      <form className="card-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">카드 번호</label>
          <input
            id="cardNumber"
            type="text"
            value={formattedCardNumber}
            onChange={handleChange.cardNumber}
            placeholder={cardPlaceholder}
            maxLength={cardNumberMaxLength}
          />
          <p className="error-message">{errors.cardNumber || "\u00A0"}</p>
          {cardNetwork !== "DEFAULT" && (
            <p className="card-network-info">{cardNetwork}</p>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiryDate">유효기간</label>
            <input
              id="expiryDate"
              type="text"
              value={values.expiryDate}
              onChange={handleChange.expiryDate}
              placeholder="MMYY"
              maxLength={4}
            />
            <p className="error-message">{errors.expiryDate || "\u00A0"}</p>
          </div>

          <div className="form-group">
            <label htmlFor="cvc">CVC</label>
            <input
              id="cvc"
              type="text"
              value={values.cvc}
              onChange={handleChange.cvc}
              placeholder="123"
              maxLength={3}
            />
            <p className="error-message">{errors.cvc || "\u00A0"}</p>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">비밀번호 앞 2자리</label>
          <input
            id="password"
            type="password"
            value={values.password}
            onChange={handleChange.password}
            placeholder="••"
            maxLength={2}
          />
          <p className="error-message">{errors.password || "\u00A0"}</p>
        </div>
        <div className="button-container">
          <button type="submit" className="submit-button" disabled={!isValid}>
            카드 등록하기
          </button>

          <button type="button" className="reset-button" onClick={reset}>
            초기화
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
