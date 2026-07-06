import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly baseUrl = 'https://www.coronacoaching.fr';
  private readonly defaultImage = `${this.baseUrl}/assets/images/og-default.jpg`;

  constructor(private meta: Meta, private title: Title) {}

  update(config: SeoConfig): void {
    const fullTitle = config.title;
    const url = config.ogUrl ?? this.baseUrl;
    const image = config.ogImage ?? this.defaultImage;

    this.title.setTitle(fullTitle);

    const tags: { name?: string; property?: string; content: string }[] = [
      { name: 'description', content: config.description },
      { name: 'keywords',    content: config.keywords ?? '' },
      { name: 'author',      content: 'Jean-Baptiste Corona' },
      { name: 'robots',      content: 'index, follow' },
      // Open Graph
      { property: 'og:title',       content: fullTitle },
      { property: 'og:description', content: config.description },
      { property: 'og:image',       content: image },
      { property: 'og:url',         content: url },
      { property: 'og:type',        content: 'website' },
      { property: 'og:locale',      content: 'fr_FR' },
      { property: 'og:site_name',   content: 'Corona Coaching' },
      // Twitter Card
      { name: 'twitter:card',        content: 'summary_large_image' },
      { name: 'twitter:title',       content: fullTitle },
      { name: 'twitter:description', content: config.description },
      { name: 'twitter:image',       content: image },
    ];

    tags.forEach(tag => {
      if (tag.property) {
        this.meta.updateTag({ property: tag.property, content: tag.content });
      } else if (tag.name) {
        this.meta.updateTag({ name: tag.name, content: tag.content });
      }
    });
  }
}
