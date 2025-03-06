import { useEffect, useState } from "react";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";
import dictionary from "../data/dictionary";

const IdeaGenerator = () => {
  const [isSingleMode, setSingleMode] = useState<boolean>(true);
  const [generatedWords, setGeneratedWords] = useState<string[]>([]);

  const getRandomWord = () =>
    dictionary[Math.floor(Math.random() * dictionary.length)];

  const generateIdea = () => {
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

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSingleMode(true); // Switch to Single Mode
      } else if (e.key === "ArrowRight") {
        setSingleMode(false); // Switch to Combo Mode
      }

      if (e.key === "g") {
        generateIdea();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    generateIdea();

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [, isSingleMode]);

  return (
    <section className="idea-generator">
      <ToggleSwitch isSingleMode={isSingleMode} setSingleMode={setSingleMode} />
      <div className="words">
        {isSingleMode ? (
          <div className="word">{generatedWords[0]}</div>
        ) : (
          <>
            <div className="word">{generatedWords[0]}</div>
            <div className="word--plus">+</div>
            <div className="word">{generatedWords[1]}</div>
          </>
        )}
      </div>
      <Button onClick={generateIdea} title="Press 'G' to generate a new idea">
        Generate Idea
      </Button>
    </section>
  );
};

export default IdeaGenerator;
