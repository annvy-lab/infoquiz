"use client";
import { useState } from "react";
import { Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const questionData = {
  idquestion: 1,
  quizLength: 10,
  title: "Qual é a principal função de um sistema operacional?",
  description:
    "Escolha a alternativa que melhor descreve o papel de um sistema operacional em um computador.",
  options: [
    "Gerenciar o hardware e fornecer uma interface para o usuário",
    "Criar documentos e planilhas automaticamente",
    "Exibir páginas da web",
    "Detectar vírus e remover malwares",
  ],
  correctAnswer: "Gerenciar o hardware e fornecer uma interface para o usuário",
};

export default function Question() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const progressValue = (questionData.idquestion / questionData.quizLength) * 100;

  const handleClick = (option: string) => {
    if (!selectedOption) setSelectedOption(option);
  };

  const getOptionClass = (option: string) => {
    if (!selectedOption) {
      return "border-2 border-foreground/30 hover:border-primary";
    }

    if (option === selectedOption && option === questionData.correctAnswer) {
      return "border-2 border-teal-400/30 text-teal-400";
    }

    if (option === selectedOption && option !== questionData.correctAnswer) {
      return "border-2 border-rose-400/40 text-rose-400";
    }

    return "border-2 border-foreground/20 text-foreground/40";
  };

  return (
    <div className="h-[100vh] w-full flex flex-col items-center justify-start">
      <div className="h-full md:max-w-128 flex flex-col justify-between mb-0 pt-0">
        <div className="flex flex-col justify-between items-center gap-13">
          <motion.div className="w-full min-h-45 max-h-[50vh] gap-2 flex flex-col justify-between py-6 pt-0 bg-primary rounded-b-3xl shadow-2xl" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} style={{ transformOrigin: "top" }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}>
            <Progress
              value={progressValue}
              className="w-full h-1 [&>div]:bg-[var(--chart-2)] z-90"
            />
            <div className="w-full flex flex-col px-8 gap-2 mt-[-1rem] items-start justify-start text-foreground/80">
              <a href="/" className="ml-[-1rem] mt-5 md:mt-4">
                <Button variant="ghost" className="hover:bg-purple-900/60 rounded-2xl">
                  <Undo2 /> Sair
                </Button>
              </a>
            </div>

            <div className="w-full flex flex-col items-center justify-start px-8 gap-2">
              <h1 className="w-full flex items-center gap-1 text-xl break-words">
                {questionData.title}
              </h1>
              <p className="w-full text-sm text-primary-foreground/80">
                {questionData.description}
              </p>
            </div>
          </motion.div>

          <motion.div className="w-full flex flex-col px-8 mb-3 items-center gap-4" initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}>
            {questionData.options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleClick(option)}
                className={`relative w-full flex items-center justify-start px-4 py-2 gap-1 bg-card rounded-3xl shadow-2xl cursor-pointer transition-all ease-in-out duration-400 hover:-translate-y-1 ${getOptionClass(option)}`}
              >
                <span className="line-clamp-3 text-base font-light antialiased">
                  {option}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex items-end justify-end px-4 mt-4 gap-1">
          <img src="/bug-cat.png" alt="Gato bugado" className="h-25" />
        </div>
      </div>
    </div>
  );
}
