import '../index.css';
import './index.css';
import React, { useState } from 'react';
import imageLink from '../../images/links.PNG';
import imageBtn from '../../images/Btn-Focus.png';
import Modal from 'react-modal';

const  TestLinkButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsModalOpen(true);
      setIsLoading(false);
    }, 2000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1 className='test-title'>Test3: Links and Buttons Test</h1>
      <div className='paragraph-img2'>
        <img  src={imageBtn} alt="Button Focus accessible and not accessible example" />
        <img  src={imageLink} alt="example of accessible and not accessible links" />
      </div><br /><br />
      <h2 className='test-deff'>Links&Buttons Accessibility Rules</h2>
      <ol className='def-paragraph image-types'>
        <li>The purpose of the link or button should be determined by the link or button text.</li>
        <li>For buttons, button text should describe what action the button will perform.</li>
        <li>For links, link text should describe the content the link leads to (e.g., not 'Click here').</li>
        <li>Links and buttons should have a visible focus state.</li>
        <li>Using the keyboard, tab to each link or button - is there a visible indicator of which link or button currently has keyboard focus?</li>
        <li>All links and buttons can be activated without a mouse, by keyboard alone.</li>
        <li>Enter key for links.</li>
        <li>Enter or spacebar for buttons.</li>
        <li>Links and buttons should be correctly marked up with &lt;a&gt;, &lt;button&gt; , or &lt;input&gt;  tags.</li>
     </ol>

      <h2 className='test-fail'>Possible failures for Test 3</h2>
      <ul>
        <li>Link or button text does not convey purpose.</li>
        <li>Generic text like 'Read more' or 'Click here' is used.</li>
        <li>Link or button text otherwise fails to communicate purpose.</li>
        <li>Lack of visible focus state.</li>
        <li>Unable to activate link or button with keyboard alone.</li>
        <li>Links or buttons marked up with &lt;div&gt;, &lt;span&gt;, or other markup and activated by JavaScript alone.</li>
      </ul>
      <div className='test-btn'>
        <button className='all-btn' onClick={openModal}>{isLoading ? 'Loading...' : 'Links and Buttons Testing'}</button>
      </div>
      
      
 <Modal 
        className="modal"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <h2>Links And Buttons Test Result</h2>
        <div>
          <label className='label' htmlFor="page">Page1</label>
          <table className='table'>
            <thead>
              <tr>
                <th>Link or Button</th>
                <th>Status</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Link1</td>
                <td className='failed'>Failed</td>
                <td>Link text must be unique</td>
              </tr>
              <tr>
                <td>Button2</td>
                <td>Passed</td>
                <td>-</td>
              </tr>
              
              <tr>
                <td>Link3</td>
                <td className='failed'>Failed</td>
                <td>Link text must describe the link target</td>
              </tr>
            </tbody>
          </table>
        </div><br />
        <div>
          <label className='label' htmlFor="page">Page2</label>
          <table className='table'>
            <thead>
              <tr>
                <th>Link or Button</th>
                <th>Status</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Button1</td>
                <td className='failed'>Failed</td>
                <td>Button text doesn't describe action performed</td>
              </tr>
              <tr>
                <td>Button2</td>
                <td>Passed</td>
                <td>-</td>
              </tr>
               <tr>
                <td>Link5</td>
                <td className='failed'>Failed</td>
                <td>Link text must describe the link target</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 className='failed'>Passed Test!</h4>
        <button className='all-btn' onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};


export default TestLinkButton;