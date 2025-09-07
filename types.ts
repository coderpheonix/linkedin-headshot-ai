
export enum AppState {
  LANDING,
  UPLOADING,
  PROCESSING,
  RESULTS,
}

export enum BackgroundStyle {
  OFFICE = "a modern, bright, and softly blurred office",
  GRADIENT = "a subtle and professional blue-to-gray gradient",
  NEUTRAL = "a neutral light gray studio wall",
}

export interface GeneratedImage {
  id: string;
  src: string;
  prompt: string;
}
