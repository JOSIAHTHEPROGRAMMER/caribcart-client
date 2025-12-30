"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MapPin, FileLineChart, User, BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { platformIcons } from "../../assets/assets";

let interval;
const currency = import.meta.env.VITE_CURRENCY;
export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
}) => {
  const navigator = useNavigate();

  if (!Array.isArray(items) || items.length === 0) return null;

  const [cards, setCards] = useState(() => [...items]);

  const startFlipping = () => {
    clearInterval(interval);
    interval = setInterval(() => {
      setCards((prev) => {
        if (prev.length <= 1) return prev;
        const copy = [...prev];
        copy.unshift(copy.pop());
        return copy;
      });
    }, 5000);
  };

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-85 w-85 md:h-72 md:w-[420px]"
      onMouseEnter={() => clearInterval(interval)}
      onMouseLeave={startFlipping}
    >
      {cards.map((item, index) => (
        <motion.div
          key={item.id ?? `${item.platform}-${index}`}
          className="
            absolute inset-0 rounded-3xl
            bg-white/95 backdrop-blur
            border border-slate-400
            
            p-5 flex flex-col justify-between
          "
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          {/* FEATURED BADGE */}
          {item.featured && (
            <div className="absolute -top-3 -left-3 z-20">
              <span className="px-4 py-1 text-xs font-semibold text-white rounded-full
                bg-linear-to-r from-[#FF6B35] via-[#F7C948] to-[#FF9F1C]
                ">
                Featured
              </span>
            </div>
          )}

          {/* HEADER */}
          <div
            className={`rounded-xl p-0.5 bg-linear-to-tr ${index % 2 === 0
                ? "from-[#00B4D8] via-[#0096C7] to-[#0077B6]"
                : "from-[#06D6A0] to-[#1B9AAA]"
              }`}
          >
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-3">
                {platformIcons[item.platform]}

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    @{item.username} ·{" "}
                    <span className="capitalize">{item.platform}</span>
                    {" "}
                    <span
                      className=" ml-4 px-2 py-1 capitalize rounded-full text-xs font-semibold text-white  bg-linear-to-r
                       from-[#00B4D8] via-[#0096C7] to-[#0077B6] shadow-sm"
                    >
                      {item.niche}
                    </span>

                  </p>
                </div>

                {item.verified && (
                  <BadgeCheck className="ml-auto text-green-500 w-5 h-5" />
                )}
              </div>
            </div>
          </div>

          {/* BODY: STATS + DESCRIPTION SIDE BY SIDE */}
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 tex" />
                <span>{item.followers_count?.toLocaleString()} Followers</span>
              </div>

              {item.engagement_rate && (
                <div className="flex items-center gap-2">
                  <FileLineChart className="w-4 h-4" />
                  <span>{item.engagement_rate}% Engagement</span>
                </div>
              )}

              {item.country && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{item.country}</span>
                </div>
              )}
            </div>



            <p className="text-gray-600 leading-snug line-clamp-4">

              {item.description}
            </p>
          </div>

          {/* FOOTER */}
          <div className="mt-4 flex items-center justify-between">
            <span className="font-bold text-transparent bg-clip-text
              bg-linear-to-r from-[#00B4D8] to-[#06D6A0]">
              {currency}{item.price.toLocaleString()}
            </span>

            <button
              onClick={() => {
                navigator(`/listing/${item.id}`);
                window.scrollTo(0, 0);
              }}
              className="
                px-5 py-2 text-sm font-semibold rounded-lg text-white
                bg-linear-to-r from-[#FF6B6B] to-[#FFD93D]
                hover:brightness-110
                transition-all duration-300
                
              "
            >
              View Details
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
