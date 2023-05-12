import styles from "./Modal.module.css";


function Modal({shown, setShown}) {
    console.log({shown})
    return (
        <div>
            {shown ? (
                <div
                    className={styles.modalBackdrop}
                    onClick={() => setShown(false)}
                >

                    <div
                        className={styles.modalContent}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        onKeyDown={(e) => e.stopPropagation()}>

                        
                    </div>

                </div>
            ) : null}
        </div>
    );
}

export default Modal;