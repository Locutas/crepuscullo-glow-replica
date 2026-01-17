import { ArrowLeft, Mail, Paperclip } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';

const Contato = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-xl mx-auto">
          {/* Back + Title */}
          <div className="flex items-center gap-4 mb-10">
            <Link 
              to="/"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-3xl font-semibold text-foreground">Contato</h1>
          </div>

          {/* Form Card */}
          <div className="setup-card p-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold text-foreground">Entre em Contato</h2>
            </div>
            
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-foreground mb-2">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-foreground mb-2">Assunto</label>
                <input 
                  type="text" 
                  placeholder="Assunto da mensagem"
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-sm text-foreground mb-2">Mensagem</label>
                <textarea 
                  placeholder="Sua mensagem..."
                  rows={5}
                  className="form-input resize-none"
                />
              </div>

              <div>
                <label className="block text-sm text-foreground mb-2">Anexar Arquivo (Opcional)</label>
                <div className="form-input flex items-center gap-3 cursor-pointer hover:border-primary/30 transition-colors">
                  <Paperclip className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">Clique para anexar um arquivo</span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </main>
      
      <AudioPlayer />
    </div>
  );
};

export default Contato;
