import React, { useEffect } from 'react';

interface Post {
  image: string;
  category: string;
  title: string;
  fullContent: string;
}

interface BlogModalProps {
  post: Post | null;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!post) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-[body-fade-in_0.3s_forwards]"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 border border-slate-700 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col relative animate-[scale-in_0.3s_ease-out_forwards]"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: 'scale(0.95)' }}
      >
        <button 
          onClick={onClose}
          className="absolute -top-3 -right-3 w-10 h-10 bg-amber-500 rounded-full text-white flex items-center justify-center text-2xl z-10 hover:bg-amber-400 transition-colors"
          aria-label="Fechar modal"
        >
          &times;
        </button>
        <div className="overflow-hidden rounded-t-lg">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
        </div>
        <div className="p-8 overflow-y-auto">
          <p className="text-amber-500 text-sm font-semibold mb-2">{post.category}</p>
          <h2 className="text-3xl font-bold text-slate-200 mb-6">{post.title}</h2>
          <div className="text-slate-400 leading-relaxed space-y-4 whitespace-pre-line">
            {post.fullContent}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default BlogModal;