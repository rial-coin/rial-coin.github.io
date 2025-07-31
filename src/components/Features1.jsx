import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  const features = [
    {
      icon: "🔒",
      title: "Bank-Grade Security",
      description: "Military-grade encryption protects every transaction"
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Process transactions in under 30 seconds"
    },
    {
      icon: "💰",
      title: "Ultra Low Fees",
      description: "Pay minimal fees compared to traditional banking"
    },
    {
      icon: "🌍",
      title: "Global Access",
      description: "Available 24/7 anywhere in the world"
    }
  ];

  const benefits = [
    "Secure blockchain transactions with zero fraud risk",
    "Low transaction fees for global accessibility",
    "Seamless integration with all major wallets",
    "Real-time transaction monitoring and alerts",
    "Decentralized network ensures 99.9% uptime"
  ];

  return (
    <section
      className="relative py-20 lg:py-32 bg-gradient-to-br from-bgDark2 via-bgDark3 to-bgDark2 overflow-hidden"
      id="features"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primaryColor/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondaryColor/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-primaryColor/10 border border-primaryColor/30 rounded-full px-6 py-2 mb-6"
          >
            <span className="text-primaryColor font-medium">✨ Revolutionary Features</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-primaryColor to-secondaryColor bg-clip-text text-transparent">RIAL Coin</span>
          </h2>
          
          <p className="text-xl text-secondaryText max-w-3xl mx-auto leading-relaxed">
            Experience the future of digital currency with cutting-edge technology, 
            unmatched security, and seamless user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="lg:pr-8">
              <h3 className="text-3xl font-bold text-white mb-8">
                Built for the Future of Finance
              </h3>
              
              <p className="text-lg text-secondaryText mb-10 leading-relaxed">
                RIAL Coin combines innovative blockchain technology with user-friendly design 
                to deliver a superior digital currency experience.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor flex items-center justify-center mt-1">
                      <CheckArrowIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white group-hover:text-primaryColor transition-colors duration-300">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10"
              >
                <a
                  href="/buy"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-primaryColor to-secondaryColor hover:from-primaryHover hover:to-primaryColor px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span>Get Started Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-primaryColor/50 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primaryColor to-secondaryColor rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h4 className="text-white font-bold text-lg mb-4 group-hover:text-primaryColor transition-colors duration-300">
                  {feature.title}
                </h4>
                
                <p className="text-secondaryText leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: "99.9%", label: "Uptime" },
            { number: "<30s", label: "Transaction Time" },
            { number: "0.01%", label: "Network Fee" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <div className="text-3xl font-bold text-primaryColor mb-2">{stat.number}</div>
              <div className="text-secondaryText">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
