import { useEffect, useRef, useState } from 'react';

const monitorCodeLines = [
  "import { tensorflow as tf } from 'ai-core';",
  "const model = tf.sequential();",
  "model.add(tf.layers.dense({units: 128, activation: 'relu'}));",
  "model.compile({optimizer: 'adam', loss: 'meanSquaredError'});",
  "// Training system architecture on dataset...",
  "await model.fit(trainData, trainLabels, {epochs: 50});",
  "STATUS: Weights optimized successfully.",
  "System_Core_Interference: 0.0021s",
  "Neural_Network_Status: ACTIVE [100%]",
  "Executing sub-routine: analytics_parse.py",
  "[*] Fetching live pipeline variables...",
  "SUCCESS: Target deployed to cluster gateway."
];

function TerminalMonitor() {
  const canvasRef = useRef(null);
  const [systemStatus, setSystemStatus] = useState("INITIALIZING");

  const streamSpeed = 2;
  const fontColor = "#00ff88";
  const consoleHeader = "sahil@kernel:~";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = 550;
    canvas.height = 150;

    const fontSize = 11;
    const lineSpacing = 16;
    let linesOffset = 0;

    // Toggle simulated status text message
    const statusInterval = setInterval(() => {
      const statuses = ["TRAINING MODEL...", "CORE OPTIMIZED", "LIVE ENGINE STREAMING", "PIPELINE NORMAL"];
      setSystemStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 4000);

    const renderMonitorStream = () => {
      // Clear the viewport screen cleanly on every tick frame
      ctx.fillStyle = '#0a0d16';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `500 ${fontSize}px 'Fira Code', monospace`;
      ctx.fillStyle = fontColor;

      // Adjust positioning tracking over time to simulate dynamic scrolling
      linesOffset += streamSpeed * 0.15;
      
      const totalTextHeight = monitorCodeLines.length * lineSpacing;
      let startY = canvas.height - (linesOffset % (totalTextHeight + 40));

      monitorCodeLines.forEach((line, index) => {
        let currentY = startY + (index * lineSpacing);
        // Ensure rendering loop only paints fragments currently inside visual boundaries
        if (currentY > 0 && currentY < canvas.height) {
          ctx.fillText(`> ${line}`, 15, currentY);
        }
      });

      animationFrameId = requestAnimationFrame(renderMonitorStream);
    };
    
    renderMonitorStream();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(statusInterval);
    };
  }, [streamSpeed, fontColor]);

  return (
    <div className="monitor-frame">
      {/* Top Monitor Bezel Titlebar Details */}
      <div className="monitor-top-bar">
        <div className="monitor-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="monitor-title">{consoleHeader}</div>
        <div className="monitor-status-badge">{systemStatus}</div>
      </div>
      
      {/* Internal Code Matrix Stream Viewport Canvas */}
      <canvas ref={canvasRef} className="monitor-screen" />
    </div>
  );
}

export default TerminalMonitor;