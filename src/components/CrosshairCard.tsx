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
    <div className="bg-white/[0.03] border border-transparent rounded-[16px] p-4 transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-primary/40 group">
      <div className="aspect-video bg-black/40 rounded-lg overflow-hidden mb-4 flex items-center justify-center relative">
        <img 
          src={imageUrl} 
          alt={`Mira ${name}`}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-[13px] font-bold uppercase tracking-widest group-hover:text-primary/90 transition-colors">
            {name}
          </h3>
        </div>
        
        <button
          onClick={copyToClipboard}
          className="w-full py-2.5 px-4 rounded-lg bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/30 text-white/70 hover:text-white flex items-center justify-center gap-2 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-500" />
              <span>Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="truncate max-w-[150px]">Copiar Código</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CrosshairCard;