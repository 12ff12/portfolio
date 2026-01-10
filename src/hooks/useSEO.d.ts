export interface SEOOptions {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

declare function useSEO(options: SEOOptions): void;

export default useSEO;
