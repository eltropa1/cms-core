-- ============================================================
-- CMS Core - Initial Schema
-- Driver: pg
-- Database: PostgreSQL
-- ============================================================

-- =========================
-- TABLE: categories
-- =========================

CREATE TABLE categories (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

CREATE INDEX idx_categories_slug ON categories(slug);

-- =========================
-- TABLE: posts
-- =========================

CREATE TABLE posts (
  id UUID PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  content_document JSONB NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  published_at TIMESTAMPTZ NULL,

  CONSTRAINT chk_posts_status_valid
    CHECK (status IN ('draft','published','archived','deleted')),

  CONSTRAINT chk_posts_published_requires_published_at
    CHECK (
      status <> 'published'
      OR published_at IS NOT NULL
    )
);

CREATE INDEX idx_posts_find_published
ON posts (published_at DESC)
WHERE status = 'published';

-- =========================
-- TABLE: post_categories
-- =========================

CREATE TABLE post_categories (
  post_id UUID NOT NULL,
  category_id UUID NOT NULL,

  PRIMARY KEY (post_id, category_id),

  CONSTRAINT fk_post_categories_post
    FOREIGN KEY (post_id)
    REFERENCES posts(id)
    ON DELETE CASCADE,

  CONSTRAINT fk_post_categories_category
    FOREIGN KEY (category_id)
    REFERENCES categories(id)
    ON DELETE CASCADE
);

CREATE INDEX idx_post_categories_category_id
ON post_categories(category_id);