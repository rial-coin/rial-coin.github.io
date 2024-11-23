import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
    className="w-screen  flex justify-center items-center bg-bgDark1 mb-[12vw] md:mb-[10vw] lg:mb-[6vw] xl:mb-[4vw] 2xl:mb-30 hero-bg-gradient pb-24 sm:pb-8 md:pb-12 lg:pb-0"
    id="home"
  >
      <div className="w-full max-w-6xl flex flex-col justify-center items-center pt-20 md:pt-28 lg:pt-32 text-center">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-primaryText text-sm sm:text-base uppercase font-semibold tracking-wider mb-6 sm:mb-8 mt-10">
            Transform your assets into value
          </h3>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight mt-10">
            Unlock Potential <br className="hidden sm:block" /> with{" "}
            <span className="text-primaryColor">Rial Coin</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-secondaryText text-lg sm:text-xl mt-8 px-8 sm:px-16 lg:px-32 xl:px-48">
            Empowering asset management with cutting-edge blockchain
            technology. Experience seamless integrations, unparalleled security,
            and transparent transactions.
          </p>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col gap-4 sm:flex-row mt-12 pb-12 lg:pb-40">
            <a
              href="/buy"
              className="contained-button bg-primaryColor hover:bg-primaryHover w-64 sm:w-52 h-12 text-white rounded-lg font-bold text-center flex justify-center items-center transition"
              aria-label="Buy Rial Coin"
            >
              Buy Rial Coin
            </a>
            <a
              href="/sell"
              className="w-64 sm:w-52 h-12 rounded-lg font-bold border border-solid border-primaryColor text-primaryText bg-bgDark2 hover:bg-bgDark3 transition text-center flex justify-center items-center"
              aria-label="Sell Rial Coin"
            >
              Sell Rial Coin
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
