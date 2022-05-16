import styles from './styles.module.scss';

interface SubscribeButton {
  priceId: string;
}

export function SubscriberButton({priceId}: SubscribeButton){
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscriber now
    </button>
  );
}