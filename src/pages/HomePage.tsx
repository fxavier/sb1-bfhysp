import { mockModels } from '../data/mockModels';
import { ModelCard } from '../components/dashboard/ModelCard';

export function HomePage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome to the Admin Interface
        </h2>
        <p className="mt-2 text-gray-600">
          Manage your application's data and settings from this dashboard.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockModels.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}