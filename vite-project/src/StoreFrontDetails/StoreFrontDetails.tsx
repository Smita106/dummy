import styles from './StoreFrontDetails.module.css'

const StoreFrontDetails = () => {
    return <div>
        <div className={styles.heroImage}>
            <div className={styles.card}>
               <h2>Create a No-Code Virtual Storefront</h2>
               <p>Follow 6 easy steps, and ship out an XR-ready storefront in minutes!</p>
               <div className={styles.buttonContainer}><button>Get Started</button></div>
            </div>
        </div>
    </div>
}

export default StoreFrontDetails;