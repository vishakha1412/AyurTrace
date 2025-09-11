 import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="bg-green-200 p-4 flex flex-wrap justify-between items-center">
      <div className="text-xl font-bold text-green-900">🌿 {t('greeting')}</div>
      <div className="flex gap-4 text-green-700">
       
        <span>📍 {t('gps')}</span>
        <span>✅ {t('network')}</span>
      </div>
      <select
        className="mt-2 md:mt-0 p-2 rounded bg-green-100 text-green-800"
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
      </select>
    </header>
  );
}
