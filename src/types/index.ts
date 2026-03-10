import type { CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";

export interface BaseLayoutProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export interface NavProps {
  currentPath?: string;
}

export type BlogCategory = CollectionEntry<"blog">["data"]["category"];

export const categoryLabels: Record<BlogCategory, string> = {
  journey: "Parcours",
  autre: "Autre",
};

export interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: Date;
  coverImage?: string | ImageMetadata;
  size?: "lg" | "sm";
}

export interface ArticleLayoutProps {
  title: string;
  publishedAt: Date;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  coverImage?: string | ImageMetadata;
}

export interface CardProps {
  href: string;
  title: string;
  description: string;
  tags?: string[];
  coverImage?: string;
}
