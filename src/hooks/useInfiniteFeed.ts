import { useCallback, useEffect, useRef, useState } from 'react';
import { api } from '../services/api';
import { Post } from '../types';

export const useInfiniteFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const loadPage = useCallback(async (targetPage: number) => {
    setLoading(true);
    const next = await api.getFeed(targetPage);
    setPosts((prev) => [...prev, ...next]);
    setLoading(false);
  }, []);

  useEffect(() => {
    void loadPage(page);
  }, [loadPage, page]);

  const setSentinel = useCallback((node: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prev) => prev + 1);
      }
    });

    if (node) {
      observerRef.current.observe(node);
    }
  }, [loading]);

  return { posts, loading, setSentinel };
};
