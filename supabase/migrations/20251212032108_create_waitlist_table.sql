/*
  # Create Waitlist Table for Scory Beta Launch

  1. New Tables
    - `waitlist_signups`
      - `id` (uuid, primary key) - Unique identifier for each signup
      - `email` (text, unique, not null) - Email address of the user
      - `created_at` (timestamptz) - Timestamp when the user signed up
      - `referral_source` (text) - Optional field to track where the signup came from
  
  2. Security
    - Enable RLS on `waitlist_signups` table
    - Add policy for anonymous users to insert their email (public signup)
    - No read/update/delete policies needed (admin-only access)
  
  3. Indexes
    - Index on email for quick lookups
    - Index on created_at for sorting
*/

CREATE TABLE IF NOT EXISTS waitlist_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  referral_source text
);

ALTER TABLE waitlist_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can sign up for waitlist"
  ON waitlist_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist_signups(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist_signups(created_at DESC);