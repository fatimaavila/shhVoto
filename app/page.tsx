import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Anonymous Voting Platform</h1>
      <div className="flex flex-col items-center space-y-4">
        <Link href="/create-poll">
          <Button>Create New Poll</Button>
        </Link>
        <Link href="/polls">
          <Button variant="outline">View Active Polls</Button>
        </Link>
      </div>
    </div>
  );
}