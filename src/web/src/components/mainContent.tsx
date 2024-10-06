import { Objective } from './objective';
import { Education } from './education';
import { Experience } from './experience';
import { Projects } from './projects';

export function MainContent() {
  return (
    <main className="lg:col-span-2 space-y-8">
      <Objective />
      <Education />
      <Experience />
      <Projects />
    </main>
  );
}
