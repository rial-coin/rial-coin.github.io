import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Ali Mohammadi",
    customerTitle: "FinTech Startup Founder",
    content:
      "Rial Coin has been an excellent solution for fast and secure transactions. The platform is easy to use and transaction costs are very low. It's truly revolutionary in the digital currency industry.",
    image: testimonial1,
    rating: 5
  },
  {
    customerName: "Sarah Ahmadi",
    customerTitle: "Digital Currency Trader",
    content:
      "The security and speed of Rial Coin is outstanding. I haven't had any problems over the past months and the support team is very professional. I've also recommended it to my friends.",
    image: testimonial2,
    rating: 5
  },
  {
    customerName: "Mohammad Rezaei",
    customerTitle: "Entrepreneur & Investor",
    content:
      "The growth potential of Rial Coin is unparalleled. TON technology and its advanced features predict a bright future for this project. It's an excellent investment for the future.",
    image: testimonial3,
    rating: 5
  },
];

export const Testimonials = () => (
  <section className="relative py-24 bg-gradient-to-br from-slate-950 via-teal-950/20 to-slate-950 overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
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
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 space-x-reverse bg-teal-500/10 border border-teal-500/30 rounded-full px-6 py-2 mb-6"
        >
          <span className="text-teal-400 font-medium">💬 Customer Reviews</span>
        </motion.div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          What Our Users Say
        </h2>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Real experiences from Rial Coin users with this advanced platform
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group"
          >
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 h-full flex flex-col">
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <QuoteIcon />
                </div>
                
                {/* Rating Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
                "{testimonial.content}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="relative">
                  <img
                    src={testimonial.image.src}
                    alt={testimonial.customerName}
                    className="w-12 h-12 rounded-full border-2 border-teal-500/30"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-950"></div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonial.customerName}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.customerTitle}
                  </p>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Experience It Yourself
          </h3>
          <p className="text-gray-300 mb-6">
            Join our satisfied Rial Coin users and feel the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/buy"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#"
              className="border-2 border-teal-500 text-teal-400 px-8 py-3 rounded-xl font-semibold hover:bg-teal-500/10 transition-all duration-300"
            >
              More Reviews
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
