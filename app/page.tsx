"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EllipsisVertical } from "lucide-react";
import ModuleList from "@/components/module/module-list";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full flex flex-col  items-center min-h-screen pb-20">
      <div className="flex flex-col items-center">
        <motion.header className="flex w-full p-6 pb-13 bg-primary items-center justify-between gap-2 md:rounded-b-3xl md:pb-5" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} style={{ transformOrigin: "top" }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}>
          <div className="w-3/5 flex items-start gap-4 pr-1">
            <div className="flex flex-col items-start gap-2 truncate">
              <Avatar className="w-10 h-10">
                <AvatarImage src="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-lg">Olá, User</span>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <img
              src="/bug-cat.png"
              alt="Bug: o gato mascote"
              className="relative right-6 w-31 mb-[-1.5rem]"
            />
            <EllipsisVertical size={35} className="self-start mt-[-0.5rem]" />
          </div>
        </motion.header>
        <ModuleList />
      </div>
    </div>
  );
}
