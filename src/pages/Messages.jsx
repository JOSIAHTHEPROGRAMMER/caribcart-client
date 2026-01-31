import React, { useEffect, useMemo, useState } from "react";
import { dummyChats } from "../assets/assets";
import { LoaderCircle, MessageCircle, Search } from "lucide-react";
import { getDateLabel } from "../lib/utils";
import { useDispatch } from "react-redux";
import { setChat } from "../app/features/chatSlice";
import { Link } from "react-router-dom";
import api from "../configs/axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-hot-toast";

const Messages = () => {
  const dispatch = useDispatch();
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

  const [chats, setChats] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const filteredChats = useMemo(() => {
    if (!searchQuery) return chats;

    return chats.filter((chat) => {
      const chatUser =
        chat.chatUserId === user.id ? chat.ownerUser : chat.chatUser;

      return (
        chatUser.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.listing.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [chats, searchQuery]);

  const handleOpenChat = (chat) => {
    dispatch(
      setChat({
        listing: chat.listing,
        chatId: chat.id,
      }),
    );
  };

  const fetchUserChats = async () => {
    try {
      const token = await getToken();
      const { data } = await api.get("/api/chat/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setChats(data.chats);
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && isLoaded) {
      fetchUserChats();
      const interval = setInterval(() => {
        fetchUserChats();
      }, 10 * 1000);
      return () => clearInterval(interval);
    }
  }, [user, isLoaded]);

  return (
    <div
      className="mx-auto min-h-screen px-6
    md:px-16 lg:px-24 xl:px-32"
    >
      <div className="py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Messages</h1>

          <p className="text-gray-600">Chat with others in the marketplace </p>
        </div>

        <div className="relative max-w-xl mb-8">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2
          text-gray-400 w-5 h-5"
          />
          <input
            className="w-full pl-10 py-2 border
             border-gray-300 rounded-lg focus:outline-sky-500 "
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="flex justify-center text-gray-500 items-center h-full">
            <p>Loading messages...</p>
          </div>
        ) : filteredChats.length === 0 ? (
          <div
            className="bg-white rounded-lg
           border border-gray-200 p-16 shadow-xs 
           text-center"
          >
            <div
              className="w-16 h-16 
              bg-gray rounded-full flex 
              items-center justify-center mx-auto mb-4`"
            >
              <MessageCircle className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="">
              {searchQuery ? "No results found" : "No messages found"}
            </h3>
            <p>
              {searchQuery
                ? "Try a different search term"
                : 'Start a conversation now by viewing a listing and clicking "Chat  with Seller"'}
            </p>
          </div>
        ) : (
          <div
            className="bg-white rounded-lg shadow-xs 
          border border-gray-200 divide-y divide-gray-200"
          >
            {filteredChats.map((chat, index) => {
              const chatUser =
                chat.chatUserId === user.id ? chat.ownerUser : chat.chatUser;

              const isUnread =
                !chat.isLastMessageRead &&
                chat.isLastMessageSenderId !== user?.id;

              return (
                <div
                  key={chat.id}
                  index={index}
                  onClick={() => handleOpenChat(chat)}
                  className="w-full text-left hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="p-4 flex items-start space-x-4">
                    {/* avatar */}
                    <div
                      className="w-12 h-12 rounded-full overflow-hidden shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link to={`/listing/${chat.listing.id}`}>
                        <img
                          src={chatUser?.image}
                          alt={chatUser?.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>

                    {/* content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div className="min-w-0">
                          <h3 className="font-semibold truncate">
                            {chat.listing?.title}
                          </h3>
                          <p className="text-sm text-gray-600 truncate">
                            {chatUser?.name}
                          </p>
                        </div>

                        <span className="text-xs text-gray-500 shrink-0 ml-2">
                          {getDateLabel(chat.createdAt)}
                        </span>
                      </div>

                      <p
                        className={`mt-1 text-sm truncate ${
                          isUnread
                            ? "text-sky-600 font-medium"
                            : "text-gray-500"
                        }`}
                      >
                        {chat.lastMessage || "No message yet"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
