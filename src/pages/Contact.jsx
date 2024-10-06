import React, { useEffect, useRef, useState } from 'react';
import '../styles/Contact.css';
import { useTheme } from '../utils/ThemeContext';
import { FaEnvelope } from 'react-icons/fa'; // Import the email icon

function Contact() {
  const { isDarkMode } = useTheme();
  const [displayedEmail, setDisplayedEmail] = useState('');
  const [showCopied, setShowCopied] = useState(false);
  const email = 'hello@tylerdodd.com';
  const typingSpeed = 150; // milliseconds per character
  const erasingSpeed = 50; // milliseconds per character
  const pauseDuration = 2000; // pause for 2 seconds before erasing

  useEffect(() => {
    let timeoutId;
    let currentIndex = 0;
    let isTyping = true;

    const updateEmail = () => {
      if (isTyping) {
        if (currentIndex <= email.length) {
          setDisplayedEmail(email.slice(0, currentIndex));
          currentIndex++;
          timeoutId = setTimeout(updateEmail, typingSpeed);
        } else {
          timeoutId = setTimeout(() => {
            isTyping = false;
            updateEmail();
          }, pauseDuration);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedEmail(email.slice(0, currentIndex));
          currentIndex--;
          timeoutId = setTimeout(updateEmail, erasingSpeed);
        } else {
          isTyping = true;
          timeoutId = setTimeout(updateEmail, typingSpeed);
        }
      }
    };

    updateEmail();

    return () => clearTimeout(timeoutId);
  }, []);


  const canvasRef = useRef(null);
  const [gameRunning, setGameRunning] = useState(false);

  const dinoRef = useRef({
    x: 50,
    y: 250,
    width: 40,
    height: 40,
    dy: 0,
    jumpForce: 12, // Use the preferred jump mechanics
    gravity: 0.4,  // Use the preferred gravity
    isJumping: false,
  });


  const cactusRef = useRef({
    x: 800,
    y: 250,
    width: 20,
    height: 40,
    speed: 3,
  });

  const scoreRef = useRef(0);
  const highScoreRef = useRef(0);

  useEffect(() => {
    if (!gameRunning) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dino = dinoRef.current;
    const cactus = cactusRef.current;

    let lastScoreIncrementTime = Date.now();

    const jump = () => {
      if (!dino.isJumping) {
        dino.isJumping = true;
        dino.dy = -dino.jumpForce;
      }
    };

    const update = () => {
      if (!gameRunning) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update Dino
      if (dino.isJumping) {
        dino.dy += dino.gravity;
      }
      dino.y += dino.dy;

      if (dino.y >= canvas.height - dino.height) {
        dino.y = canvas.height - dino.height;
        dino.dy = 0;
        dino.isJumping = false;
      }

      // Update Cactus
      cactus.x -= cactus.speed;
      if (cactus.x < -cactus.width) {
        cactus.x = canvas.width;
      }

      // Increment score over time
      const currentTime = Date.now();
      if (currentTime - lastScoreIncrementTime >= 100) {
        scoreRef.current += 1;
        lastScoreIncrementTime = currentTime;

        // Increase difficulty over time
        if (scoreRef.current % 10 === 0 && scoreRef.current !== 0) {
          cactus.speed += 0.5; // Increase cactus speed
        }
      }

      // Draw Dino
      ctx.fillStyle = 'green';
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

      // Draw Cactus
      ctx.fillStyle = 'brown';
      ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height);

      // Draw Score
      ctx.fillStyle = 'black';
      ctx.font = '20px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(`Score: ${scoreRef.current}`, canvas.width - 10, 30);

      // Draw High Score
      ctx.fillText(`High Score: ${highScoreRef.current}`, canvas.width - 10, 60);

      // Collision Detection
      if (
        dino.x < cactus.x + cactus.width &&
        dino.x + dino.width > cactus.x &&
        dino.y < cactus.y + cactus.height &&
        dino.y + dino.height > cactus.y
      ) {
        // Update high score if necessary
        if (scoreRef.current > highScoreRef.current) {
          highScoreRef.current = scoreRef.current;
        }
        setGameRunning(false);
      } else {
        requestAnimationFrame(update);
      }
    };

    update();

    // Event Listener for Jump (Keyboard)
    const handleKeydown = (e) => {
      if ((e.code === 'Space' || e.code === 'ArrowUp') && gameRunning) {
        jump();
      }
    };

    // Event Listener for Mobile Jump
    const handleTouchStart = (e) => {
      if (gameRunning) {
        jump();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [gameRunning, isDarkMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      const containerWidth = canvas.parentElement.clientWidth;
      const containerHeight = window.innerHeight - 100; // Adjust this value as needed
      const aspectRatio = 800 / 300;

      if (containerWidth / containerHeight > aspectRatio) {
        canvas.width = containerHeight * aspectRatio;
        canvas.height = containerHeight;
      } else {
        canvas.width = containerWidth;
        canvas.height = containerWidth / aspectRatio;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const startGame = () => {
    const canvas = canvasRef.current;

    dinoRef.current = {
      x: 50,
      y: canvas.height - 40,
      width: 40,
      height: 40,
      dy: 0,
      jumpForce: 12,
      gravity: 0.4,
      isJumping: false,
    };

    cactusRef.current = {
      x: canvas.width,
      y: canvas.height - 40,
      width: 20,
      height: 40,
      speed: 3,
    };

    scoreRef.current = 0;
    setGameRunning(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 3000);
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className={`contact-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="contact-header">
        <h2>
          Contact
          <button className="copy-email-button" onClick={copyEmailToClipboard} aria-label="Copy email">
            <FaEnvelope />
          </button>
          {showCopied && <span className="copied-text">Copied!</span>}
        </h2>
      </div>
      <p>Email: <span className="typing-email">{displayedEmail}</span></p>
      <p>Idk what else to put here, so enjoy this game!</p>
      <p>Personal high score is 229 FWIW...</p>
      <canvas
        ref={canvasRef}
        className={`dino-game-canvas ${isDarkMode ? 'dark-mode' : ''}`}
        width="800"
        height="300"
      ></canvas>
      {!gameRunning && (
        <>
          <button onClick={startGame} className="start-button">
            {scoreRef.current === 0 ? 'Play' : 'Play Again'}
          </button>
          {scoreRef.current > 0 && (
            <p className="score-display">
              Your Score: {scoreRef.current}
              <br />
              High Score: {highScoreRef.current}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default Contact;