'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const PLI_URL = 'https://pli.texmin.gov.in/';
const SESSION_KEY = 'pli-popup-dismissed';

export default function PLIPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // sessionStorage may be unavailable
    }
    setIsOpen(true);
  }, []);

  const close = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // ignore
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-label="Production Linked Incentive Scheme for Textiles"
      onClick={close}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          className="absolute top-2 right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <a
          href={PLI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onClick={close}
        >
          <Image
            src="/images/PLI.jpeg"
            alt="Production Linked Incentive (PLI) Scheme for Textiles - Applications open from Nov 1 to Dec 31, 2026. Click here to apply."
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </a>
      </div>
    </div>
  );
}
