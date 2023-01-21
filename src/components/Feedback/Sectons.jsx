import PropTypes from 'prop-types';
import feedback from './Feedback.module.css';


export default function Section({ title, children }) {
    return (
        <div className={feedback.section}>
            <h2 className={feedback.title}>{title}</h2>
            {children}
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};