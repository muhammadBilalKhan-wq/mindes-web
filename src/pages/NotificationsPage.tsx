import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { NotificationItem } from '../types';

export const NotificationsPage = () => {
  const [items, setItems] = useState<NotificationItem[]>([]);

  useEffect(() => {
    const load = async () => {
      setItems(await api.getNotifications());
    };
    void load();
  }, []);

  return (
    <section>
      <header className="border-b border-neutral-200 px-4 py-3 dark:border-neutral-800 sm:px-6">
        <h1 className="text-lg font-semibold">Notifications</h1>
      </header>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="border-b border-neutral-200 px-4 py-4 text-sm dark:border-neutral-800 sm:px-6">
            <p>
              <span className="font-medium">@{item.actor}</span> {item.message}
            </p>
            <p className="mt-1 text-xs text-neutral-500">{item.time}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
