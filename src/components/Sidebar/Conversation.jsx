import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2">
        <div className="avatar online">
          <div className="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="">
            <p className="font-bold text-gray-200">Minal Vats</p>
        </div>
      </div>
      <div className="divider px-3"/>
    </>
  );
};

export default Conversation;
