import styles from './Header.module.css'

import igniteLogo from '../img/ignite-logo.svg';

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={igniteLogo} alt="Logotipo" />
                {/* <strong >Logotipo Feed</strong> */}
            </header>
        </div>
    );
}