
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UploadStep from './components/UploadStep';
import ProcessingStep from './components/ProcessingStep';
import ResultsStep from './components/ResultsStep';
import Footer from './components/Footer';
import { AppState, BackgroundStyle } from './types';
import type { GeneratedImage } from './types';
import { generateHeadshot } from './services/geminiService';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LANDING);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleStart = () => {
    setError(null);
    setAppState(AppState.UPLOADING);
  };

  const handleFilesSubmit = (files: File[]) => {
    setUploadedFiles(files);
    setAppState(AppState.PROCESSING);
  };

  const handleReset = useCallback(() => {
    setAppState(AppState.LANDING);
    setUploadedFiles([]);
    setGeneratedImages([]);
    setError(null);
  }, []);

  const runGeneration = useCallback(async () => {
    if (uploadedFiles.length < 3) return;
    setError(null);

    const baseImage = uploadedFiles[0]; // Use the first image as the primary base

    const generationTasks = [
      { style: BackgroundStyle.OFFICE, outfit: "a dark navy business suit" },
      { style: BackgroundStyle.GRADIENT, outfit: "a charcoal grey blazer" },
      { style: BackgroundStyle.NEUTRAL, outfit: "a professional light-colored business shirt" },
    ];
    
    try {
      const results = await Promise.all(
        generationTasks.map(task => 
          generateHeadshot(baseImage, task.style, task.outfit)
        )
      );

      const successfulResults = results.filter(r => r !== null) as string[];

      if (successfulResults.length === 0) {
        throw new Error("The AI was unable to generate headshots. Please try with different, clearer photos.");
      }

      setGeneratedImages(successfulResults.map((src, index) => ({
        id: `img-${index}-${Date.now()}`,
        src,
        prompt: `Background: ${generationTasks[index].style}, Outfit: ${generationTasks[index].outfit}`
      })));

      setAppState(AppState.RESULTS);

    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred during generation.";
      setError(errorMessage);
      setAppState(AppState.UPLOADING); 
    }
  }, [uploadedFiles]);

  useEffect(() => {
    if (appState === AppState.PROCESSING) {
      runGeneration();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState]);

  const renderContent = () => {
    switch (appState) {
      case AppState.LANDING:
        return <Hero onStart={handleStart} />;
      case AppState.UPLOADING:
        return (
          <>
            {error && (
              <div className="max-w-4xl mx-auto -mb-8 px-4">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg" role="alert">
                  <strong className="font-bold">Error: </strong>
                  <span className="block sm:inline">{error}</span>
                </div>
              </div>
            )}
            <UploadStep onFilesSubmit={handleFilesSubmit} onBack={handleReset} />
          </>
        );
      case AppState.PROCESSING:
        return <ProcessingStep />;
      case AppState.RESULTS:
        return <ResultsStep images={generatedImages} onStartOver={handleReset} />;
      default:
        return <Hero onStart={handleStart} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLogoClick={handleReset} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
