"use client";

import Button from "./Button";

export default function MobileConsultationBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200 bg-white/95 backdrop-blur-md p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden safe-bottom"
      aria-label="Quick consultation booking"
    >
      <Button href="#book" variant="primary" size="lg" className="w-full">
        Book Consultation
      </Button>
    </div>
  );
}
