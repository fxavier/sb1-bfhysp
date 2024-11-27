import { LayoutDashboard, Users, FileText, Settings } from 'lucide-react';
import { Link } from './Link';

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-gray-800 min-h-screen">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-white text-xl font-semibold">Django Admin</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        <Link href="/" icon={LayoutDashboard}>Dashboard</Link>
        <Link href="/users" icon={Users}>Users</Link>
        <Link href="/posts" icon={FileText}>Posts</Link>
        <Link href="/settings" icon={Settings}>Settings</Link>
      </nav>
    </div>
  );
}