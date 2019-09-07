import React from 'react';
import MultiStep from 'react-multistep';
import { StepOne, StepTwo, StepThree, StepFour } from './steps';
// import { Container } from './styles';

export default function Colaborador() {
  const steps = [
    { name: 'StepOne', component: <StepOne /> },
    { name: 'StepTwo', component: <StepTwo /> },
    {name: 'StepThree', component: <StepThree/>},
    {name: 'StepFour', component: <StepFour/>}
  ];
  return (
    <MultiStep showNavigation={true} steps={steps} />
  )
}
