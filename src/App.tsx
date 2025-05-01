import { useState } from "react";
import "./App.css";
import { Modal } from "woowacourse-modal-component-marvin";
import Card from "./Card";
import { useCardValidation } from "woowacourse-hooks-marvin";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { card, cvc, expiry, password } = useCardValidation();

  const isCardValid =
    !card.isError && !cvc.isError && !expiry.isError && !password.isError;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>카드 결제 시스템</h1>
        <button
          className="payment-button"
          onClick={() => setIsOpen(true)}
          disabled={!isCardValid}
        >
          결제하기
        </button>
      </header>

      <main className="app-main">
        <Card card={card} cvc={cvc} expiry={expiry} password={password} />
      </main>

      <Modal
        position="center"
        title="결제 정보 확인"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="modal-content">
          <p>결제가 완료되었습니다.</p>
          <p>
            {card.cardNumber.slice(0, 4)}번호로 시작되는 {card.cardNetwork}
            카드를 만들었어요!
          </p>

          <button className="close-button" onClick={() => setIsOpen(false)}>
            확인
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
