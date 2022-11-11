import React, { useState } from "react";

import {
  DifficultySelect,
  ExtraContent,
  GameSection,
  GlobalStyle,
  NavWrapper,
  SetDifficultyView,
  Wrapper,
} from "./App.styles";

import profileImg from './images/Harrylever.jpg'
import reactLogo from './images/react_log.png';
import triviaLogo from './images/trivia_logo.png';
import github_logo from './images/github_logo.png';
import tsLogo from './images/ts_logo.png';

// Import FetchQuiz Question
import { fetchQuizQuestions } from "./API";

// Import question diff types
import { QuestionState, Difficulty } from "./API";

// Import QuestionCard Component
import QuestionCard from "./components/QuestionCard";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  // App States
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficultyLevel, setDifficultyLevel] = useState('easy');

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    try {
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        difficultyLevel
      );
      if (newQuestions) setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching Question: ", error);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Users Answer
      const answer = e.currentTarget.value;

      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;

      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);

      // Save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move unto the next question if not the last
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <NavWrapper>
        <div className="nav_cont_1">
          <h1>REACT QUIZ</h1>
        </div>
        <div className="nav_cont_2">
          <p>
            Check out the code <img src={github_logo} alt="" />
          </p>
          <a href="https://">GitHub: React Quiz App</a>
        </div>
      </NavWrapper>
      <Wrapper>
        <GameSection>
          <p>Test your knowledge of everything.</p>

          <div>
            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
              <>
                <p
                  style={{
                    color: "#242222cd",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginTop: "3px",
                  }}
                >
                  Choose a Difficulty Level
                </p>
                <DifficultySelect
                  name="difficulty"
                  onChange={(e) => {
                    setDifficultyLevel(e.target.value);
                  }}
                >
                  <option value={Difficulty.EASY}>{Difficulty.EASY}</option>
                  <option value={Difficulty.MEDIUM}>{Difficulty.MEDIUM}</option>
                  <option value={Difficulty.HARD}>{Difficulty.HARD}</option>
                </DifficultySelect>
              </>
            ) : null}
            {!loading && !gameOver && (
              <SetDifficultyView>{difficultyLevel}</SetDifficultyView>
            )}
          </div>
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <button className="start" onClick={startTrivia}>
              Start
            </button>
          ) : null}
          {!gameOver ? <p className="score">Score: {score}</p> : null}
          {loading && <p>Loading Questions ...</p>}

          <div>
            {!loading && !gameOver && (
              <QuestionCard
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
              />
            )}
          </div>
          {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          ) : null}
        </GameSection>
        <ExtraContent>
          <article>
            <div className="art_sec_01">
              <h1>
                Author: Ukanah Dean <em>(Harrylever)</em>
              </h1>
              <div>
                <div className="profile_img_cont">
                  <a href="https://github.com/Harrylever">
                    <img src={profileImg} alt="" />
                  </a>
                </div>
                <p>View Github Profile</p>
              </div>
            </div>
            <div className="art_sec_02">
              <p>
                A simple quiz generator to assess your knowledge of general
                world topics.
              </p>
              <div className="created_with_cont">
                <h3>Created with</h3>
                <a href="https://reactjs.org/">
                  <div>
                    <p>React-JS</p>
                    <div>
                      <img src={reactLogo} alt="" />
                    </div>
                  </div>
                </a>{" "}
                <a href="https://reactjs.org/">
                  <div>
                    <p>Typescript</p>
                    <div>
                      <img src={tsLogo} alt="" />
                    </div>
                  </div>
                </a>
                <a href="https://opentdb.com/api_config.php">
                  <div>
                    <p>Open Trivia Database API</p>
                    <div>
                      <img style={{ marginTop: "10px" }} src={triviaLogo} alt="" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </article>
        </ExtraContent>
      </Wrapper>
    </>
  );
};

export default App;
