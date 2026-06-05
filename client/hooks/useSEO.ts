import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

export const useSEO = ({
  title,
  description,
  canonical = 'https://axifleetx.com/',
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}: SEOProps) => {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Set canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Set OG tags
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (!ogTitleTag) {
      ogTitleTag = document.createElement('meta');
      ogTitleTag.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute('content', ogTitle || title);

    let ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (!ogDescriptionTag) {
      ogDescriptionTag = document.createElement('meta');
      ogDescriptionTag.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescriptionTag);
    }
    ogDescriptionTag.setAttribute('content', ogDescription || description);

    // Set Twitter tags
    let twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitleTag) {
      twitterTitleTag = document.createElement('meta');
      twitterTitleTag.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitleTag);
    }
    twitterTitleTag.setAttribute('content', twitterTitle || title);

    let twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescriptionTag) {
      twitterDescriptionTag = document.createElement('meta');
      twitterDescriptionTag.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescriptionTag);
    }
    twitterDescriptionTag.setAttribute('content', twitterDescription || description);
  }, [title, description, canonical, ogTitle, ogDescription, twitterTitle, twitterDescription]);
};
