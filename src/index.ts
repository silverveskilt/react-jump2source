import React, { useEffect } from 'react';

interface B2CursorConfig {
  projectDir: string;
  enabled?: boolean;
}

/**
 * Hook that enables browser-to-cursor navigation
 * @param config Configuration object
 * @param config.projectDir Absolute path to the project root directory
 * @param config.enabled Whether the feature is enabled (defaults to true in development)
 */
export function useB2Cursor(config: B2CursorConfig) {
  const { projectDir, enabled = process.env.NODE_ENV === 'development' } = config;

  useEffect(() => {
    if (!enabled || !projectDir) return;

    const handleClick = (e: MouseEvent) => {
      if (e.metaKey) {
        e.preventDefault();
        const el = (e.target as HTMLElement).closest('[data-source]');
        if (el) {
          const fileInfo = el.getAttribute('data-source');
          if (fileInfo) {
            const filePath = `${projectDir}/src/${fileInfo}`;
            window.location.href = `cursor://file//${filePath}`;
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [enabled, projectDir]);
}
