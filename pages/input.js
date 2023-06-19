import { useState } from 'react';
import { handleSubmit } from '../src/handlesubmit';
import styles from '../styles/inputPage.module.css';

export default function InputPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [newTitle, setNewTitle] = useState('');  // New state for the new title.

  const submitForm = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(title, description, e);
    setNewTitle(result.newTitle);  // Update the new title.
  };

 return (
    <div className={styles.container}>
      <form onSubmit={submitForm}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.titleInput}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.descriptionInput}
          />
        </label>
        <input type="submit" value="Submit" className={styles.submitButton} />
      </form>

      {title && (
        <div className={styles.resultContainer}>
          <h2>Old Title:</h2>
          <p>{title}</p>
        </div>
      )}

      {/* Add a section to display the new title */}
      {newTitle && (
        <div className={styles.resultContainer}>
          <h2>New Title:</h2>
          <p>{newTitle}</p>
        </div>
      )}
    </div>
  );
}
