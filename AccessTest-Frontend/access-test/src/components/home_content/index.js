import './index.css'
import React from 'react';
import header from '../../images/Header.png'

const Content = () => {
return(
    <div>
        <img  className='headerr' src={header} alt="accessibility testing text with related icons" />
        <div className='content'>
            <h1>What is Accessibility Testing?</h1>
            <p>Accessibility testing is the process of evaluating a product or system to ensure it is usable and accessible to individuals with disabilities. It involves assessing the design, functionality, and content of a website, application, or digital product to identify and address barriers that may prevent people with disabilities from accessing or using it effectively. The goal of accessibility testing is to verify compliance with accessibility standards and guidelines, such as the Web Content Accessibility Guidelines (WCAG). It involves examining various aspects, including but not limited to perceivability, operability, understandability, and robustness. Accessibility testing typically involves a combination of manual testing, automated testing using accessibility testing tools, and user testing with individuals who have disabilities. By conducting thorough accessibility testing, developers can identify and address barriers, making their products more inclusive and usable for a wider range of users.</p>
            <h1>Accessibility Evaluation</h1>
            <label className='label' htmlFor="url">Enter your website url</label>
            <input className="input-url" type="text" />
        </div>
       
    </div>
)
}
export default Content