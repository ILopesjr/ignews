import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButton {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButton) {
  const { data: session } = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn('github');
      return;
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;
      console.log(sessionId);
      
      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({sessionId});
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscriber now
    </button>
  );
}
