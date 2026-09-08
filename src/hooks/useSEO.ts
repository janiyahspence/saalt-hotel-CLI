import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object | object[];
}

const BASE_URL = 'https://saalthotels.com';
const DEFAULT_IMAGE = `${BASE_URL}/saalt-patna.png`;

export function useSEO({
  title,
  description,
  keywords,
  ogImage = DEFAULT_IMAGE,
  ogUrl,
  ogType = 'website',
  canonicalUrl,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);

    const resolvedUrl = ogUrl ? `${BASE_URL}${ogUrl}` : BASE_URL;
    const resolvedImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;
    const resolvedCanonical = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : resolvedUrl;

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', resolvedImage);
    setMeta('property', 'og:image:secure_url', resolvedImage);
    setMeta('property', 'og:url', resolvedUrl);
    setMeta('property', 'og:type', ogType);

    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', resolvedImage);

    setCanonical(resolvedCanonical);

    if (structuredData) {
      const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];
      schemas.forEach((schema, i) => {
        const id = `structured-data-${i}`;
        let el = document.getElementById(id) as HTMLScriptElement | null;
        if (!el) {
          el = document.createElement('script');
          el.id = id;
          el.type = 'application/ld+json';
          document.head.appendChild(el);
        }
        el.textContent = JSON.stringify(schema);
      });
    }

    return () => {
      if (structuredData) {
        const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];
        schemas.forEach((_, i) => {
          const el = document.getElementById(`structured-data-${i}`);
          if (el) el.remove();
        });
      }
    };
  }, [title, description, keywords, ogImage, ogUrl, ogType, canonicalUrl, structuredData]);
}

function setMeta(attrName: 'name' | 'property', attrValue: string, content: string) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
