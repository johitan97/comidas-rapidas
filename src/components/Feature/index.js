import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza del dia</h1>
      <p>Vendemos la mejor pizza de la ciudad.</p>
      <FeatureButton>Ordenar ahora.</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
