import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, DraftingCompass, Code, Rocket, ArrowRight } from 'lucide-react';
import Section from '../components/Section';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Plan',
      description: 'We carefully understand your business goals, target audience, and requirements to create a clear and strategic roadmap.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      number: '01',
    },
    {
      icon: DraftingCompass,
      title: 'Design',
      description: 'We craft intuitive and visually engaging designs that reflect your brand and deliver a seamless user experience.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      number: '02',
    },
    {
      icon: Code,
      title: 'Develop',
      description: 'We build secure, scalable, and high-performance solutions using modern technologies and proven practices.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      number: '03',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'We ensure a smooth launch with final quality checks, performance optimization, and reliable post-launch support.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      number: '04',
    },
  ];

  return (
    <Section id="process" background="white">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How We
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 ml-2">
            Work
          </span>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our proven development process ensures successful project delivery 
          with transparency, collaboration, and excellence at every stage.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={index}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Step Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Process Timeline (Mobile) */}
      <motion.div
        className="lg:hidden mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          {/* Timeline Items */}
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center mb-8 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-8 w-4 h-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full transform -translate-x-1/2"></div>
              
              {/* Timeline Content */}
              <div className="ml-16">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-full">
          <Rocket className="w-5 h-5 text-primary-600" />
          <span className="text-primary-700 font-medium">
            Ready to start your project? Let's talk!
          </span>
        </div>
      </motion.div>
    </Section>
  );
};

export default Process;
