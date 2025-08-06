"use client";

import Header from "./header/Header";

type Children = {
  children: React.ReactNode;
};

const ChatLayout = ({ children }: Children) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

ChatLayout.displayName = "ChatLayout";

export default ChatLayout;
