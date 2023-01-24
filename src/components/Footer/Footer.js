import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <main className={styles.Footer}>
            <div className={styles.name}>Espresso Bar</div>
            <div className={styles.banner}>
                <ul>
                <ul className={styles.text}>Connect</ul>
                <ul className={styles.text}>About Us</ul>
                <ul className={styles.text}>Our Team</ul>
                </ul>
            </div>
        </main>
    )
}