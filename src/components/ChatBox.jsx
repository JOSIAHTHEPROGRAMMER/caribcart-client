import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoaderCircle, X } from "lucide-react";
import { clearChat } from "../app/features/chatSlice";
import { LoaderOne, LoaderThree } from "./ui/loader";
import { getDateLabel } from "../lib/utils";
import { useAuth, useUser } from "@clerk/clerk-react";
import api from "../configs/axios";

const ChatBox = () => {
  const { listing, isOpen, chatId } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const { user } = useUser();
  const { getToken } = useAuth();

  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const bottomRef = useRef(null);

  // Sticky date state
  const [stickyDate, setStickyDate] = useState("");
  const messageRefs = useRef([]);
  const scrollRef = useRef(null);
  const [showSticky, setShowSticky] = useState(false);

  const dateRefs = useRef({});

  const fetchChat = async () => {
    try {
      const token = await getToken();
      const { data } = await api.post(
        "/api/chat",
        { listingId: listing.id, chatId },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setChat(data?.chat);
      setMessages(data?.chat?.messages || []);
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (listing) {
      fetchChat();
      const interval = setInterval(() => {
        fetchChat();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [listing]);

  useEffect(() => {
    if (!isOpen) {
      setChat(null);
      setMessages([]);
      setInput("");

      setStickyDate("");
      setIsSending(false);
      setIsLoading(true);
      messageRefs.current = [];
      dateRefs.current = {};
      scrollRef.current = null;
      setShowSticky(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!messages.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const date = entry.target.dataset.date;

          if (!date) return;

          if (entry.isIntersecting) {
            setShowSticky(false);
          } else {
            setStickyDate(date);
            setShowSticky(true);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 1,
      },
    );

    Object.values(dateRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [messages]);

  // Scroll listener to update sticky date
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const containerTop = scrollRef.current.getBoundingClientRect().top;

    for (let i = 0; i < messageRefs.current.length; i++) {
      const el = messageRefs.current[i];
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      if (rect.top >= containerTop) {
        const msg = messages[i];
        if (msg) {
          setStickyDate(getDateLabel(msg.createdAt));
        }
        break;
      }
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim() || isSending) return;

    try {
      setIsSending(true);

      const token = await getToken();
      const { data } = await api.post(
        "/api/chat/send-message",
        { chatId: chat.id, message: input },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setMessages((prev) => [...prev, data.newMessage]);
      setInput("");

      setIsSending(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message);
      console.log(error);
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      setStickyDate(getDateLabel(messages[0].createdAt));
    }
  }, [messages]);

  useEffect(() => {
    if (!isOpen || !messages.length) return;

    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({ behavior: "auto" });
    });
  }, [isOpen, messages]);

  if (!isOpen || !chat || !listing) return null;

  return (
    <div className="fixed inset-0 z-100 bg-black/70 backdrop-blur flex items-center justify-center sm:p-4">
      <div className="bg-white sm:rounded-lg shadow-2xl w-full max-w-2xl h-screen sm:h-[600px] flex flex-col">
        {/* Header */}
        <div className="bg-linear-to-r from-teal-500 via-sky-500 to-blue-800 text-white p-4 sm:rounded-t-lg flex justify-between">
          <div className="flex flex-col min-w-0">
            <h3 className="font-semibold text-lg truncate">{listing.title}</h3>
            <p className="text-sm opacity-90">
              {user.id === listing?.ownerId
                ? `Chatting with buyer (${chat.chatUser?.name})`
                : `Chatting with seller (${chat.ownerUser?.name})`}
            </p>
          </div>
          <button
            onClick={() => dispatch(clearChat())}
            className="p-2 hover:bg-white/20 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative flex-1 overflow-y-auto p-4 space-y-3"
        >
          {/* Sticky floating date (WhatsApp style) */}
          {showSticky && stickyDate && (
            <div className="sticky top-2 z-10 flex justify-center pointer-events-none">
              <span className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-700 shadow">
                {stickyDate}
              </span>
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <LoaderThree />
            </div>
          ) : (
            messages.map((message, index) => {
              const isSender = message.sender_id === user.id;

              const currentDateLabel = getDateLabel(message.createdAt);
              const prevMessage = messages[index - 1];
              const prevDateLabel = prevMessage
                ? getDateLabel(prevMessage.createdAt)
                : null;

              const showDateSeparator = currentDateLabel !== prevDateLabel;

              return (
                <div
                  key={message.id}
                  ref={(el) => (messageRefs.current[index] = el)}
                >
                  {/* Inline date separator */}
                  {showDateSeparator && (
                    <div
                      ref={(el) => (dateRefs.current[currentDateLabel] = el)}
                      data-date={currentDateLabel}
                      className="flex justify-center my-4"
                    >
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-600">
                        {currentDateLabel}
                      </span>
                    </div>
                  )}

                  <div
                    className={`flex ${
                      isSender ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg px-4 py-2 ${
                        isSender
                          ? "bg-sky-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                      <p
                        className={`text-xs mt-1 ${
                          isSender ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {new Date(message.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}

        {chat?.listing?.status === "active" ? (
          <div className="border-t p-4">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <textarea
                value={input}
                rows="1"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg
                border-gray-300 ounded-lg focus:outline-none max-h-32 resize-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || isSending}
                className="px-6 py-2 bg-sky-600 max-h-10
                 text-white rounded-lg hover:bg-sky-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isSending ? <LoaderCircle className="animate-spin" /> : "Send"}
              </button>
            </form>
          </div>
        ) : (
          <div className="border-t p-4">
            <p className="text-sm text-center text-shadow-gray-600">
              {chat ? `Listing is ${chat?.listing.status}` : <LoaderOne />}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
