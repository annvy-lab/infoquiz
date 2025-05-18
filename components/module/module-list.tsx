"use client"
import ModuleCard from "./module-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ModuleList() {
    return (
        <motion.div className="w-full mt-[-2rem] md:mt-0 bg-background rounded-3xl p-6 flex flex-col gap-5" initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1]
            }}>
            <div className="relative w-full rounded-xl">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder=" pesquisar quiz..."
                    className="pl-9 rounded-xl"
                />
            </div>
            <ModuleCard />
        </motion.div>
    );
}