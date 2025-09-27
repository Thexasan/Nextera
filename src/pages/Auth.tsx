import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Rocket, User, Lock, Mail, Globe, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import nasaLogo from '@/assets/nasa-logo.png';

export default function Auth() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const loginSchema = z.object({
    email: z.string().trim().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters')
  });

  const signupSchema = z.object({
    email: z.string().trim().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6),
    name: z.string().trim().min(1)
  }).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ 
    email: '', 
    password: '', 
    confirmPassword: '', 
    name: '' 
  });

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        navigate('/', { replace: true });
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate('/', { replace: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { email, password } = loginSchema.parse(loginForm);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast({ title: 'Signed in', description: 'Welcome back!' });
      navigate('/', { replace: true });
    } catch (err: any) {
      toast({ title: 'Sign in failed', description: err.message ?? 'Please try again', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const parsed = signupSchema.parse(signupForm);
      const redirectUrl = `${window.location.origin}/`;
      const { error } = await supabase.auth.signUp({
        email: parsed.email,
        password: parsed.password,
        options: {
          data: { full_name: parsed.name },
          emailRedirectTo: redirectUrl
        }
      });
      if (error) throw error;
      toast({ title: 'Sign up successful', description: 'Check your email to confirm your account.' });
    } catch (err: any) {
      toast({ title: 'Sign up failed', description: err.message ?? 'Please try again', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-cosmic flex items-center justify-center p-4 bg-stars">
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/60 to-background/80"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Back to Home */}
        <div className="mb-6">
          <Button asChild variant="ghost" className="text-foreground/80 hover:text-primary">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <Card className="cosmic-shadow stellar-glow">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src={nasaLogo} alt="NASA" className="h-10 w-10" />
              <span className="text-2xl font-orbitron font-bold bg-gradient-stellar bg-clip-text text-transparent">
                Nextera
              </span>
            </div>
            <CardTitle className="text-xl font-orbitron">
              Welcome to the Cosmic Observatory
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Access your personalized space exploration dashboard
            </p>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="astronaut@nasa.gov"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        className="pl-10 bg-muted/50 border-border/50 focus:border-primary"
                        required
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        className="pl-10 bg-muted/50 border-border/50 focus:border-primary"
                        required
                      />
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full stellar-glow animate-pulse-glow"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                        Signing In...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Rocket className="w-4 h-4 mr-2" />
                        Launch into Space
                      </div>
                    )}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <div className="relative">
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="Commander Neil Armstrong"
                        value={signupForm.name}
                        onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                        className="pl-10 bg-muted/50 border-border/50 focus:border-primary"
                        required
                      />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="astronaut@nasa.gov"
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                        className="pl-10 bg-muted/50 border-border/50 focus:border-primary"
                        required
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={signupForm.password}
                        onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                        className="pl-10 bg-muted/50 border-border/50 focus:border-primary"
                        required
                      />
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm">Confirm Password</Label>
                    <div className="relative">
                      <Input
                        id="signup-confirm"
                        type="password"
                        placeholder="••••••••"
                        value={signupForm.confirmPassword}
                        onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                        className="pl-10 bg-muted/50 border-border/50 focus:border-primary"
                        required
                      />
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full stellar-glow animate-pulse-glow"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                        Creating Account...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        Join the Cosmic Crew
                      </div>
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to explore the universe responsibly
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Floating cosmic elements */}
        <div className="absolute -top-10 -left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute -bottom-5 -right-5 w-2 h-2 bg-accent rounded-full animate-twinkle"></div>
        <div className="absolute top-1/2 -right-10 w-3 h-3 bg-secondary-glow rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
}