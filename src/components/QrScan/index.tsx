import React, { useEffect, useRef } from "react";
import "./index.scss";

const QrScanner: React.FC<{ onScan: (result: string) => void }> = ({ onScan }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const startCamera = async () => {
    const video = videoRef?.current;

    if (!video) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      video.srcObject = stream;
      video.setAttribute("playsinline", "true"); // iOS
      await video.play().then(() => {
        window.document.querySelector(".qr-scanner")?.classList.add("active");
      });
    } catch (err) {
      console.error("Ошибка камеры:", err);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject as MediaStream;
    stream?.getTracks().forEach((track) => track.stop());
    window.document.querySelector(".qr-scanner")?.classList.remove("active");
  };

  useEffect(() => {
    startCamera();

    return () => stopCamera();
  }, [onScan]);

  return (
    <div className="qr-scanner">
      <div className="qr-scanner__title">Наведите камеру на QR-код</div>
      <div className="qr-scanner__video-wrapp">
        <video width="100%" height={320} ref={videoRef} autoPlay muted playsInline className="qr-scanner__video" />
      </div>
    </div>
  );
};

export default QrScanner;
