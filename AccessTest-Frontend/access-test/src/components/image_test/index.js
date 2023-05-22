import '../index.css';
import './index.css';
import React, { useState } from 'react';
import imageTest from '../../images/image_test.PNG';

const TestImage = () => {
  return (
    <div>
      <h1 className='test-title'>Test1: Image Testing</h1>
      <h2 className='test-def'>Definition</h2>
      <div className='paragraph-img'>
        <p className='def-paragraph'>Images and graphics make content more pleasant and easier to understand for many people, and in particular for those with cognitive and learning disabilities. They serve as cues that are used by people with visual impairments, including people with low vision, to orient themselves in the content.<br/> Images must have text alternatives that describe the information or function represented by them. This ensures that images can be used by people with various disabilities. Let’s see how to provide appropriate text alternatives based on the purpose of the image. There are 7 types of images, each should have a specific alternative.</p>
        <img className='img-test' src={imageTest} alt="wrong and right alt text" />
      </div>
      <ol className='def-paragraph image-types'>
        <li><b>Informative images: </b>Should be accompanied by a short description conveying the essential information presented by the image.</li>
        <li><b>Decorative images: </b>Provide a null text alternative (alt="") since the only purpose of an image is to add visual decoration to the page.</li>
        <li><b>Functional images: </b>Should describe the function of a link or button instead of the visual image.</li>
        <li><b>Images of text: </b>Should contain the same words as in the image.</li>
        <li><b>Complex images: </b>Such as graphs and diagrams: Alternative should provide a complete text equivalent of the data or information provided in the image.</li>
        <li><b>Groups of images: </b>If multiple images convey a single piece of information, the text alternative for one image should convey the information for the entire group.</li>
        <li><b>Image maps: </b>The text alternative for an image that contains multiple clickable areas should provide an overall context for the set of links.</li>
      </ol>
      <h2 className='test-fail'>Possible Failure</h2>
      <ul>
        <li>Decorative images have non-null value for alt text</li>
        <li>Image used as CAPTCHA lacks description</li>
        <li>Image of meaningful text lacks alt text</li>
        <li>Image of meaningful text has alt text that does not match the image text exactly</li>
        <li>Meaningful image lacks alt text</li>
        <li>Meaningful image has inappropriate or inadequate alt text</li>
      </ul>
    </div>
  );
};

export default TestImage;