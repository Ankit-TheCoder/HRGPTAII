import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const Counter = ({ end, duration, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const stats = [
  {
    number: 1000,
    suffix: '+',
    label: 'Companies',
    description: 'Trust our platform',
  },
  {
    number: 50000,
    suffix: '+',
    label: 'Interviews',
    description: 'Conducted monthly',
  },
  {
    number: 95,
    suffix: '%',
    label: 'Satisfaction',
    description: 'From our clients',
  },
  {
    number: 24,
    suffix: '/7',
    label: 'Support',
    description: 'Always available',
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <h3 className="text-4xl md:text-5xl font-bold text-primary">
                  <Counter
                    end={stat.number}
                    duration={2000}
                    suffix={stat.suffix}
                  />
                </h3>
                <p className="text-xl font-semibold mt-2">{stat.label}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white dark:bg-dark p-4 rounded-2xl shadow-lg">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-dark bg-primary/10 flex items-center justify-center text-sm"
                >
                  ⭐
                </div>
              ))}
            </div>
            <p className="text-sm font-medium">
              Rated 4.9/5 from over 1000+ reviews
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 