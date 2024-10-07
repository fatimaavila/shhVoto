import Link from 'next/link';
import { Button } from '@/components/ui/button';

// This would typically come from your backend
const mockPolls = [
  { id: 1, question: "What's your favorite color?", votes: 150 },
  { id: 2, question: "Best programming language?", votes: 320 },
  { id: 3, question: "Tabs or spaces?", votes: 280 },
];

export default function Polls() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Active Polls</h1>
      <div className="space-y-4">
        {mockPolls.map((poll) => (
          <div key={poll.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{poll.question}</h2>
            <p className="text-sm text-gray-600 mb-4">Total votes: {poll.votes}</p>
            <Link href={`/polls/${poll.id}`}>
              <Button variant="outline">View Poll</Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/">
          <Button variant="ghost">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}