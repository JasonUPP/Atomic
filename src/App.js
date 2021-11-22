import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { Main } from './components/content/Main';
import { Cards } from './components/content/Cards';
import { Team } from './components/content/Team';
import { BlueComp } from './components/content/BlueComp';

const imagenes = require.context('./assets/Paquete Atomic' , true);

export const App = () => {
  return (
    <div className="background">
      <Main  imagenes = {imagenes} />
      <Cards imagenes = {imagenes} /> 
      <Team imagenes = {imagenes} />
      <BlueComp  imagenes = {imagenes} />
      <Footer imagenes = {imagenes} />
    </div>
  );
}