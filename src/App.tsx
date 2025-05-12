import { useState } from "react";
import "./App.css";
import { Modal } from "woowacourse-modal-component-marvin";
import { useCardForm } from "woowacourse-hooks-marvin";
import CardForm from "./components/CardForm";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const cardForm = useCardForm();
  cardForm.handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };
  return (
    <>
      <CardForm cardForm={cardForm} />

      <Modal.Alert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="center"
        size="small"
        title="등록되었슈!!"
        message={`${cardForm.formattedCardNumber.slice(0, 4)}번호로 시작되는 ${
          cardForm.cardNetwork
        }카드를 만들었어요!`}
        onConfirm={() => setIsOpen(false)}
      />
    </>
  );
}

export default App;
