import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

type Props = {
  onResult: (text: string) => void;
};

const VoiceSearchButton = ({ onResult }: Props) => {
  const { toast } = useToast();
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      recognitionRef.current = null;
      return;
    }
    const recognition: SpeechRecognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
      toast({ title: 'Voice error', description: 'Microphone access or recognition failed', variant: 'destructive' });
    };

    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
  }, [onResult, toast]);

  const toggle = () => {
    const rec = recognitionRef.current;
    if (!rec) {
      toast({ title: 'Not supported', description: 'Voice search not supported in this browser' });
      return;
    }
    if (!listening) {
      try {
        setListening(true);
        rec.start();
      } catch (e) {
        setListening(false);
      }
    } else {
      rec.stop();
      setListening(false);
    }
  };

  return (
    <Button type="button" variant={listening ? 'default' : 'secondary'} size="icon" onClick={toggle} aria-label="Voice search">
      <Mic className="w-4 h-4" />
    </Button>
  );
};

export default VoiceSearchButton;
