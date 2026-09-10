import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "beyownd_c_test_progress";

export function useTestProgress() {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved
      ? JSON.parse(saved)
      : { info: null, mcqAnswers: [], yesNoAnswers: [], definitionAnswers: [], submitted: false };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const updateAnswer = useCallback((section, questionId, value, key) => {
    setProgress((prev) => {
      const list = [...prev[section]];
      const idx = list.findIndex((a) => a.questionId === questionId);
      const entry = { questionId, [key]: value };
      if (idx >= 0) list[idx] = entry;
      else list.push(entry);
      return { ...prev, [section]: list };
    });
  }, []);

  const setInfo = useCallback((info) => setProgress((prev) => ({ ...prev, info })), []);

  const markSubmitted = useCallback(() => {
    setProgress((prev) => ({ ...prev, submitted: true }));
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const clearProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress({ info: null, mcqAnswers: [], yesNoAnswers: [], definitionAnswers: [], submitted: false });
  }, []);

  return { progress, updateAnswer, setInfo, markSubmitted, clearProgress };
}