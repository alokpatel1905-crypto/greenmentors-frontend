'use client';

import React from 'react';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] text-slate-900 font-sans">
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}