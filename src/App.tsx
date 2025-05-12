import { useState } from "react";
import "./App.css";
import { Modal } from "woowacourse-modal-component-marvin";
import { useCardForm } from "woowacourse-hooks-marvin";
import CardForm from "./components/CardForm";

type ModalPosition = "center" | "bottom";
type ModalType = "confirm" | "prompt" | "alert";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState<ModalPosition>("center");
  const [modalType, setModalType] = useState<ModalType>("alert");
  const cardForm = useCardForm();

  cardForm.handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <h2>
        카드를 등록하세요!{" "}
        <span role="img" aria-label="card" className="card-icon">
          💳
        </span>
      </h2>
      <CardForm cardForm={cardForm} />

      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
          justifyContent: "space-evenly",
          backgroundColor: "#f2f2f2",
          padding: "14px 0px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <div className="select-container">
          <label htmlFor="modal-position" style={{ marginRight: "8px" }}>
            모달 위치:
          </label>
          <select
            id="modal-position"
            value={modalPosition}
            onChange={(e) => setModalPosition(e.target.value as ModalPosition)}
            style={{
              padding: "6px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="center">가운데</option>
            <option value="bottom">하단</option>
          </select>
        </div>

        <div className="select-container">
          <label htmlFor="modal-type" style={{ marginRight: "8px" }}>
            모달 종류:
          </label>
          <select
            id="modal-type"
            value={modalType}
            onChange={(e) => setModalType(e.target.value as ModalType)}
            style={{
              padding: "6px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="confirm">confirm</option>
            <option value="prompt">prompt</option>
            <option value="alert">alert</option>
          </select>
        </div>
      </div>

      {modalType === "confirm" && (
        <Modal.Confirm
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position={modalPosition}
          size="small"
          title="등록되었슈!!"
          message={`${cardForm.formattedCardNumber.slice(
            0,
            4
          )}번호로 시작되는 ${cardForm.cardNetwork}카드를 만들었어요!`}
          onConfirm={() => setIsOpen(false)}
          onCancel={() => setIsOpen(false)}
        />
      )}
      {modalType === "prompt" && (
        <Modal.Prompt
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position={modalPosition}
          size="small"
          title="등록되었슈!!"
          onConfirm={(value) => {
            console.log(value);
            setIsOpen(false);
          }}
          onCancel={() => setIsOpen(false)}
        />
      )}
      {modalType === "alert" && (
        <Modal.Alert
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position={modalPosition}
          size="small"
          title="등록되었슈!!"
          message={`${cardForm.formattedCardNumber.slice(
            0,
            4
          )}번호로 시작되는 ${cardForm.cardNetwork}카드를 만들었어요!`}
          onConfirm={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
