import React, { useState } from 'react';
import './FAQ.css'

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Define your list of questions and answers
  const faqList = [
    {
      id: 1,
      question: 'WHAT’S THE PRICE FOR DIESEL ORDERED?',
      answer: 'Diesel is delivered at the day’s running price including taxes applicable in the state..',
    },
    {
      id: 2,
      question: 'ARE THERE ANY HIDDEN CHARGES?',
      answer: 'No, there are no hiden charges on any order',
    },
    {
      id: 3,
      question: 'WHERE DO YOU DELIVER?',
      answer: 'Our services are only delivered within the locations shown on our map.',
    },
    {
      id: 4,
      question: 'WHEN CAN YOU DELIVER?',
      answer: 'Go-FUEL operates at normal working hours 8AM-5PM MON-FRI',
    },
    {
      id: 5,
      question: 'WHERE DO YOU GET THE FUEL FROM?',
      answer: 'GOFUEL sources its fuel from the NNPC and other reputable sources.',
    },
    {
      id: 6,
      question: 'WHAT IF THERE IS AN EXCESS ORDER?',
      answer: 'We will refund the excess amount to the customer.',
    },
    {
      id: 7,
      question: 'WHAT’S THE PRICE FOR DIESEL ORDERED?',
      answer: 'Price is subject to change daily. we do advice you look at the current price of the fuel type before ordering. ',
    },
    {
      id: 8,
      question: 'HOW FAST CAN I GET MY FEUL DELIVERED?',
      answer: 'Our system will automatically calculate the distance of the nearest supply point to your destination and the time will be show to you.',
    },
  ];

  // Function to handle when a question is clicked
  const handleQuestionClick = (questionId) => {
    if (selectedQuestion === questionId) {
      setSelectedQuestion(null); // Deselect the question if it's already selected
    } else {
      setSelectedQuestion(questionId); // Set the selected question
    }
  };

  return (
    <div className="container faq-container">
      <div className='row'>
        <div className='col-md-6 offset-md-3 text-center'>
        <h2 className='text-faq'>FAQ</h2>
        <p>Most frequent questions and answers</p>
        </div>
      <div className="col-md-6 questions">
        <ul>
          {faqList.map((faq) => (
            <li key={faq.id} onClick={() => handleQuestionClick(faq.id)} className={selectedQuestion === faq.id ? 'active' : ''}>
              {faq.question}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-6 answers">
        {selectedQuestion && (
          <div className="answer">
            {faqList.find((faq) => faq.id === selectedQuestion).answer}
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default FAQ;
