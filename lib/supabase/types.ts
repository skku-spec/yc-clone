export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type ProfileRole =
  | "outsider"
  | "pre_runner"
  | "runner"
  | "alumni"
  | "mentor"
  | "admin";

export type PostType = "news" | "blog";

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          slug: string;
          role: ProfileRole;
          bio: string;
          photo: string;
          batch: string;
          company: string;
          username: string;
          first_name: string;
          last_name: string;
          linkedin_url: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          role: ProfileRole;
          bio: string;
          photo: string;
          batch: string;
          company: string;
          username: string;
          first_name: string;
          last_name: string;
          linkedin_url: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          role?: ProfileRole;
          bio?: string;
          photo?: string;
          batch?: string;
          company?: string;
          username?: string;
          first_name?: string;
          last_name?: string;
          linkedin_url?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          type: PostType;
          author_id: string;
          featured: boolean;
          image_url: string;
          published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          type: PostType;
          author_id: string;
          featured?: boolean;
          image_url: string;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          excerpt?: string;
          content?: string;
          type?: PostType;
          author_id?: string;
          featured?: boolean;
          image_url?: string;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      tags: {
        Row: {
          id: string;
          slug: string;
          label: string;
        };
        Insert: {
          id?: string;
          slug: string;
          label: string;
        };
        Update: {
          id?: string;
          slug?: string;
          label?: string;
        };
        Relationships: [];
      };
      post_tags: {
        Row: {
          post_id: string;
          tag_id: string;
        };
        Insert: {
          post_id: string;
          tag_id: string;
        };
        Update: {
          post_id?: string;
          tag_id?: string;
        };
        Relationships: [];
      };
      comments: {
        Row: {
          id: string;
          post_id: string;
          author_id: string;
          content: string;
          parent_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          post_id: string;
          author_id: string;
          content: string;
          parent_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          post_id?: string;
          author_id?: string;
          content?: string;
          parent_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      reactions: {
        Row: {
          id: string;
          post_id: string;
          user_id: string;
          emoji: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          post_id: string;
          user_id: string;
          emoji: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          post_id?: string;
          user_id?: string;
          emoji?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      jobs: {
        Row: {
          id: string;
          company: string;
          company_slug: string;
          title: string;
          description: string;
          role: string;
          role_slug: string;
          location: string;
          location_slug: string;
          salary: string;
          tags: string[];
          remote: boolean;
          logo_color: string;
          logo_letter: string;
          logo_url: string;
          posted: string;
          active: boolean;
          created_by: string;
        };
        Insert: {
          id?: string;
          company: string;
          company_slug: string;
          title: string;
          description: string;
          role: string;
          role_slug: string;
          location: string;
          location_slug: string;
          salary: string;
          tags: string[];
          remote?: boolean;
          logo_color: string;
          logo_letter: string;
          logo_url?: string;
          posted: string;
          active?: boolean;
          created_by: string;
        };
        Update: {
          id?: string;
          company?: string;
          company_slug?: string;
          title?: string;
          description?: string;
          role?: string;
          role_slug?: string;
          location?: string;
          location_slug?: string;
          salary?: string;
          tags?: string[];
          remote?: boolean;
          logo_color?: string;
          logo_letter?: string;
          logo_url?: string;
          posted?: string;
          active?: boolean;
          created_by?: string;
        };
        Relationships: [];
      };
      library_items: {
        Row: {
          id: string;
          slug: string;
          title: string;
          author: string;
          author_role: string;
          type: string;
          categories: string[];
          description: string;
          body: string;
          date: string;
          views: number;
          duration: string;
          youtube_id: string;
          featured: boolean;
          thumbnail_color: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          author: string;
          author_role: string;
          type: string;
          categories: string[];
          description: string;
          body: string;
          date: string;
          views?: number;
          duration: string;
          youtube_id: string;
          featured?: boolean;
          thumbnail_color: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          author?: string;
          author_role?: string;
          type?: string;
          categories?: string[];
          description?: string;
          body?: string;
          date?: string;
          views?: number;
          duration?: string;
          youtube_id?: string;
          featured?: boolean;
          thumbnail_color?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      launches: {
        Row: {
          id: string;
          company: string;
          slug: string;
          tagline: string;
          description: string;
          category: string;
          batch: string;
          votes: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          company: string;
          slug: string;
          tagline: string;
          description: string;
          category: string;
          batch: string;
          votes?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          company?: string;
          slug?: string;
          tagline?: string;
          description?: string;
          category?: string;
          batch?: string;
          votes?: number;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
