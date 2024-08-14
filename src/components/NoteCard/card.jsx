/* eslint-disable react/prop-types */
import styles from './card.module.css';

const NoteCard = ({ cardData }) => {
    return (
        <div className={styles?.['note-card']}>
            <p>{ cardData?.note }</p>

            <div className={`${styles?.['time-stamp']} d-flex`}>
                <span>{cardData?.date}</span>
                <span></span>
                <span>{cardData?.time}</span>
            </div>
        </div>
    );
};

export default NoteCard;