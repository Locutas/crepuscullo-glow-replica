"use client";

import React from 'react';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface CrosshairProps {
  name: string;
  code: string;
  imageUrl: string;
  imageClassName?: string;
}

const CrosshairCard = ({ name, code, imageUrl, imageClassName }: CrosshairProps) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Código copiado para a área de transferência!");
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/[0.03] border border-transparent rounded-[16px] p-4 transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-primary/40 group">
      <div className="aspect-video bg-black/40 rounded-lg overflow-hidden mb-4 flex items-center justify-center relative">
        <img 
          src={imageUrl} 
          alt={`Mira ${name}`}
          className={cn("w-full h-full object-cover transition-transform duration-500", imageClassName)}
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
          className="w-full py-2.5 px-4 rounded-lg bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/30 text-white/70 hover:text-white flex items-center justify-center gap-2 transition-all duration-300 text-[11px] font-bold uppercase tracking-widest overflow-hidden"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-green-500" />
              <span>Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span className="truncate max-w-[150px]">{code}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CrosshairCard;