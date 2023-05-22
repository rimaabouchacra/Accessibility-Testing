import '../image_test/index.css';
import './index.css';
import '../index.css';
import React, { useState } from 'react';
import headingTest from '../../images/heading_levels.png';
import Modal from 'react-modal';

const TestHeading = () => {
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
      <h1 className='test-title'>Test2: Headings Test</h1>
      <div className='headingTest-img'>
        <img src={headingTest} alt="headings hierarchy representation" />
      </div>
      <h2 className='test-deff'>Headings Accessibility Rules</h2>
      <ol className='def-paragraph image-types'>
        <li>The heading should describe the purpose or topic of the content that follows.</li>
        <li>All text that looks like a heading is marked up as a heading.</li>
        <li>The headings should correctly describe the structure of the document:</li>
      </ol>
      <ul className='heading-subpoints'>
         <li>One H1 on the page</li>
         <li>Subsections have H2 headings</li>
         <li>Sub-subsections have H3 headings</li>
         <li>Heading levels are not skipped - section heading with an H2 has subsections with H3, not H4 or H5</li>
      </ul>
      
      <h2 className='test-fail'>Possible failures for Test 2</h2>
      <ul>
        <li>Heading doesn't describe the topic or content that follows</li>
        <li>Visually apparent headings are not marked up has headings (no H1, H2, H3, etc tags)</li>
        <li>Content that is marked up as a heading is styled to look like regular text</li>
        <li>Headings fail to create a cohesive outline that describes the structure of the document - are used out of order, or heading levels are skipped.</li>
      </ul>
      <div className='test-btn'>
        <button className='all-btn' onClick={openModal}>{isLoading ? 'Loading...' : 'Perform Heading Test'}</button>
      </div>
      
 <Modal 
        className="modal"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <h2>Heading Test Result</h2>
        <div>
          <label className='label' htmlFor="page">Page1</label>
          <table className='table'>
            <thead>
              <tr>
                <th>Heading</th>
                <th>Status</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Heading1</td>
                <td className='failed'>Failed</td>
                <td>Headings must be properly nested</td>
              </tr>
              <tr>
                <td>Heading2</td>
                <td className='failed'>Failed</td>
                <td>Page must have h1 element</td>
              </tr>
              <tr>
                <td>Heading5</td>
                <td className='failed'>Failed</td>
                <td>Doesn't  describe the purpose</td>
              </tr>
              <tr>
                <td>Heading3</td>
                <td>Passed</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div><br />
        <div>
          <label className='label' htmlFor="page">Page2</label>
          <table className='table'>
            <thead>
              <tr>
                <th>Heading</th>
                <th>Status</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Heading3</td>
                <td className='failed'>Failed</td>
                <td>Headings must be properly nested</td>
              </tr>
               <tr>
                <td>Heading4</td>
                <td>Passed</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Heading1</td>
                <td className='failed'>Failed</td>
                <td>Doesn't  describe the purpose</td>
              </tr>
              <tr>
                <td>Heading5</td>
                <td className='failed'>Failed</td>
                <td>Doesn't  describe the purpose</td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <h4 className='failed'>Failed Test!</h4>
        <button className='all-btn' onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};


export default TestHeading;