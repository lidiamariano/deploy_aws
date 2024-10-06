import { Skills } from './skills';
import { Languages } from './languages';
import { Activities } from './activities';

export function Sidebar() {
  return (
    <aside className="lg:col-span-1">
      <div className="space-y-8">
        <Skills />
        <Languages />
        <Activities />
      </div>
    </aside>
  );
}
