"use client"

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';

// Mock data - in a real app, this would come from your backend
const mockPoll = {
  id: 1,
  question: "What's your favorite color?",
  options: [
    { id: 1, text: "Red", votes: 30 },
    { id: 2, text: "Blue", votes: 45 },
    { id: 3, text: "Green", votes: 25 },
  ],
};

export default function PollDetail() {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  // In a real app, you'd fetch the poll data based on the id
  const poll = mockPoll;

  const handleVote = () => {
    if (selectedOption) {
      // Here you would send the vote to your backend
      console.log(`Voted for option: ${selectedOption}`);
      toast({
        title: "Vote Submitted",
        description: "Your vote has been recorded anonymously.",
      });
      // Redirect to results page after voting
      router.push(`/polls/${id}/results`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{poll.question}</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <RadioGroup onValueChange={setSelectedOption} className="space-y-2">
          {poll.options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <RadioGroupItem value={option.id.toString()} id={`option-${option.id}`} />
              <Label htmlFor={`option-${option.id}`}>{option.text}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button onClick={handleVote} disabled={!selectedOption}>Submit Vote</Button>
      </form>
      <div className="mt-8 space-x-4">
        <Link href={`/polls/${id}/results`}>
          <Button variant="outline">View Results</Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}