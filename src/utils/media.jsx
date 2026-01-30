// export const startMedia = async () => {
//   try {
//     return await navigator.mediaDevices.getUserMedia({
//       video: true,
//       audio: true,
//     });
//   } catch (error) {
//     console.error("Camera/Mic error:", error);
//     alert("Camera or Microphone access denied!");
//   }
// };

// export const startScreenShare = async () => {
//   try {
//     return await navigator.mediaDevices.getDisplayMedia({
//       video: true,
//       audio: true,
//     });
//   } catch (error) {
//     console.error("Screen share error:", error);
//     alert("Screen sharing cancelled!");
//   }
// };

// export const stopMedia = (stream) => {
//   if (!stream) return;
//   stream.getTracks().forEach((track) => track.stop());
// };
// src/utils/media.jsx

export const startMedia = async () => {
  return await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
};


export const startCameraMic = startMedia;

export const startScreenShare = async () => {
  return await navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: true,
  });
};

export const stopMedia = (stream) => {
  if (!stream) return;
  stream.getTracks().forEach((t) => t.stop());
};

// (Optional alias)
export const stopStream = stopMedia;
