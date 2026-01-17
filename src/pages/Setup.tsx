import { Monitor, Headphones, Keyboard, Cpu } from 'lucide-react';
import Header from '@/components/Header';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';

import monitorPrincipal from '@/assets/monitor-principal.png';
import monitorSecundario from '@/assets/monitor-secundario.png';
import headset from '@/assets/headset.png';
import fone from '@/assets/fone.png';
import microfone from '@/assets/microfone.png';
import teclado from '@/assets/teclado.png';
import mouse from '@/assets/mouse.png';

const Setup = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-primary text-glow mb-4 tracking-wider">
              SETUP
            </h1>
            <p className="text-muted-foreground text-lg">
              Conheça todos os equipamentos que uso para criar conteúdo profissional
            </p>
          </div>

          {/* MONITORES */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground tracking-wide">MONITORES</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="setup-card p-4">
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src={monitorPrincipal} alt="Monitor Principal" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-foreground font-medium">Monitor Principal</h3>
                  <span className="badge-hz">240Hz</span>
                </div>
                <p className="text-muted-foreground text-sm">AOC Agon 25G3ZM/BK25</p>
              </div>
              <div className="setup-card p-4">
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src={monitorSecundario} alt="Monitor Secundário" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-foreground font-medium">Monitor Secundário</h3>
                  <span className="badge-hz">180Hz</span>
                </div>
                <p className="text-muted-foreground text-sm">Samsung Odyssey G3 27 G30A</p>
              </div>
            </div>
          </section>

          {/* ÁUDIO */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground tracking-wide">ÁUDIO</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="setup-card p-4">
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src={headset} alt="Headset" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-foreground font-medium mb-1">Headset</h3>
                <p className="text-muted-foreground text-sm">HyperX Cloud Alpha S</p>
              </div>
              <div className="setup-card p-4">
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src={fone} alt="Fone de ouvido" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-foreground font-medium mb-1">Fone de ouvido</h3>
                <p className="text-muted-foreground text-sm">KZ ZS10 Pro</p>
              </div>
              <div className="setup-card p-4">
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src={microfone} alt="Microfone" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-foreground font-medium mb-1">Microfone</h3>
                <p className="text-muted-foreground text-sm">FIFINE AM8</p>
              </div>
            </div>
          </section>

          {/* PERIFÉRICOS */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Keyboard className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground tracking-wide">PERIFÉRICOS</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="setup-card p-4">
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src={teclado} alt="Teclado" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-foreground font-medium mb-1">Teclado</h3>
                <p className="text-muted-foreground text-sm">HyperX Alloy Origins 60</p>
              </div>
              <div className="setup-card p-4">
                <div className="aspect-video bg-black/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src={mouse} alt="Mouse" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-foreground font-medium mb-1">Mouse</h3>
                <p className="text-muted-foreground text-sm">Attack Shark X3</p>
              </div>
            </div>
          </section>

          {/* HARDWARE */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground tracking-wide">HARDWARE</h2>
            </div>
            <div className="setup-card p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-foreground font-medium mb-1">Processador</h3>
                  <p className="text-muted-foreground text-sm">Ryzen 7800X3D</p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">Placa de Vídeo</h3>
                  <p className="text-muted-foreground text-sm">Nvidia GeForce RTX 3050</p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">Placa Mãe</h3>
                  <p className="text-muted-foreground text-sm">ASUS TUF B650-M Plus</p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">Memória RAM</h3>
                  <p className="text-muted-foreground text-sm">Kings Fury Beast 32gb (2x16) 5400Mhz DDR5</p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">Armazenamento</h3>
                  <p className="text-muted-foreground text-sm">SSD NVme M2 1TB</p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">Fonte</h3>
                  <p className="text-muted-foreground text-sm">Corsair CX Series CX750, 750W, 80 Plus</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <AudioPlayer />
    </div>
  );
};

export default Setup;
