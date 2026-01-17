import { Mail, Send, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contato = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-28 pb-16 px-6">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground text-glow mb-2">
              Contato
            </h1>
            <p className="text-muted-foreground text-sm">
              Entre em contato para parcerias ou colaborações
            </p>
          </div>
          
          <form className="space-y-4">
            <div>
              <Input 
                type="text" 
                placeholder="Seu nome"
                className="bg-secondary/40 border-border/30 focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Seu e-mail"
                className="bg-secondary/40 border-border/30 focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Sua mensagem"
                rows={5}
                className="bg-secondary/40 border-border/30 focus:border-primary/50 text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar Mensagem
            </Button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-border/30 text-center">
            <p className="text-muted-foreground text-sm mb-2">Ou entre em contato por e-mail:</p>
            <a 
              href="mailto:contato@crepuscullo.com"
              className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              contato@crepuscullo.com
            </a>
          </div>
        </div>
      </main>
      
      <AudioPlayer />
    </div>
  );
};

export default Contato;
