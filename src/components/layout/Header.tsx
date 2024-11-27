import { Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Bell className="h-6 w-6" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}