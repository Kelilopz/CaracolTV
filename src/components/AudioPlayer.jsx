import React from 'react';

export const AudioPlayer = ({ audio }) => {
  return (
    <div className="p-4">
      <audio controls>
        <source src={audio.audioUrl} type="audio/mp3" />
        Tu navegador no soporta el audio.
      </audio>
    </div>
  );
};