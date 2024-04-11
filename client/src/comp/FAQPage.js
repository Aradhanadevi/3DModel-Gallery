import React, { useState } from 'react';
import './Css/FAQPage.css'; // Import CSS file for styling

const FAQPage = () => {
  // State to track the visibility of each answer
  const [answersVisible, setAnswersVisible] = useState({});

  // Function to toggle the visibility of an answer
  const toggleAnswer = (question) => {
    setAnswersVisible((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };

  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-item">
        <h2 className="question" onClick={() => toggleAnswer('q1')}>
          Question 1: What types of 3D models are available for download?
        </h2>
        {answersVisible['q1'] && (
          <p className="answer">
            Answer: Our project offers a wide variety of 3D models suitable for
            games and animations, including characters, environments, props, and
            more.
          </p>
        )}
      </div>
      <div className="faq-item">
        <h2 className="question" onClick={() => toggleAnswer('q2')}>
          Question 2: How do I download 3D models from your project?
        </h2>
        {answersVisible['q2'] && (
          <p className="answer">
            Answer: To download 3D models, simply browse our collection, select
            the desired model, and follow the download instructions provided on
            the model's page.
          </p>
        )}
      </div>
      <div className="faq-item">
        <h2 className="question" onClick={() => toggleAnswer('q3')}>
          Question 3: Are the 3D models compatible with popular game engines
          and animation software?
        </h2>
        {answersVisible['q3'] && (
          <p className="answer">
            Answer: Yes, our 3D models are compatible with a range of popular
            game engines and animation software, including Unity, Unreal Engine,
            Blender, Maya, and more.
          </p>
        )}
      </div>
      {/* Add more FAQ items as needed */}
    </div>
  );
};

export default FAQPage;
