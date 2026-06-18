import { useEffect, useRef } from 'react';

function CodeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Stream elements modeling code sequences
    const codeTokens = [
      '0', '1', 'const', 'let', 'function', '=>', 'import', 'tf.layers', 
      'model.fit()', 'epochs', 'dense', 'loss', 'optimizer', 'Node', 'React'
    ];

    const fontSize = 14;
    const columns = Math.floor(canvas.width / 45); // column scaling
    const rainDrops = Array(columns).fill(1);

    const draw = () => {
      // Semi-transparent overlay to leave fading terminal trails
      ctx.fillStyle = 'rgba(6, 7, 10, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `500 ${fontSize}px 'Fira Code', monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        // Choose a random code piece
        const text = codeTokens[Math.floor(Math.random() * codeTokens.length)];
        
        // Randomly alternate colors between neon green and cyber blue
        ctx.fillStyle = i % 3 === 0 ? '#00c9ff' : '#00ff88';

        ctx.fillText(text, i * 45, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i] += 1.5; // Controls fall velocity
      }
    };

    const renderLoop = () => {
      draw();
      animationFrameId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="realtime-code-canvas" />;
}

export default CodeBackground;