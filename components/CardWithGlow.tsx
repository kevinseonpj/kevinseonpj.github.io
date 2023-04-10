import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';

const Wrapper = styled(motion.div)({
  position: 'relative',
  width: '300px',
  height: '120px',
});

const Glow = styled(motion.div)({
  background: 'linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%)',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  WebkitFilter: 'blur(15px)',
  filter: 'blur(15px)',
  borderRadius: '16px',
});

const Card = styled(motion.div)({
  borderRadius: '16px',
  marginBottom: '0px',
  overflow: 'hidden',
  position: 'relative',
  background: 'rgba(255, 255, 255, 0.65)',
  padding: '36px 24px',
  height: '100%',
  div: {
    color: '#4a4a4c',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
  },
});
type CardProp = {
  text: string;
};
const CardWithGlow = ({ text }: CardProp) => {
  const cardVariants = {
    hover: {
      scale: 1.05,
    },
    initial: {
      scale: 1,
    },
  };

  const glowVariants = {
    initial: {
      scale: 1.05,
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };

  return (
    <Wrapper initial="initial" whileHover="hover">
      <Glow
        variants={glowVariants}
        transition={{
          ease: 'easeOut',
          delay: 0.15,
        }}
      />
      <Card
        variants={cardVariants}
        transition={{
          ease: 'easeOut',
          delay: 0.15,
          duration: 0.5,
        }}
      >
        <div>{text}</div>
      </Card>
    </Wrapper>
  );
};
export default CardWithGlow;
