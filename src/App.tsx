import { useState } from "react";
import "./App.css";
import { Modal } from "woowacourse-modal-component-marvin";
import Card from "./Card";
import { useCardValidation } from "woowacourse-hooks-marvin";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { card, cvc, expiry, password, network, format } = useCardValidation();

  const isCardValid =
    !card.isError &&
    !cvc.isError &&
    !expiry.isError &&
    !password.isError &&
    card.cardNumber.length > 0 &&
    cvc.CVCNumber.length > 0 &&
    expiry.expiryDateNumber.length > 0 &&
    password.passwordNumber.length > 0;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>카드 등록 시스템</h1>
        <button
          className="payment-button"
          onClick={() => setIsOpen(true)}
          disabled={!isCardValid}
        >
          등록하기
        </button>
      </header>

      <main className="app-main">
        <Card
          card={card}
          cvc={cvc}
          expiry={expiry}
          password={password}
          network={network}
          format={format}
        />
      </main>

      <Modal.Alert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="center"
        size="small"
        title="등록되었슈!!"
        message={`${card.cardNumber.slice(0, 4)}번호로 시작되는 ${
          network.cardNetwork
        }카드를 만들었어요!`}
        onConfirm={() => setIsOpen(false)}
      />
    </div>
  );
}

export default App;
