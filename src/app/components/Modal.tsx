"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

function Modal({
  isOpen,
  onClose,
  children,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[1000] flex justify-center items-center px-4 ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative z-50 max-w-md w-full p-10 rounded-2xl max-h-[80vh] overflow-y-auto
             before:content-[''] before:absolute before:inset-0 
             before:bg-[url('/image/logo-ingcontel.webp')] 
             before:bg-no-repeat before:bg-center before:bg-contain 
             before:opacity-10 before:z-0 before:pointer-events-none
             bg-white/40 border border-white/70 backdrop-blur"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
