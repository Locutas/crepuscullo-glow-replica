"use client";

import React from 'react';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface CrosshairProps {
  name: string;
  code: string;
  imageUrl: string;
}

const CrosshairCard = ({ name, code, imageUrl }: CrosshairProps) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success(`${name} copiada!`);
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/[0.03] border border-transparent rounded-[12px] p-3 transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-primary/40 group flex flex-col h-full">
      <div className="aspect-[4/3] bg-black/40 rounded-lg overflow-hidden mb-3 flex items-center justify-center relative p-2">
        <img 
          src={imageUrl} 
          alt={`Mira ${name}`}
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col gap-2 mt-auto">
        <h3 className="text-white text-[10px] font-bold uppercase tracking-widest group-hover:text-primary/90 transition-colors truncate text-center">
          {name}
        </h3>
        
        <button
          onClick={copyToClipboard}
          className="w-full py-1.5 px-2 rounded-md bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/30 text-white/70 hover:text-white flex items-center justify-center gap-1.5 transition-all duration-300 text-[9px] font-bold uppercase tracking-widest"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-green-500" />
              <span>Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CrosshairCard;