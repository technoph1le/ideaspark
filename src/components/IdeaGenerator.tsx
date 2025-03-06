import { useEffect, useState } from "react";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";
import dictionary from "../data/dictionary";

// const dictionary = [
//   "Real-time Collaboration Tool",
//   "Git Commit Message Generator Message Generator",
// ];

const IdeaGenerator = () => {
  const [isSingleMode, setSingleMode] = useState<boolean>(true);
  const [generatedWrods, setGeneratedWords] = useState<string[]>([]);

  const getRandomWord = () =>
    dictionary[Math.floor(Math.random() * dictionary.length)];

  const generateIdea = () => {
    console.log(dictionary.length);
    if (isSingleMode) {
      setGeneratedWords([getRandomWord()]);
    } else {
      let word1 = getRandomWord();
      let word2 = getRandomWord();

      // Quick solution to make sure 2 words are not the same :)
      // while (word1 === word2) {
      //   word2 = getRandomWord();
      // }
      setGeneratedWords([word1, word2]);
    }
  };

  //
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === " ") {
        generateIdea(); // Trigger generateIdea() with spacebar
      }

      if (e.key === "ArrowLeft") {
        setSingleMode(true); // Switch to Single Mode
      } else if (e.key === "ArrowRight") {
        setSingleMode(false); // Switch to Combo Mode
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  // Trigger generateIdea() when switching modes and when page is loaded
  useEffect(() => {
    generateIdea();
  }, [isSingleMode]);

  return (
    <section className="idea-generator">
      <ToggleSwitch isSingleMode={isSingleMode} setSingleMode={setSingleMode} />
      <div className="words">
        {isSingleMode ? (
          <div className="word">{generatedWrods[0]}</div>
        ) : (
          <>
            <div className="word">{generatedWrods[0]}</div>
            <div className="word--plus">+</div>
            <div className="word">{generatedWrods[1]}</div>
          </>
        )}
      </div>
      <Button
        onClick={generateIdea}
        title="Press 'Spacebar' to generate a new idea"
      >
        Generate Idea
      </Button>
    </section>
  );
};

export default IdeaGenerator;
