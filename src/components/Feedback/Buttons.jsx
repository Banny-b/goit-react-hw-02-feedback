import PropTypes from 'prop-types';
import feedback from './Feedback.module.css'


export default function FeedbackButtons({ options, onLeaveFeedback }) {
    return (
        <ul className={feedback.boxButton}>
            {options.map(option => (
                <li className={feedback.elements} key={option}>
                    <button
                        key={option}
                        className={feedback.button}
                        type="button"
                        name={option}
                        onClick={onLeaveFeedback}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
}

FeedbackButtons.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};