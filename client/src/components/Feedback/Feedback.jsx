import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMeh, faFrown } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', { review: feedback });
      setResult(response.data);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const getRating = (sentiment) => {
    switch (sentiment) {
      case 'Positive':
        return { icon: faSmile, color: 'text-green-500', rating: 5 };
      case 'Neutral':
        return { icon: faMeh, color: 'text-yellow-500', rating: 3 };
      case 'Negative':
        return { icon: faFrown, color: 'text-red-500', rating: 1 };
      default:
        return { icon: faMeh, color: 'text-gray-500', rating: 0 };
    }
  };

  const rating = result ? getRating(result.sentiment) : null;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Leave Your Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-2 border rounded"
          rows="5"
          placeholder="Enter your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {result && (
        <div className="mt-6 text-center">
          <FontAwesomeIcon icon={rating.icon} className={`text-4xl ${rating.color}`} />
          <p className="text-xl mt-2">{result.sentiment}</p>
          <p className="text-xl mt-1">Rating: {rating.rating} / 5</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
