-- Create contact_form_submissions table
CREATE TABLE contact_form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name VARCHAR(255) NOT NULL,
  contact_person VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  postal_code VARCHAR(20) NOT NULL,
  company_type VARCHAR(100) NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster queries
CREATE INDEX idx_contact_email ON contact_form_submissions(email);

-- Create index on created_at for sorting
CREATE INDEX idx_contact_created_at ON contact_form_submissions(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert
CREATE POLICY "Allow public insert on contact_form_submissions" 
  ON contact_form_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow only reading own submissions (optional)
CREATE POLICY "Allow public read on contact_form_submissions"
  ON contact_form_submissions
  FOR SELECT
  USING (true);
