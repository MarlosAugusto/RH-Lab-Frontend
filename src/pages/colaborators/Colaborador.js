import React from 'react';
import MultiStep from 'react-multistep';
import { StepOne, StepTwo, StepThree, StepFour, StepFive } from './steps';
// import { Container } from './styles';

export default function Colaborador() {
  const steps = [
    { name: 'Dados Gerais', component: <StepOne /> },
    { name: 'Documentos', component: <StepTwo /> },
    { name: 'Endereço', component: <StepThree /> },
    { name: 'Contato', component: <StepFour /> },
    { name: 'Perfil', component: <StepFive /> }
  ];
  return (
    <MultiStep showNavigation={true} steps={steps} />
  )
}
