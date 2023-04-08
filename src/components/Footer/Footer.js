import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <span className={styles.name}>Espresso<br />Bar<p className={styles.miami}>Miami, FL</p> </span>
            <span className={styles.banner}>
                <ul>
                <ul className={styles.text}>Connect</ul>
                <ul className={styles.text}>About Us</ul>
                <ul className={styles.text}>Our Team</ul>
                </ul>
            </span>
        </div>
    )
}