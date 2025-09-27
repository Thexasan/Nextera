import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';

export type Filters = {
  disposition?: string;
  minRadius?: number;
  maxRadius?: number;
  minMass?: number;
  maxMass?: number;
  minPeriod?: number;
  maxPeriod?: number;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApply: (filters: Filters) => void;
};

const FiltersSheet = ({ open, onOpenChange, onApply }: Props) => {
  const [disposition, setDisposition] = useState<string>('');
  const [minRadius, setMinRadius] = useState<string>('');
  const [maxRadius, setMaxRadius] = useState<string>('');
  const [minMass, setMinMass] = useState<string>('');
  const [maxMass, setMaxMass] = useState<string>('');
  const [minPeriod, setMinPeriod] = useState<string>('');
  const [maxPeriod, setMaxPeriod] = useState<string>('');

  const apply = () => {
    onApply({
      disposition: disposition || undefined,
      minRadius: minRadius ? Number(minRadius) : undefined,
      maxRadius: maxRadius ? Number(maxRadius) : undefined,
      minMass: minMass ? Number(minMass) : undefined,
      maxMass: maxMass ? Number(maxMass) : undefined,
      minPeriod: minPeriod ? Number(minPeriod) : undefined,
      maxPeriod: maxPeriod ? Number(maxPeriod) : undefined,
    });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:w-[420px]">
        <SheetHeader>
          <SheetTitle className="font-orbitron">Filters</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label>Disposition</Label>
            <select className="w-full bg-muted/50 border border-border rounded-md p-2" value={disposition} onChange={(e) => setDisposition(e.target.value)}>
              <option value="">Any</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Candidate">Candidate</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Min Radius (R⊕)</Label>
              <Input value={minRadius} onChange={(e) => setMinRadius(e.target.value)} placeholder="e.g. 1" />
            </div>
            <div className="space-y-2">
              <Label>Max Radius (R⊕)</Label>
              <Input value={maxRadius} onChange={(e) => setMaxRadius(e.target.value)} placeholder="e.g. 2" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Min Mass (M⊕)</Label>
              <Input value={minMass} onChange={(e) => setMinMass(e.target.value)} placeholder="e.g. 1" />
            </div>
            <div className="space-y-2">
              <Label>Max Mass (M⊕)</Label>
              <Input value={maxMass} onChange={(e) => setMaxMass(e.target.value)} placeholder="e.g. 5" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Min Period (days)</Label>
              <Input value={minPeriod} onChange={(e) => setMinPeriod(e.target.value)} placeholder="e.g. 10" />
            </div>
            <div className="space-y-2">
              <Label>Max Period (days)</Label>
              <Input value={maxPeriod} onChange={(e) => setMaxPeriod(e.target.value)} placeholder="e.g. 400" />
            </div>
          </div>
        </div>
        <SheetFooter className="mt-6">
          <Button onClick={apply} className="w-full">Apply Filters</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default FiltersSheet;
