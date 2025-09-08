import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UploadStep from './components/UploadStep';
import ProcessingStep from './components/ProcessingStep';
import ResultsStep from './components/ResultsStep';
import Footer from './components/Footer';

enum AppState {
  LANDING = "landing",
  UPLOADING = "uploading",
  PROCESSING = "processing",
  RESULTS = "results"
}

type GeneratedImage = {
  id: string;
  src: string;
  prompt: string;
};

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LANDING);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fixedImages: GeneratedImage[] = [
    { id: 'img1', src: 'https://lh3.googleusercontent.com/CFD8jo5r9xhx8fioKrhS3cVyeZ0hAUf4FEpaMQ6elYzDnRmB6hg87qT2Y-ajE3JAppXkJolqPZeTrNvx41reG4AREAJ5lEltoi-KCaqJ9B-ANhkVqmA4XEXwrKZz-w_cK5U_p33qaVU=w1280', prompt: 'Image 1' },
    { id: 'img2', src: 'https://lh5.googleusercontent.com/4t2aRDG8n4pKX5h3txhy8oSYtsrDLJGIzS9j7Pl9Ftkz4ooFTdxiM4GlStzaC4hDCC_78STcOMRHPjlDCGjX5-gpL3dPiood4qqHcF15LoD0C4tm_p1kMb-Jm1RSa560TCalbHLhMXU=w1280', prompt: 'Image 2' },
    { id: 'img3', src: 'https://lh3.googleusercontent.com/yNq1yq7NxNdluTItAj6euSU6ko5TxcaLBEdflDguw2seSaxfKvHe9e7F7VeHJtG_lnNd60y46pKoa63ZSSa6Lj9K9e5cIQ4niid4iorsfEW_PfpYL2ZaWMYNbLkX2ea-2JvtMq2ffAM=w1280', prompt: 'Image 3' },
    { id: 'img4', src: 'https://lh6.googleusercontent.com/Ws7Iz1UHYQzQ7lf5MS1ed-ro6IVsA4Vqz9jCxDkOMVCRntiWP9-_7HpfDL6ucbeiPzSGUcU4hOPHk69uikvPCpPXFEF4Lvpk9SXZ5BHaumMhm9YCD9wTeu77xkXC0uBJ5KP8vuoj0OA=w1280', prompt: 'Image 4' },
  ];

  const handleStart = () => {
    setError(null);
    setAppState(AppState.UPLOADING);
  };

  const handleFilesSubmit = (files: File[]) => {
    setUploadedFiles(files);
    setAppState(AppState.PROCESSING);

    // যদি user upload করে, সেটাকে use করো; নাহলে fixed images
    const imagesToShow: GeneratedImage[] = files.length
      ? files.map((file, idx) => ({
          id: `user-${idx}`,
          src: URL.createObjectURL(file),
          prompt: `User Image ${idx + 1}`
        }))
      : fixedImages;

    setTimeout(() => {
      setGeneratedImages(imagesToShow);
      setAppState(AppState.RESULTS);
    }, 500); // simulate processing
  };

  const handleReset = useCallback(() => {
    setAppState(AppState.LANDING);
    setUploadedFiles([]);
    setGeneratedImages([]);
    setError(null);
  }, []);

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
