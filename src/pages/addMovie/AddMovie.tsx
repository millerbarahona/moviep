import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OwnMovie } from '../../models'
import { addOwnMovie } from '../../utilities'
import styles from './AddMovie.module.css'

function AddMovie() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    const formElements = form.elements as unknown as HTMLInputElement[]
    console.log(formElements[2].files![0])
    const fileReader = new FileReader();
    fileReader.readAsDataURL(formElements[2].files![0])
    fileReader.onload = function(e) {
      let toSave: OwnMovie = {
        date: formElements[3].value,
        name: formElements[0].value,
        description: formElements[1].value,
        image: e.target?.result!
      }
      
      addOwnMovie(toSave)
      navigate('/movies/own')
    };
  }

  return (
    <div>
      <div>
        <h2>¡Add a Movie!</h2>
        <form onSubmit={e => handleSubmit(e)} className={styles.form}>
          <label htmlFor="">Name</label>
          <input required type="text" placeholder='Name' />
          <label htmlFor="">Description</label>
          <input required type="text" placeholder='Description' />
          <label htmlFor="file" className={styles.fileLabel}>Upload Image</label>
          <input required type="file" id='file' className={styles.file} />
          <label htmlFor="date">Date</label>
          <input required type="date" id="date" />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default AddMovie