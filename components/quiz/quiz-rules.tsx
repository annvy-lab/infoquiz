"use client";
import { Undo2, Gamepad2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function QuizRules() {
    return (
        <div className="h-[100vh] w-full flex flex-col items-center justify-start overflow-hidden">
            <div className="w-full h-full md:max-w-128 flex flex-col justify-between mb-0 pt-0">
                <div className="flex flex-col justify-between items-center gap-13">
                    <motion.div className="w-full min-h-[70vh] gap-2 flex flex-col justify-between py-6 pt-0 bg-primary rounded-b-3xl shadow-2xl"
                        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} style={{ transformOrigin: "top" }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}>
                        <div className="w-full flex flex-col px-8 gap-2 mt-[-1.2rem] items-start justify-start text-foreground/80">
                            <a href="/" className="ml-[-1rem] mt-8">
                                <Button variant="ghost" className="hover:bg-purple-900/60 rounded-2xl">
                                    <Undo2 /> Sair
                                </Button>
                            </a>
                        </div>

                        <div className="w-full flex flex-col items-center justify-start px-8 gap-3">
                            <h1 className="w-full flex items-center gap-3 text-3xl font-medium break-words"> Regras do Quiz <Gamepad2 size={40} />
                            </h1>
                            <p className="w-full text-xl">Acerte o máximo possível!</p>
                            <p className="w-full text-base text-primary-foreground/90">
                                1. Apenas uma alternativa é correta em cada pergunta.<br /><br />
                                2. Seu progresso ficará salvo a todo momento.<br /><br />
                                3. Ao final, você verá o seu desempenho no assunto!<br /><br />
                                4. Não pare de praticar, cada pergunta é uma chance de aprender algo novo!
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full flex items-center justify-between px-4 mt-4 gap-1 relative">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="absolute left-4 bottom-10"
                    >
                        <a href="/module/quiz/">
                            <Button className="rounded-3xl hover:gap-5 transition-all duration-300 ease-in-out cursor-pointer">
                                Continuar <ArrowRight />
                            </Button>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="absolute bottom-0 right-4"
                    >
                        <img src="/bug-cat.png" alt="Gato bugado" className="h-25" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}