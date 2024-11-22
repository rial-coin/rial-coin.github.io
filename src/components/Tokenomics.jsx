import { motion } from "framer-motion";

const tokenomicsData = [
  { category: "Team & Founders", allocation: "20%", tokens: "4,200,000 RIAL" },
  { category: "Public Sale", allocation: "35%", tokens: "7,350,000 RIAL" },
  { category: "Marketing & Partnerships", allocation: "15%", tokens: "3,150,000 RIAL" },
  { category: "Staking Rewards", allocation: "10%", tokens: "2,100,000 RIAL" },
  { category: "Strategic Reserve", allocation: "10%", tokens: "2,100,000 RIAL" },
  { category: "Ecosystem Development", allocation: "10%", tokens: "2,100,000 RIAL" },
];

export const Tokenomics = () => {
  return (
    <section className="w-screen bg-bgDark2 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primaryColor font-medium text-lg">
              RialCoin Tokenomics
            </span>
            <h2 className="text-4xl font-bold text-primaryText mt-4">
              Strategic Allocation of RIAL
            </h2>
            <p className="text-secondaryText mt-4">
              RialCoin (RIAL), built on the TON network, is strategically allocated to ensure sustainable growth, innovation, and community engagement. Explore the breakdown below:
            </p>
          </div>
          {/* Tokenomics Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tokenomicsData.map((data, index) => (
              <div
                key={index}
                className="bg-bgDark3 rounded-lg shadow-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-primaryText">
                    {data.category}
                  </h3>
                  <p className="text-gray-400 mt-2">{data.tokens}</p>
                </div>
                <div className="text-primaryColor text-2xl font-bold mt-6">
                  {data.allocation}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
