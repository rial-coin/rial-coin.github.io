import { motion } from "framer-motion";

const tokenomicsData = [
  { 
    category: "Public Sale", 
    allocation: "35%", 
    tokens: "7,350,000 RIAL",
    icon: "💰",
    color: "from-green-400 to-emerald-500",
    description: "Available for public purchase and trading"
  },
  { 
    category: "Team & Founders", 
    allocation: "20%", 
    tokens: "4,200,000 RIAL",
    icon: "👥",
    color: "from-blue-400 to-indigo-500",
    description: "Vested over 3 years to ensure long-term commitment"
  },
  { 
    category: "Marketing & Partnerships", 
    allocation: "15%", 
    tokens: "3,150,000 RIAL",
    icon: "📈",
    color: "from-purple-400 to-violet-500",
    description: "Strategic marketing campaigns and partnerships"
  },
  { 
    category: "Staking Rewards", 
    allocation: "10%", 
    tokens: "2,100,000 RIAL",
    icon: "🎁",
    color: "from-orange-400 to-red-500",
    description: "Distributed to token holders who stake RIAL"
  },
  { 
    category: "Strategic Reserve", 
    allocation: "10%", 
    tokens: "2,100,000 RIAL",
    icon: "🏦",
    color: "from-cyan-400 to-blue-500",
    description: "Reserved for future strategic initiatives"
  },
  { 
    category: "Ecosystem Development", 
    allocation: "10%", 
    tokens: "2,100,000 RIAL",
    icon: "🚀",
    color: "from-pink-400 to-rose-500",
    description: "Funding for dApps and ecosystem growth"
  },
];

export const Tokenomics = () => {
  const totalSupply = "21,000,000 RIAL";
  
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-bgDark1 via-bgDark2 to-bgDark3 overflow-hidden" id="tokenomics">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-primaryColor/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondaryColor/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
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
            <span className="text-primaryColor font-medium">💎 Tokenomics</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Strategic <span className="bg-gradient-to-r from-primaryColor to-secondaryColor bg-clip-text text-transparent">Token Distribution</span>
          </h2>
          
          <p className="text-xl text-secondaryText max-w-3xl mx-auto leading-relaxed mb-8">
            RIAL Coin is designed with a sustainable economic model that ensures long-term value creation and community growth.
          </p>

          {/* Total Supply Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block bg-gradient-to-r from-primaryColor/20 to-secondaryColor/20 backdrop-blur-lg rounded-2xl p-6 border border-primaryColor/30"
          >
            <div className="text-white text-lg mb-2">Total Supply</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-primaryColor to-secondaryColor bg-clip-text text-transparent">
              {totalSupply}
            </div>
          </motion.div>
        </motion.div>

        {/* Tokenomics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tokenomicsData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-primaryColor/50 transition-all duration-300 transform hover:scale-105"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {data.icon}
                </div>

                {/* Category & Percentage */}
                <div className="mb-4">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-primaryColor transition-colors duration-300">
                    {data.category}
                  </h3>
                  <div className={`text-4xl font-black bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
                    {data.allocation}
                  </div>
                </div>

                {/* Token Amount */}
                <div className="mb-4">
                  <div className="text-secondaryText text-sm mb-1">Token Amount</div>
                  <div className="text-white font-bold text-lg">{data.tokens}</div>
                </div>

                {/* Description */}
                <p className="text-secondaryText text-sm leading-relaxed">
                  {data.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${data.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: data.allocation }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
              🔒
            </div>
            <h4 className="text-white font-bold text-lg mb-2">Deflationary Model</h4>
            <p className="text-secondaryText text-sm">Built-in burn mechanism reduces supply over time, increasing scarcity and value.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
              ⚖️
            </div>
            <h4 className="text-white font-bold text-lg mb-2">Fair Distribution</h4>
            <p className="text-secondaryText text-sm">No pre-mining or unfair advantages. Everyone starts on equal footing.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
              🌱
            </div>
            <h4 className="text-white font-bold text-lg mb-2">Sustainable Growth</h4>
            <p className="text-secondaryText text-sm">Long-term vision with mechanisms to ensure steady, sustainable growth.</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primaryColor/10 to-secondaryColor/10 backdrop-blur-lg rounded-3xl p-8 border border-primaryColor/30">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join the RIAL Ecosystem?</h3>
            <p className="text-secondaryText mb-6">Be part of the revolutionary digital currency that's reshaping the future of finance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/buy"
                className="bg-gradient-to-r from-primaryColor to-secondaryColor hover:from-primaryHover hover:to-primaryColor px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-105"
              >
                Buy RIAL Now
              </a>
              <a
                href="#features"
                className="border-2 border-primaryColor hover:bg-primaryColor/10 px-8 py-4 rounded-2xl font-bold text-primaryColor transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
