import "./Card.css";

interface CardProps {
  card: {
    cardNumber: string;
    setCardNumber: (value: string) => void;
    errorMessage: string;
    isError: boolean;
    cardNetwork: string;
  };
  cvc: {
    CVCNumber: string;
    setCVCNumber: (value: string) => void;
    errorMessage: string;
    isError: boolean;
  };
  expiry: {
    expiryDateNumber: string;
    setExpiryDateNumber: (value: string) => void;
    errorMessage: string;
    isError: boolean;
  };
  password: {
    passwordNumber: string;
    setPasswordNumber: (value: string) => void;
    errorMessage: string;
    isError: boolean;
  };
}

function Card({ card, cvc, expiry, password }: CardProps) {
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    card.setCardNumber(e.target.value);
  };

  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cvc.setCVCNumber(e.target.value);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    expiry.setExpiryDateNumber(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    password.setPasswordNumber(e.target.value);
  };

  return (
    <div className="card-container">
      <h2>카드 정보 입력</h2>
      <div className="card-form">
        <div className="input-group">
          <label htmlFor="cardNumber">카드 번호</label>
          <input
            id="cardNumber"
            type="text"
            value={card.cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            className="card-input"
          />
          {card.errorMessage && (
            <p className="error-message">{card.errorMessage}</p>
          )}
          {card.cardNetwork !== "DEFAULT" && !card.isError && (
            <p className="card-network">{card.cardNetwork}</p>
          )}
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="expiry">유효기간</label>
            <input
              id="expiry"
              type="text"
              value={expiry.expiryDateNumber}
              onChange={handleExpiryChange}
              placeholder="MM/YY"
              className="card-input"
            />
            {expiry.errorMessage && (
              <p className="error-message">{expiry.errorMessage}</p>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="cvc">CVC</label>
            <input
              id="cvc"
              type="text"
              value={cvc.CVCNumber}
              onChange={handleCVCChange}
              placeholder="123"
              className="card-input"
            />
            {cvc.errorMessage && (
              <p className="error-message">{cvc.errorMessage}</p>
            )}
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={password.passwordNumber}
            onChange={handlePasswordChange}
            placeholder="비밀번호 앞 2자리"
            className="card-input"
          />
          {password.errorMessage && (
            <p className="error-message">{password.errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
