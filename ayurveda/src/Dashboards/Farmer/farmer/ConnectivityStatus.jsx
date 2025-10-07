import React, { useEffect, useState } from 'react';

export default function ConnectivityStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateStatus = () => setOnline(navigator.onLine);
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
    };
  }, []);

  return (
    <div className={`text-sm p-2 text-center ${online ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
      {online ? '✅ Online — Data synced' : '⚠️ Offline — Changes will sync when connected'}
    </div>
  );
}
