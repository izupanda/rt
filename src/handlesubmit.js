// src/handlesubmit.js
import { optimizeTitleAndDescription } from './optimize';

export const handleSubmit = async (title, description, event) => {
  // prevent default form submission
  event.preventDefault();

  // Prepare data
  const data = {
    title: title,
    description: description,
  };

  // Call OpenAI API
  try {
    const optimizedText = await optimizeTitleAndDescription(data.title, data.description);
    
    // TODO: Split the optimizedText into newTitle and newDescription as needed.
    // This is just a placeholder and depends on how your actual optimized text from OpenAI API looks like.
    const newTitle = optimizedText.split('\n')[0];  // Assuming the new title is the first line of the optimized text.

    // Prepare result
    const result = { newTitle };
    console.log(result);
    
    // Return result
    return result;

  } catch (error) {
    console.error('Error optimizing the title and description:', error);
  }
};
