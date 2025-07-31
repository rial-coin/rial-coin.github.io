import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQData = [
  {
    question: "What is RIAL Coin?",
    answer:
      "RIAL Coin is a revolutionary digital currency built on the TON blockchain. It's designed to provide secure, fast, and affordable transactions for the global economy. With advanced smart contract capabilities and seamless integration, RIAL represents the future of digital finance.",
    icon: "💎"
  },
  {
    question: "How can I purchase RIAL Coin?",
    answer:
      "You can purchase RIAL Coin directly through our platform using USDT. Simply connect your TON-compatible wallet, enter the amount you wish to purchase, and complete the transaction. The process is instant and secure with a 1:1 exchange rate.",
    icon: "🛒"
  },
  {
    question: "What makes RIAL Coin different?",
    answer:
      "RIAL Coin combines the best of blockchain technology with user-friendly design. Features include lightning-fast transactions (under 30 seconds), ultra-low fees (0.01%), military-grade security, and 24/7 global accessibility. Our deflationary model ensures long-term value appreciation.",
    icon: "⚡"
  },
  {
    question: "How secure is RIAL Coin?",
    answer:
      "RIAL Coin leverages the robust security features of the TON blockchain, including advanced cryptographic protocols, decentralized consensus mechanisms, and smart contract audits. Your funds are protected by military-grade encryption and multi-signature security systems.",
    icon: "🔒"
  },
  {
    question: "Does RIAL Coin support staking?",
    answer:
      "Yes! RIAL Coin offers competitive staking rewards for token holders. By staking your RIAL tokens, you help secure the network while earning passive income. Staking rewards are distributed automatically and can be claimed at any time.",
    icon: "🎁"
  },
  {
    question: "What are the transaction fees?",
    answer:
      "RIAL Coin features one of the lowest fee structures in the industry. Network fees are approximately 0.01 TON per transaction, making it cost-effective for both small and large transfers. No hidden fees or surprise charges.",
    icon: "💰"
  },
  {
    question: "How can I stay updated?",
    answer:
      "Follow us on our official social media channels including Twitter, Telegram, and Discord. Subscribe to our newsletter for the latest updates, feature releases, and community events. Join our vibrant community of RIAL holders worldwide.",
    icon: "📢"
  },
];

export const FAQ = () => (
  <section className="relative py-20 lg:py-32 bg-gradient-to-br from-bgDark3 via-bgDark2 to-bgDark3 overflow-hidden" id="FAQ">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 right-20 w-80 h-80 bg-primaryColor/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondaryColor/5 rounded-full blur-3xl"></div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center space-x-2 bg-primaryColor/10 border border-primaryColor/30 rounded-full px-6 py-2 mb-6"
        >
          <span className="text-primaryColor font-medium">❓ FAQ</span>
        </motion.div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
          Frequently Asked <span className="bg-gradient-to-r from-primaryColor to-secondaryColor bg-clip-text text-transparent">Questions</span>
        </h2>
        
        <p className="text-xl text-secondaryText max-w-3xl mx-auto leading-relaxed">
          Got questions about RIAL Coin? We've got answers. Find everything you need to know about our revolutionary digital currency.
        </p>
      </motion.div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 gap-6">
        {FAQData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <FAQBox
              title={item.question}
              content={item.answer}
              icon={item.icon}
              defaultOpen={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* Support Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-primaryColor/10 to-secondaryColor/10 backdrop-blur-lg rounded-3xl p-8 border border-primaryColor/30">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-secondaryText mb-6">Our support team is here to help you 24/7. Don't hesitate to reach out!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@rialcoin.io"
              className="bg-gradient-to-r from-primaryColor to-secondaryColor hover:from-primaryHover hover:to-primaryColor px-8 py-3 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </a>
            <a
              href="#"
              className="border-2 border-primaryColor hover:bg-primaryColor/10 px-8 py-3 rounded-2xl font-bold text-primaryColor transition-all duration-300"
            >
              Join Community
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-primaryColor/50 transition-all duration-300 cursor-pointer group"
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          <div className="w-12 h-12 bg-primaryColor/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primaryColor transition-colors duration-300">
              {title}
            </h3>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-secondaryText leading-relaxed pr-4">
                    {content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <div className="w-8 h-8 bg-primaryColor/20 rounded-lg flex items-center justify-center group-hover:bg-primaryColor/30 transition-colors duration-300">
            <svg className="w-4 h-4 text-primaryColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
