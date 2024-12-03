import React, { useState } from "react";

const CardList = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const [newCard, setNewCard] = useState({ number: "", expire: "", cvv: "", name: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddCardClick = () => {
    setShowAddCardForm(true);
    setEditingIndex(null);
  };

  const handleCloseForm = () => {
    setShowAddCardForm(false);
    setNewCard({ number: "", expire: "", cvv: "", name: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "number" && (isNaN(value) || value.length > 16)) return;
    if (name === "cvv" && (isNaN(value) || value.length > 3)) return;

    setNewCard((prevCard) => ({ ...prevCard, [name]: value }));
  };

  const handleAddCard = (e) => {
    e.preventDefault();

    if (newCard.number.length === 16 && newCard.expire && newCard.cvv && newCard.name) {
      if (editingIndex !== null) {
        const updatedMethods = [...paymentMethods];
        updatedMethods[editingIndex] = newCard;
        setPaymentMethods(updatedMethods);
      } else {
        setPaymentMethods((prevMethods) => [...prevMethods, newCard]);
      }

      setNewCard({ number: "", expire: "", cvv: "", name: "" });
      setShowAddCardForm(false);
    } else {
      alert("Please fill in all fields correctly. Card number must be 16 digits.");
    }
  };

  const maskCardNumber = (number) => {
    return `xxxx xxxx xxxx ${number.slice(-4)}`;
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setNewCard(paymentMethods[index]);
    setShowAddCardForm(true);
  };

  const handleRemoveCard = () => {
    if (editingIndex !== null) {
      const updatedMethods = paymentMethods.filter((_, index) => index !== editingIndex);
      setPaymentMethods(updatedMethods);
    }
    handleCloseForm();
  };

  return (
    <div className="cardList">
      <p>Saved Payment Methods</p>
      <div className="payment-methods">
        {paymentMethods.map((method, index) => (
          <div className="payment-card" key={index}>
            <div className="card-icon">
              <img src="./Frame 100.png" alt="Card" />
            </div>
            <div className="card-details">
              <span className="card-number">{maskCardNumber(method.number)}</span>
              <span className="card-type">{method.name}</span>
            </div>
            <button className="edit-btn" onClick={() => handleEditClick(index)}>
              <img src="./edit-3.png" alt="Edit" />
            </button>
          </div>
        ))}

        {paymentMethods.length < 3 && (
          <button className="addBtn" onClick={handleAddCardClick}>
            <img src="./Frame 100 (1).png" alt="" /> Add Card Details
          </button>
        )}
      </div>

      {showAddCardForm && (
        <div className="cardOverlay">
          <div className="cardFormModal">
            <h3 style={{ padding: "1rem" }}>{editingIndex !== null ? "Edit Card Details" : "Add Card Details"}</h3>
            <form onSubmit={handleAddCard}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem" }}>
                <label>
                  Card Number
                  <input
                    type="text"
                    name="number"
                    value={newCard.number}
                    onChange={handleInputChange}
                    placeholder="Enter card number"
                    maxLength="16"
                    required
                  />
                </label>

                <label>
                  Expiration (MM/YY)
                  <input
                    type="text"
                    name="expire"
                    value={newCard.expire}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                </label>

                <label>
                  CVV
                  <input
                    type="text"
                    name="cvv"
                    value={newCard.cvv}
                    onChange={handleInputChange}
                    placeholder="CVV"
                    maxLength="3"
                    required
                  />
                </label>

                <label>
                  Name on Card
                  <input
                    type="text"
                    name="name"
                    value={newCard.name}
                    onChange={handleInputChange}
                    placeholder="Card holder name"
                    required
                  />
                </label>
              </div>

              <div className="cardSubmitBtn">
                <button type="button" className="removeBtn" onClick={handleRemoveCard}>
                  Remove
                </button>
                <div>
                  <button type="button" onClick={handleCloseForm} style={{ marginRight: "1rem" }}>
                    Cancel
                  </button>
                  <button type="submit">{editingIndex !== null ? "Save Changes" : "Save"}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardList;
