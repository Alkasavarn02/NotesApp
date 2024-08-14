import styles from './home.module.css';
import HomeNotesImage from '../../assets/notesvector.png';
import HomeLock from '../../assets/lock.png';

import LeftSidebar from "../../components/LeftSide/LeftSidebar";

const HomeScreen = () => {
    return (
        <div className='d-flex'>
            <div className={styles?.['left-sidebar']}>
                <LeftSidebar />
            </div>

            <section className={styles?.['right-section']}>
                <div className={styles?.['img-box']}>
                    <img src={HomeNotesImage} alt="A vector of people making notes" />
                </div>

                <h2>Pocket Notes</h2>
                <p>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                
                <div className={styles.footer}>
                    <div className={styles?.['lock-img-box']}>
                        <img src={HomeLock} alt='Lock' />
                    </div>
                    <p>end-to-end encrypted</p>
                </div>
            </section>
        </div>
    );
};

export default HomeScreen;