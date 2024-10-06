import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { MainContent } from '../components/mainContent';

export function Home() {
  return (
    <div className="bg-white text-black font-sans">
      <Header />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
