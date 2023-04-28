import { useState } from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({ imageUrl, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-white text-center">
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ImageCard;
