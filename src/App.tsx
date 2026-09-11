import { useState } from 'react';
import { calculateResult, QUESTIONS } from './data';
import IntroScreen from './screens/IntroScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import type { ResultTypeId } from './types';

type Screen = 'intro' | 'quiz' | 'result';

function App() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<ResultTypeId[]>([]);

  const handleStart = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setScreen('quiz');
  };

  const handleAnswer = (type: ResultTypeId) => {
    const nextAnswers = [...answers, type];
    setAnswers(nextAnswers);

    if (currentIndex + 1 < QUESTIONS.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setScreen('result');
    }
  };

  const handleBack = () => {
    if (currentIndex === 0) {
      setScreen('intro');
      return;
    }
    setAnswers(answers.slice(0, -1));
    setCurrentIndex(currentIndex - 1);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setScreen('intro');
  };

  if (screen === 'quiz') {
    return <QuizScreen currentIndex={currentIndex} onAnswer={handleAnswer} onBack={handleBack} />;
  }

  if (screen === 'result') {
    return <ResultScreen result={calculateResult(answers)} onRestart={handleRestart} />;
  }

  return <IntroScreen onStart={handleStart} />;
}

export default App;
