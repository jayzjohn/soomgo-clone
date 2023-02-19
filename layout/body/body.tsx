import React from "react";
import styles from "@/styles/Home.module.css";
import Button from "@/components/button/button";

const Body = (): JSX.Element => {
    return (
        <div className={styles.body}>
            <div className={styles.section}>
                <Button variant='success' type='button' className='button-styled'>
                    button
                </Button>
            </div>
            <div className={styles.section}></div>
        </div>
    );
};

export default Body;
