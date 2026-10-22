import React, { useEffect, useRef } from 'react';

interface BlurredTradingBackgroundProps {
  variant?: 'landing' | 'backoffice';
  opacity?: number;
}

interface Candle {
  open: number;
  close: number;
  high: number;
  low: number;
  isBull: boolean;
  growProgress: number; // 0 to 1
  pulse: number;
}

export const BlurredTradingBackground: React.FC<BlurredTradingBackgroundProps> = ({
  variant = 'landing',
  opacity = variant === 'landing' ? 0.32 : 0.26,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Candle generation parameters
    const candleWidth = 14;
    const candleGap = 18;
    const totalSlotWidth = candleWidth + candleGap;
    const numCandles = Math.ceil(width / totalSlotWidth) + 12;

    // Base price baseline
    let basePrice = height * 0.65;
    let targetBaseline = height * 0.45;

    // Initialize candle array with ascending trend structure
    const candles: Candle[] = [];
    let currentPrice = basePrice;

    for (let i = 0; i < numCandles; i++) {
      // General upward trend with healthy micro pullbacks
      const trendBias = -1.8; // negative means moving upwards on Y axis
      const noise = (Math.random() - 0.46) * 26;
      const open = currentPrice;
      const close = open + trendBias + noise;
      const isBull = close <= open; // On canvas, lower Y is higher price
      const high = Math.min(open, close) - Math.random() * 20 - 4;
      const low = Math.max(open, close) + Math.random() * 16 + 3;

      candles.push({
        open,
        close,
        high,
        low,
        isBull,
        growProgress: 1,
        pulse: Math.random() * Math.PI * 2,
      });

      currentPrice = close;
      // Keep within bounds
      if (currentPrice < height * 0.2) currentPrice = height * 0.4;
      if (currentPrice > height * 0.75) currentPrice = height * 0.6;
    }

    // Dynamic animation parameters
    let scrollOffset = 0;
    const scrollSpeed = 0.55; // Calm, continuous trading drift
    let activeCandleGrowth = 0.2;
    let lastTime = performance.now();

    // Floating particles for cyber atmosphere
    const particles: { x: number; y: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: -0.2 - Math.random() * 0.4,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Advance scroll
      scrollOffset += scrollSpeed;

      // Active candle growing cycle
      activeCandleGrowth += dt * 0.8;
      if (activeCandleGrowth > 1) {
        activeCandleGrowth = 0.1;
      }

      // If scrolled past one candle slot, cycle array
      if (scrollOffset >= totalSlotWidth) {
        scrollOffset -= totalSlotWidth;
        // Shift candles left
        candles.shift();

        // Create new candle at the right tip
        const prev = candles[candles.length - 1];
        const prevClose = prev ? prev.close : height * 0.5;
        const trendBias = -2.5; // Upward bias
        const noise = (Math.random() - 0.42) * 28;
        const open = prevClose;
        const close = open + trendBias + noise;
        const isBull = close <= open;
        const high = Math.min(open, close) - Math.random() * 22 - 6;
        const low = Math.max(open, close) + Math.random() * 18 + 4;

        candles.push({
          open,
          close,
          high,
          low,
          isBull,
          growProgress: 0.1,
          pulse: 0,
        });
      }

      // Update latest candle growth progress
      if (candles.length > 0) {
        const lastCandle = candles[candles.length - 1];
        lastCandle.growProgress = Math.min(1, lastCandle.growProgress + dt * 1.5);
      }

      // 1. Draw horizontal market grid lines & faint price levels
      ctx.strokeStyle = 'rgba(57, 255, 136, 0.04)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 6]);

      const gridInterval = height / 7;
      for (let y = gridInterval; y < height; y += gridInterval) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();

        // Price label on right
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = 'rgba(154, 168, 160, 0.22)';
        const simPrice = Math.round(98000 - (y / height) * 8000);
        ctx.fillText(`$${simPrice.toLocaleString()}`, width - 75, y - 4);
      }
      ctx.setLineDash([]);

      // 2. Draw Secondary Blurred Background Wave (EMA Curve + Fill)
      ctx.beginPath();
      let firstPoint = true;
      const points: { x: number; y: number }[] = [];

      for (let i = 0; i < candles.length; i++) {
        const c = candles[i];
        const x = i * totalSlotWidth - scrollOffset;
        const y = c.close;
        points.push({ x, y });

        if (firstPoint) {
          ctx.moveTo(x, y);
          firstPoint = false;
        } else {
          // Smooth curve
          const prevX = (i - 1) * totalSlotWidth - scrollOffset;
          const prevY = candles[i - 1].close;
          const midX = (prevX + x) / 2;
          const midY = (prevY + y) / 2;
          ctx.quadraticCurveTo(prevX, prevY, midX, midY);
        }
      }

      // Complete area underneath curve
      if (points.length > 0) {
        const lastPt = points[points.length - 1];
        ctx.lineTo(lastPt.x, height);
        ctx.lineTo(points[0].x, height);
        ctx.closePath();

        const areaGradient = ctx.createLinearGradient(0, height * 0.2, 0, height);
        areaGradient.addColorStop(0, 'rgba(0, 185, 90, 0.08)');
        areaGradient.addColorStop(0.6, 'rgba(8, 122, 69, 0.03)');
        areaGradient.addColorStop(1, 'rgba(5, 8, 7, 0)');
        ctx.fillStyle = areaGradient;
        ctx.fill();
      }

      // Draw EMA line stroke
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        if (i === 0) {
          ctx.moveTo(pt.x, pt.y);
        } else {
          const prevPt = points[i - 1];
          const midX = (prevPt.x + pt.x) / 2;
          const midY = (prevPt.y + pt.y) / 2;
          ctx.quadraticCurveTo(prevPt.x, prevPt.y, midX, midY);
        }
      }
      ctx.strokeStyle = 'rgba(57, 255, 136, 0.35)';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#39FF88';
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.shadowBlur = 0; // reset shadow

      // 3. Draw Candlesticks with Wicks & Growing Effect
      for (let i = 0; i < candles.length; i++) {
        const c = candles[i];
        const x = i * totalSlotWidth - scrollOffset;

        // Skip if outside viewport
        if (x < -candleWidth || x > width + candleWidth) continue;

        // Is this the rightmost / newest candle growing?
        const isLatest = i === candles.length - 1 || i === candles.length - 2;
        const progress = isLatest ? c.growProgress : 1;

        // Calculate active dynamic height for the rising effect
        const targetClose = c.close;
        const currentClose = c.open + (targetClose - c.open) * progress;
        const topY = Math.min(c.open, currentClose);
        const bottomY = Math.max(c.open, currentClose);
        const bodyHeight = Math.max(3, bottomY - topY);

        const currentHigh = c.open + (c.high - c.open) * progress;
        const currentLow = c.open + (c.low - c.open) * progress;

        const isGreen = c.isBull;

        // Colors
        const strokeColor = isGreen
          ? 'rgba(57, 255, 136, 0.75)'
          : 'rgba(201, 162, 77, 0.55)';
        const fillColor = isGreen
          ? 'rgba(0, 185, 90, 0.5)'
          : 'rgba(201, 162, 77, 0.35)';

        // Wick (pavio)
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x + candleWidth / 2, currentHigh);
        ctx.lineTo(x + candleWidth / 2, currentLow);
        ctx.stroke();

        // Candle Body (corpo da vela)
        ctx.fillStyle = fillColor;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1;

        // Add soft glow on bullish green candles
        if (isGreen) {
          ctx.shadowColor = '#39FF88';
          ctx.shadowBlur = isLatest ? 16 : 8;
        } else {
          ctx.shadowColor = '#C9A24D';
          ctx.shadowBlur = 4;
        }

        // Draw rectangle
        ctx.fillRect(x, topY, candleWidth, bodyHeight);
        ctx.strokeRect(x, topY, candleWidth, bodyHeight);

        ctx.shadowBlur = 0;

        // Small volume bar at bottom
        const volHeight = Math.min(50, bodyHeight * 1.3 + 10);
        ctx.fillStyle = isGreen
          ? 'rgba(0, 185, 90, 0.18)'
          : 'rgba(201, 162, 77, 0.14)';
        ctx.fillRect(x, height - volHeight - 20, candleWidth, volHeight);
      }

      // 4. Draw Active Glowing Pulse & Ticker Line on the tip of the chart
      if (candles.length > 0) {
        const activeIndex = candles.length - 1;
        const last = candles[activeIndex];
        const lastX = activeIndex * totalSlotWidth - scrollOffset + candleWidth / 2;
        const currentProgress = last.growProgress;
        const currentClose = last.open + (last.close - last.open) * currentProgress;
        const lastY = currentClose;

        // Horizontal laser price dashed line
        ctx.strokeStyle = 'rgba(57, 255, 136, 0.45)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(0, lastY);
        ctx.lineTo(width, lastY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Pulsing radar point at candle tip
        const pulseSize = 6 + Math.sin(time * 0.006) * 3;
        ctx.beginPath();
        ctx.arc(lastX, lastY, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(57, 255, 136, 0.3)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(lastX, lastY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#39FF88';
        ctx.shadowColor = '#39FF88';
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Active ticker label badge
        const badgeText = '▲ +5.82% AIBOT ALGORITHM';
        ctx.font = 'bold 9px "JetBrains Mono", monospace';
        ctx.fillStyle = '#050807';
        const textWidth = ctx.measureText(badgeText).width;
        const badgeX = Math.min(width - textWidth - 24, lastX + 15);
        const badgeY = lastY - 8;

        ctx.fillStyle = 'rgba(0, 185, 90, 0.9)';
        ctx.fillRect(badgeX - 4, badgeY - 10, textWidth + 8, 16);
        ctx.strokeStyle = '#39FF88';
        ctx.strokeRect(badgeX - 4, badgeY - 10, textWidth + 8, 16);

        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(badgeText, badgeX, badgeY + 2);
      }

      // 5. Draw floating subtle particles
      for (const p of particles) {
        p.y += p.vy;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(57, 255, 136, ${p.alpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Obfuscated blur effect container */}
      <div className="relative w-full h-full filter blur-[2.5px] transform-gpu">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Top, bottom and corner radial vignettes to guarantee high contrast on text & UI */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050807]/90 via-transparent to-[#050807]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050807_95%)] pointer-events-none" />
    </div>
  );
};
