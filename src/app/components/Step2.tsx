"use client"

import { useState } from "react";

export const Step2 = ({ nextStep, handleChange, handleSubmit, values }) => {
  const [disabled, setDisabled] = useState(false)

  const onChange = (e) => {
    const currentValue = e.target.value;

    handleChange(e)
    console.log(values.project.trim())
    if(currentValue.trim() != '' && (values.project.length > 0 || values.job.length > 0)) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  return (
    <fieldset>
      <div className="form-item">
        <label htmlFor="job">Votre métier</label>
        <div className="wrapper-select">
          <select name="job" id="job" value={values.job} onChange={onChange}>
            <option value="job1">Métier 1</option>
            <option value="job2">Métier 2</option>
          </select>
        </div>
      </div>
      <div className="form-item">
        <label htmlFor="project">Mon projet professionel</label>
        <textarea
          name="project"
          value={values.project}
          onChange={onChange}
          placeholder="Décrire sa mission à faire porter ou son projet pour devenir indépendant."
        />
      </div>
      <div className="ta-r">
        <button className="btn --xs" disabled={!disabled} onClick={handleSubmit}><span>Suivant</span></button>
      </div>
    </fieldset>
  );
}
