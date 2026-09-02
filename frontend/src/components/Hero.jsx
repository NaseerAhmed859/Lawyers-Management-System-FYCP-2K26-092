import { Link } from 'react-router-dom';
import { FaGavel, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient dark:from-gray-900 dark:via-primary-900 dark:to-gray-900">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm mb-6">
          <FaShieldAlt className="mr-2 text-accent-400" /> Trusted by 10,000+ Clients Nationwide
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Justice Delivered with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
            Precision & Care
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
          Experience the future of legal management. AI-powered document summarization, real-time case tracking, and secure client-lawyer communication in one modern platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/lawyers" className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold rounded-full shadow-2xl hover:shadow-accent-500/50 hover:scale-105 transition-all flex items-center justify-center">
            Find a Lawyer <FaArrowRight className="ml-2" />
          </Link>
          <Link to="/login" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all">
            Client Portal
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <FaGavel className="text-3xl text-accent-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white">500+</h3>
            <p className="text-gray-300">Cases Won</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <FaShieldAlt className="text-3xl text-accent-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white">12</h3>
            <p className="text-gray-300">Practice Areas</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <FaGavel className="text-3xl text-accent-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white">98%</h3>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;