import PropTypes from 'prop-types';
import './index.scss';

interface AccordionProps {
  className:  string;
  heading: string | JSX.Element;
  content: string | JSX.Element;
} 

const Accordion = ({ className, heading, content }:  AccordionProps) => {
  return (
    <details className={`accordion__comp ${className || ''}`}>
      <summary>
        <section>{heading}</section>
        <button type="button" className="toggler-arrow" > ⌃ </button>
      </summary>
      <section className="accordion-content">{content}</section>
    </details>
  );
};


export default Accordion;