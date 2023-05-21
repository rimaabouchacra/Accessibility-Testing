import '../index.css';
import './index.css';
import React, { useState } from 'react';
import header from '../../images/Header.png';

const Content = () => {
  const [url, setUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!url.match(/^https?:\/\/.+$/)) {
      setErrorMessage('Please enter a valid URL starting with http:// or https://');
      return;
    }

  };

  return (
    <div>
      <img className='headerr' src={header} alt="accessibility testing text with related icons" />
      <div className='content'>
        <h1>What is Accessibility Testing?</h1>
        <p className='def-paragraph'>Accessibility testing is the process of evaluating a product or system to ensure it is usable and accessible to individuals with disabilities. It involves assessing the design, functionality, and content of a website, application, or digital product to identify and address barriers that may prevent people with disabilities from accessing or using it effectively. The goal of accessibility testing is to verify compliance with accessibility standards and guidelines, such as the Web Content Accessibility Guidelines (WCAG). It involves examining various aspects, including but not limited to perceivability, operability, understandability, and robustness. Accessibility testing typically involves a combination of manual testing, automated testing using accessibility testing tools, and user testing with individuals who have disabilities. By conducting thorough accessibility testing, developers can identify and address barriers, making their products more inclusive and usable for a wider range of users.</p>
        <div>
            <h1>Accessibility Evaluation</h1>
            <label className='label' htmlFor="url">Enter your website URL:</label>
            <input
              className="input-url"
              type="text"
              pattern="https?://.*"
              placeholder='https://www.example.com'
              value={errorMessage ? errorMessage :url}
              onChange={handleUrlChange}
              onFocus={() => setErrorMessage('')}
              onBlur={(event) => event.target.placeholder = 'https://www.example.com'}
              required
            />
           <br/>
           <button className='all-btn' onClick={handleSubmit} type="submit">Start Testing</button>
        </div>
       
      </div>
    </div>
  );
};

export default Content;
