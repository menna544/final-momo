import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCreditCard } from '@fortawesome/free-solid-svg-icons'; 
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState('monthly');
  const [cardNumber1, setCardNumber1] = useState('');
  const [cardNumber2, setCardNumber2] = useState('');
  const [cardNumber3, setCardNumber3] = useState('');
  const [cardNumber4, setCardNumber4] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [cardError, setCardError] = useState('');
  const navigate = useNavigate(); 

  const paymentDetails = {
    monthly: { price: 30, frequency: 'per month' },
    yearly: { price: 100, frequency: 'per year' },
    premiumMonthly: { price: 100, frequency: 'per month' },
    premiumYearly: { price: 150, frequency: 'per year' }
  };

  const back1 = () => {
    navigate('/Home');
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleCardNumberChange = (event, setCardNumber) => {
    const value = event.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setCardNumber(value);
    }
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handlePayment = () => {
    const cardNumber = `${cardNumber1} ${cardNumber2} ${cardNumber3} ${cardNumber4}`;

    if (!isValidCardNumber(cardNumber)) {
      setCardError('Invalid credit card number. Please enter a valid card number.');
      return;
    }

    setPaymentStatus('Payment successful!');
    localStorage.setItem('isPaymentSuccessful', 'true');
    navigate('/Home');
  };

  const isValidCardNumber = (cardNumber) => {
    return /^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber);
  };

  return (
    <>
      <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={back1} />
      <div className='center'>
        <h2>Select a Payment Plan:</h2>
        <div className='pay'>
          <input
            type="radio"
            id="monthly"
            name="paymentOption"
            value="monthly"
            className='inn'
            checked={selectedOption === 'monthly'}
            onChange={() => handleOptionChange('monthly')}
          />
          <label htmlFor="monthly">Monthly - $30 per month</label>
        </div>
        <div className='pay'>
          <input
            type="radio"
            id="yearly"
            name="paymentOption"
            value="yearly"
            className='inn'
            checked={selectedOption === 'yearly'}
            onChange={() => handleOptionChange('yearly')}
          />
          <label htmlFor="yearly">Yearly - $100 per year</label>
        </div>
        <div className='pay'>
          <input
            type="radio"
            id="premiumMonthly"
            name="paymentOption"
            value="premiumMonthly"
            className='inn'
            checked={selectedOption === 'premiumMonthly'}
            onChange={() => handleOptionChange('premiumMonthly')}
          />
          <label htmlFor="premiumMonthly">Premium Monthly - $100 per month</label>
        </div>
        <div className='pay'>
          <input
            type="radio"
            id="premiumYearly"
            name="paymentOption"
            value="premiumYearly"
            className='inn'
            checked={selectedOption === 'premiumYearly'}
            onChange={() => handleOptionChange('premiumYearly')}
          />
          <label htmlFor="premiumYearly">Premium Yearly - $150 per year</label>
        </div>

        <h3>Payment Details:</h3>
        <p className='pay2'>
          You have selected: {selectedOption === 'premiumMonthly' || selectedOption === 'premiumYearly'
          ? 'Premium ' : ''}
          {paymentDetails[selectedOption].frequency} Subscription for ${paymentDetails[selectedOption].price}{' '}
          {selectedOption === 'yearly' || selectedOption === 'premiumYearly' ? 'per year' : 'per month'}.
        </p>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <div className="inputcontainer">
            <input
              type="text"
              id="cardNumber1"
              value={cardNumber1}
              onChange={(e) => handleCardNumberChange(e, setCardNumber1)}
              className="inputfield"
              maxLength="4"
            />
            <input
              type="text"
              id="cardNumber2"
              value={cardNumber2}
              onChange={(e) => handleCardNumberChange(e, setCardNumber2)}
              className="inputfield"
              maxLength="4"
            />
            <input
              type="text"
              id="cardNumber3"
              value={cardNumber3}
              onChange={(e) => handleCardNumberChange(e, setCardNumber3)}
              className="inputfield"
              maxLength="4"
            />
            <input
              type="text"
              id="cardNumber4"
              value={cardNumber4}
              onChange={(e) => handleCardNumberChange(e, setCardNumber4)}
              className="inputfield"
              maxLength="4"
            />
            <FontAwesomeIcon icon={faCreditCard} className="inputicon" />
          </div>
          {cardError && <p style={{ color: 'red' }}>{cardError}</p>}
        </div>

        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            className="input-field"
          />
        </div>
        <div>
          <button onClick={handlePayment}>Send Money</button>
        </div>
        <p>{paymentStatus}</p>
      </div>
    </>
  );
};

export default Payment;
