"use client";

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/components/AuthProvider';
import { Navigate } from 'react-router-dom';
import FallingPetals from '@/components/FallingPetals';

const Login = () => {
  const { session, loading } = useAuth();

  if (loading) return null;
  if (session) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      <FallingPetals />
      <div className="relative z-10 w-full max-w-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] p-8 rounded-[24px] shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-[4px] uppercase font-space mb-2">Login</h1>
          <p className="text-white/40 text-xs uppercase tracking-[2px]">Acesse sua conta Crepuscullo</p>
        </div>
        
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#ff4655',
                  brandAccent: '#e63e4c',
                  inputBackground: 'transparent',
                  inputText: 'white',
                  inputBorder: 'rgba(255,255,255,0.1)',
                  inputPlaceholder: 'rgba(255,255,255,0.3)',
                }
              }
            },
            className: {
              container: 'auth-container',
              button: 'auth-button',
              input: 'auth-input',
            }
          }}
          theme="dark"
          providers={[]}
        />
      </div>
    </div>
  );
};

export default Login;