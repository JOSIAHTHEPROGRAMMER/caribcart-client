export default function AboutSection() {
  const features = [
    {
      img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png",
      title: "Lightning Fast Performance",
      desc: "Our platform is optimized for speed, ensuring smooth and reliable user experiences.",
      color: "from-[#FF6B6B] to-[#FFD93D]",
    },
    {
      img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png",
      title: "Beautiful Design",
      desc: "We focus on clean, modern, and intuitive interfaces that engage your users.",
      color: "from-[#1DD3B0] to-[#3C91E6]",
    },
    {
      img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png",
      title: "Seamless Integration",
      desc: "Easily connect with existing tools and systems for hassle free adoption.",
      color: "from-[#FF6B6B] to-[#FFD93D]",
    },
    {
      img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/bookEmoji.png",
      title: "Customer Focused Support",
      desc: "Our team is here to guide you at every step, ensuring your success.",
      color: "from-[#1DD3B0] to-[#3C91E6]",
    },
    {
      img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/boxEmoji.png",
      title: "Scalable Solutions",
      desc: "Built to grow with your business, supporting teams of any size.",
      color: "from-[#FF6B6B] to-[#FFD93D]",
    },
    {
      img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/brainEmoji.png",
      title: "Innovation Driven",
      desc: "Constantly improving and adding features to keep you ahead of the curve.",
      color: "from-[#1DD3B0] to-[#3C91E6]",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="relative py-20 px-4 md:px-16 lg:px-24 xl:px-40 bg-white">
        <h1
          className="relative text-3xl md:text-4xl font-semibold text-center bg-linear-to-r
         from-[#FF6B6B] to-[#FFD93D] bg-clip-text text-transparent"
        >
          About Our Carib Cart
        </h1>
        <p className="text-sm md:text-base text-gray-600 text-center mt-2 max-w-xl mx-auto">
          We are a Caribbean marketplace connecting buyers and sellers in a
          safe, vibrant, and reliable online environment. Our platform empowers
          local businesses and individuals to trade social media profiles and
          digital assets with ease, blending technology, security, and a
          uniquely Caribbean spirit.
        </p>

        <div className="relative max-w-6xl mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pt-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition relative z-10 border border-gray-100"
            >
              <div
                className={`p-4 rounded-lg bg-linear-to-tr ${item.color} inline-block`}
              >
                <img src={item.img} alt="" className="w-12 h-12" />
              </div>
              <div className="mt-5 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
