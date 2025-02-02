import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { RxCheck } from "react-icons/rx";
import { RoundedButton } from "./RoundedButton";

const Modal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="bg-neutral-950 w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <RxCheck />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2 text-neutral-950">
                Thank you for your message!
              </h3>
              <p className="text-center mb-6 text-neutral-950">
                I will get back to you as soon as possible.
              </p>
              <div className="flex justify-center">
                <RoundedButton
                  href="#"
                  onClick={() => setIsOpen(false)}
                  color="neutral"
                  backgroundColor="#0a0a0a"
                  size="custom"
                  customSize={{ width: 'w-[140px]', padding: 'py-4' }}
                >
                  Close
                </RoundedButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;