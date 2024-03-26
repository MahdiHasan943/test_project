"use client";
import { Dialog } from "@headlessui/react";

const Popup = ({ isPopupOpen, setIsPopupOpen, article }) => {
  return (
    <div className="absolute top-0 left-0 h-[100vh] w-full flex justify-center items-center">
      <div className="w-[500px] h-[500px]">
        <Dialog open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <Dialog.Panel>
            <Dialog.Title>Article Details</Dialog.Title>
            <Dialog.Description>
              <div>
                <h3>{article?.title}</h3>
                <p>{article?.content}</p>
              </div>
            </Dialog.Description>

            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>

            <button onClick={() => setIsPopupOpen(false)}>Deactivate</button>
            <button onClick={() => setIsPopupOpen(false)}>Cancel</button>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
};

export default Popup;
