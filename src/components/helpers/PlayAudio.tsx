"use client";

import { musicLogo } from "@/constants/imageUrls";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const PlayAudio = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/music/Sakura-Girl-Yay-chosic.com_.wav");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current      // Cleanup on unmount
.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Audio play failed:", error);
          setAudioPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [audioPlaying]);

  return (
    <div>
      <Image
        src={musicLogo}
        width={30}
        height={30}
        alt="music"
        className="invert cursor-pointer"
        onClick={() => {
          setAudioPlaying(!audioPlaying);
        }}
      />
    </div>
  );
};
