import { useEffect, useState } from 'react';
import Navbar, { type PageKey } from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Gallery from '@/pages/Gallery';
import Video from '@/pages/Video';

export default function App() {
  const [page, setPage] = useState<PageKey>('home');

  const navigate = (next: PageKey) => {
    setPage(next);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar current={page} onNavigate={navigate} />

      <main className="flex-1">
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'gallery' && <Gallery />}
        {page === 'video' && <Video />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
