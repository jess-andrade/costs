import styles from './Message.module.css';
import { useState, useEffect } from 'react';

export default function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  //condition within condition
  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }
    setVisible(true);

    //starts the timer - show message only for 3sec
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000)
    return () => clearTimeout(timer)
  }, [msg])

  return (<>
    {visible && (
      <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    )}
  </>
  );
}