import "./Card.css";

interface CardInputProps {
  cardNumber: string;
  onCardNumberChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  isError: boolean;
}

interface ExpiryInputProps {
  expiryDateNumber: string;
  onExpiryDateNumberChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  isError: boolean;
}

interface CVCInputProps {
  CVCNumber: string;
  onCVCNumberChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  isError: boolean;
}

interface PasswordInputProps {
  passwordNumber: string;
  onPasswordNumberChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  isError: boolean;
}
interface NetworkInputProps {
  cardNumber: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  cardNetwork: string;
}
interface CardProps {
  card: CardInputProps;
  expiry: ExpiryInputProps;
  cvc: CVCInputProps;
  password: PasswordInputProps;
  network: NetworkInputProps;
}

function Card({ card, cvc, expiry, password, network }: CardProps) {
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    card.onCardNumberChange(e);
    network.onChange(e);
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
          {card.errorMessage && card.cardNumber.length !== 0 && (
            <p className="error-message">{card.errorMessage}</p>
          )}

          {network.cardNetwork !== "DEFAULT" &&
            !card.isError &&
            card.cardNumber.length !== 0 && (
              <p className="card-network">{network.cardNetwork}</p>
            )}
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="expiry">유효기간</label>
            <input
              id="expiry"
              type="text"
              value={expiry.expiryDateNumber}
              onChange={expiry.onExpiryDateNumberChange}
              placeholder="MMYY"
              className="card-input"
            />
            {expiry.errorMessage && expiry.expiryDateNumber.length !== 0 && (
              <p className="error-message">{expiry.errorMessage}</p>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="cvc">CVC</label>
            <input
              id="cvc"
              type="text"
              value={cvc.CVCNumber}
              onChange={cvc.onCVCNumberChange}
              placeholder="123"
              className="card-input"
            />
            {cvc.errorMessage && cvc.CVCNumber.length !== 0 && (
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
            onChange={password.onPasswordNumberChange}
            placeholder="비밀번호 앞 2자리"
            className="card-input"
          />
          {password.errorMessage && password.passwordNumber.length !== 0 && (
            <p className="error-message">{password.errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
