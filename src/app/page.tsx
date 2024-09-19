"use client"

import Image from "next/image";
import logo from './img/logo-itg.png';
import bgLyon from './img/bg-map-lyon.jpg';
import imgPerso from './img/visuel_perso.jpg';
import React, { useState } from "react";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Confirmation } from "./components/Confirmation";


export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mission: '',
    job: '',
    project: ''
  })

  const nextStep = () => {
    setStep(step + 1);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    // Send to API
    nextStep();
    console.log(formData)
  }

  return (
    <>
      <section className="section_img" style={{ backgroundImage: `url(${bgLyon.src})` }}>
      <div className="container">
        <h1 className="logo">
          <a href="/">
          <Image src={logo} alt="Vercel Logo" width={92} height={53} />
            Portage salarial lyon et la région auvergne-rhône-alpes
          </a>
        </h1>
        <div className="grid">
          <div className="grid__cell 1/2 1/1--portable">
            <h2 className="like-h2 h2--white mb-s"><span className="underline">Obtenez l&#39;accompagnement</span> d&#39;Anne-Marie à Lyon et la région Auvergne-Rhône-Alpes</h2>
            <h3 className="like-h3">Un vrai contact local pour le portage salarial</h3>
            <div className="bk-card">
              <div className="bk-card__img">
              <Image src={imgPerso} alt="Vercel Logo" width={77} height={77} />
              </div>
              <div className="bk-card__content">
                <div className="bk-card__content--title">
                  Lyon . Clermont . Rhônes-Alpes 
                </div>
                <div className="bk-card__content--text">
                  <strong>Anne-Marie Mouzet</strong><br />
                  Déléguée Régionale
                </div>
              </div>
            </div>
          </div>
          <div className="grid__cell 1/2 1/1--portable">
            <div className="bk-form">
              <form action="" method="post">
                {step === 1 ? (
                  <Step1 nextStep={nextStep} handleChange={handleChange} />
                ) : step === 2 ? (
                  <Step2 handleChange={handleChange} handleSubmit={handleSubmit} values={formData} />
                ) : step === 3 ? (
                  <Confirmation />
                ) : (
                  <Step1 nextStep={nextStep} handleChange={handleChange} />
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section>
        <div className="container">
          <h2 className="like-h2">la réponse à vos besoins de liberté et <span className="underline">sécurité</span></h2>
          <div className="wrapper-number">
            <div className="grid">
              <div className="grid__cell 1/3 1/1--portable">
                <div className="bk-number">
                  <div className="bk-number__value">+ 4000</div>
                  <div className="bk-number__text">consultants portés en 2020</div>
                  <p>Pas encore 5/5, mais presque... on y travaille !</p>
                </div>
              </div>
              <div className="grid__cell 1/3 1/1--portable">
                <div className="bk-number">
                  <div className="bk-number__value">3M€</div>
                  <div className="bk-number__text">provisions de salaires</div>
                  <p>1ère garantie financière des sociétés de portage salarial</p>
                </div>
              </div>
              <div className="grid__cell 1/3 1/1--portable">
                <div className="bk-number">
                  <div className="bk-number__value">20 ans</div>
                  <div className="bk-number__text">à construire votre statut, le portage salarial de demain</div>
                  <p>Membre fondateér du PEPS, Négociations gouvernementales </p>
                </div>
              </div>
            </div>
            <div className="ta-c">
              <a href="#" className="btn"><span>Lancez-vous !</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
