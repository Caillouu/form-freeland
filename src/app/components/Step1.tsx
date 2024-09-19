"use client"

import { useState } from "react";

interface Step1Props {
  nextStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Step1: React.FC<Step1Props> = ({ nextStep, handleChange }) => {
  const [mission, setMission] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMission(e.target.value);
    setDisabled(true);
    handleChange(e);
  }

  return (
    <>
      <fieldset>
        <div className="chrono">Rappel sous 24h</div>
        <h2 className="like-h2 mb-s">Être conseillé sur le portage salarial</h2>
        <p className="mb-s">Estimation de salaire, contrat de travail, etc...<br />Anne-Marie vous rapelle sous 24h.</p>
        <legend>Avez vous une mission ?</legend>
        <div className="form-item form-item--radio">
          <input
            type="radio"
            id="mission-1"
            name="mission"
            value="en_cours"
            checked={mission === 'en_cours'}
            onChange={handleRadioChange} />
          <label htmlFor="mission-1">Oui, j&#39;ai une mission en cours</label>
        </div>
        <div className="form-item form-item--radio">
          <input
            type="radio"
            id="mission-2"
            name="mission"
            value="en_negociation"
            checked={mission === 'en_negociation'}
            onChange={handleRadioChange}
          />
          <label htmlFor="mission-2">Oui, en cours de négociation</label>
        </div>
        <div className="form-item form-item--radio mb-l">
          <input
            type="radio"
            id="mission-3"
            name="mission"
            value="cherche_mission"
            checked={mission === 'cherche_mission'}
            onChange={handleRadioChange}
          />
          <label htmlFor="mission-3">Non, je cherche une mission</label>
        </div>
        <div className="ta-r">
          <button className="btn --xs" disabled={!disabled} onClick={nextStep}><span>Suivant</span></button>
        </div>
      </fieldset>
    </>
  )
}
