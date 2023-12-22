import React from 'react'
import styles from '@/styles/Profile/Update/Basic.module.css'
import {
  professions,
  skinColors,
  bodyTypes,
  educationTypes,
  educationalStatus,
  institutes,
  sessions
} from '@/pages/api/auth/data'

const Basic = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <span className={styles.number}>7</span>
          <div className={styles.title}>Your Expectation</div>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.field}>
            <label>Minimum Age</label>
            <input type='number' />
          </div>
          <div className={styles.field}>
            <label>Maximum Age</label>
            <input type='number' />
          </div>
          <div className={styles.field}>
            <label>Minimum Height</label>
            <input
              type='number'
              placeholder='5'
              style={{ maxWidth: '45px', minWidth: '30px' }}
            />
            <span style={{ marginLeft: '-5px' }}> feet</span>
            <input
              type='number'
              placeholder='8'
              style={{ maxWidth: '45px', minWidth: '30px' }}
            />
            <span style={{ marginLeft: '-5px' }}>inches</span>
          </div>
          <div className={styles.field}>
            <label>Maximum Height</label>
            <input
              type='number'
              placeholder='5'
              style={{ maxWidth: '45px', minWidth: '30px' }}
            />
            <span style={{ marginLeft: '-5px' }}> feet</span>
            <input
              type='number'
              placeholder='8'
              style={{ maxWidth: '45px', minWidth: '30px' }}
            />
            <span style={{ marginLeft: '-5px' }}>inches</span>
          </div>
          <div className={styles.field}>
            <label>Body Type</label>
            <div className={styles.options}>
              {bodyTypes.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
          <div className={styles.field}>
            <label>Skin Colors</label>
            <div className={styles.options}>
              {skinColors.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
          <div className={styles.field}>
            <label>Skin Colors</label>
            <div className={styles.options}>
              {professions.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
          <div className={styles.field}>
            <label>Education Type</label>
            <div className={styles.options}>
              {educationTypes.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
          <div className={styles.field}>
            <label>Education</label>
            <div className={styles.options}>
              {educationalStatus.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
          <div className={styles.field}>
            <label>Piety</label>
            <textarea></textarea>
          </div>
        </form>
      </div>
    </>
  )
}

export default Basic
