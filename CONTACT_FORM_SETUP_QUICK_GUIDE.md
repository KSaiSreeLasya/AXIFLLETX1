# Contact Form Setup - Quick Guide

## What's Been Implemented ✅

1. **Get Started Contact Form Page** - Accessible at `/get-started`
2. **Updated Navbar** - "Get Started" button navigates to contact form on all pages
3. **Updated Footer** - "Get Started" button in Get in Touch section
4. **Supabase Integration** - Ready to store submissions
5. **Form Validation** - Required fields marked with asterisk (*)

## How to Complete Setup (3 Steps)

### Step 1: Create Database Table in Supabase

Go to: **Supabase Dashboard → SQL Editor → New Query**

Copy and paste this SQL query:

```sql
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

-- Create indexes for better query performance
CREATE INDEX idx_contact_email ON contact_form_submissions(email);
CREATE INDEX idx_contact_created_at ON contact_form_submissions(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts and reads
CREATE POLICY "Allow public insert on contact_form_submissions" 
  ON contact_form_submissions 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public read on contact_form_submissions"
  ON contact_form_submissions
  FOR SELECT
  USING (true);
```

Click **Run** - Done! ✓

### Step 2: Verify REST API is Enabled

1. Go to: **Project Settings → API**
2. Look for `contact_form_submissions` in the exposed schemas list
3. Ensure it's there (it should be by default)

### Step 3: Test the Form

1. Go to the website
2. Click **"Get Started"** button (navbar or footer)
3. Fill out and submit the form
4. Check **Supabase Dashboard → Table Editor → contact_form_submissions** to see your submission

## Form Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Company Name | Text | Yes | Business name |
| Contact Person | Text | Yes | Full name |
| Company Type | Dropdown | Yes | Logistics, E-Commerce, Food Tech, etc. |
| Email Address | Email | Yes | Valid email address |
| Phone Number | Tel | Yes | Business phone |
| Address | Text | Yes | Street address |
| City | Text | Yes | City name |
| State/Province | Text | Yes | State/Province |
| Postal Code | Text | Yes | ZIP/Postal code |
| Message | Textarea | No | Additional information |

## Supabase Credentials (Already Set in .env)

```
Project ID: iqxiznpmsuthmzosocfq
Project URL: https://iqxiznpmsuthmzosocfq.supabase.co
Anon Key: (already in .env file)
```

## Navigation Points

### Access Form From:
- ✅ **Navbar "Get Started" button** (top right) - works on all pages
- ✅ **Footer "Get Started" button** (Get in Touch section)
- ✅ **Direct URL**: `/get-started`

### Works On All Pages:
- Home (/)
- Enterprise (/enterprise)
- Quick Commerce (/quick-commerce)
- Safety (/safety)
- Invest (/invest)
- Partners (/partners)

## View Submissions

1. Go to Supabase Dashboard
2. Click **Table Editor** (left sidebar)
3. Select **contact_form_submissions**
4. All submissions will appear here with timestamps

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Form not submitting | Check browser console for errors; verify .env has Supabase credentials |
| 404 Not Found | Ensure `contact_form_submissions` table exists in Supabase |
| Can't find table in Editor | Run the SQL query again; refresh the page |
| CORS Error | This should not occur - Supabase REST API allows all origins |

## Done! 🎉

Your contact form is now fully functional. Users can submit their information from any page via the "Get Started" button, and all submissions will be stored in your Supabase database.

For detailed information, see `SUPABASE_SETUP.md`
