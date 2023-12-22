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
      <div className={styles.wrapper} style={{ paddingTop: '70px' }}>
        <div className={styles.heading}>
          <span className={styles.number}>1</span>
          <div className={styles.title}>Basic Information</div>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.field}>
            <label>Name</label>
            <input type='text' />
          </div>
          <div className={styles.field}>
            <label>Date Of Birth</label>
            <input type='date' />
          </div>
          <div className={styles.field}>
            <label>Height</label>
            <div className={styles.flex}>
              <input
                type='number'
                placeholder='5'
                // style={{ maxWidth: '45px', minWidth: '30px' }}
              />
              <span> feet</span>
              <input
                type='number'
                placeholder='8'
                // style={{ maxWidth: '45px', minWidth: '30px' }}
              />
              <span>inches</span>
            </div>
          </div>

          <div className={styles.field}>
            <label>Body Type</label>
            <select name='profession'>
              {bodyTypes.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label>Profession</label>
            <select name='profession'>
              {professions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label>Skin Color</label>
            <select name='profession'>
              {skinColors.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label>Education Type</label>
            <select name='profession'>
              {educationTypes.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label>Education</label>
            <select name='profession'>
              {educationalStatus.map(item => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label>University</label>
            <select name='profession'>
              {institutes.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label>Session</label>
            <select name='profession'>
              {sessions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </>
  )
}

export default Basic
