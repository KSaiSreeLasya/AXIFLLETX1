# AxifleetX Supabase Setup Guide

## Overview
This document provides complete instructions for setting up the contact form with Supabase for the AxifleetX website.

## Supabase Project Details
- **Project ID**: `iqxiznpmsuthmzosocfq`
- **Project URL**: `https://iqxiznpmsuthmzosocfq.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxeGl6bnBtc3V0aG16b3NvY2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NjUwMzcsImV4cCI6MjA5NjE0MTAzN30.SRz96pBJpbt_tibVmxga7-GXpeGIT1qMLvJl0T4kAvY`

## Step 1: Create the Database Table

Copy and paste the following SQL query into your Supabase SQL Editor and run it:

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

-- Create policy to allow public read
CREATE POLICY "Allow public read on contact_form_submissions"
  ON contact_form_submissions
  FOR SELECT
  USING (true);
```

### In Supabase Dashboard:
1. Go to **SQL Editor** (left sidebar)
2. Click **+ New Query**
3. Copy and paste the SQL above
4. Click **Run**

## Step 2: Enable REST API

The REST API should be enabled by default. To verify:

1. Go to **Project Settings** → **API**
2. You should see your `contact_form_submissions` table listed in the exposed schemas
3. The URL will be: `https://iqxiznpmsuthmzosocfq.supabase.co/rest/v1/contact_form_submissions`

## Step 3: Verify Environment Variables

The following variables are already set in `.env`:

```
VITE_PUBLIC_SUPABASE_URL=https://iqxiznpmsuthmzosocfq.supabase.co
VITE_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxeGl6bnBtc3V0aG16b3NvY2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NjUwMzcsImV4cCI6MjA5NjE0MTAzN30.SRz96pBJpbt_tibVmxga7-GXpeGIT1qMLvJl0T4kAvY
```

## Step 4: Test the Contact Form

1. **Start the development server**: `npm run dev`
2. **Navigate to any page** (Home, Enterprise, Quick Commerce, etc.)
3. **Click the "Get Started" button** in the navbar or footer
4. **Fill out the contact form** with the following fields:
   - Company Name *
   - Contact Person Name *
   - Company Type * (Dropdown with options)
   - Email Address *
   - Phone Number *
   - Address *
   - City *
   - State/Province *
   - Postal Code *
   - Message (Optional)

5. **Submit the form**
6. You should see a success message

## Step 5: View Submissions in Supabase

1. Go to **Supabase Dashboard**
2. Click **Table Editor** (left sidebar)
3. Select **contact_form_submissions** table
4. You'll see all submitted contact forms here

## Form Features

### ✅ Implemented Features:
- Contact form accessible from **Get Started** button on all navbar pages
- Fields capture: Company info, contact details, address, and optional message
- Form validation (required fields marked with *)
- Success/error messages displayed after submission
- Data stored in Supabase PostgreSQL database
- Timestamps automatically recorded (created_at, updated_at)
- Searchable by email with indexed queries
- Responsive design for mobile and desktop

### 📄 Form Fields:
1. **Company Name** (Text) - Required
2. **Contact Person** (Text) - Required
3. **Company Type** (Dropdown) - Required
   - Logistics & Delivery
   - E-Commerce
   - Food Tech / Quick Commerce
   - Corporate
   - Retail
   - Other
4. **Email Address** (Email) - Required
5. **Phone Number** (Tel) - Required
6. **Address** (Text) - Required
7. **City** (Text) - Required
8. **State/Province** (Text) - Required
9. **Postal Code** (Text) - Required
10. **Message** (Textarea) - Optional

## Page Routes

The "Get Started" form is available at:
- **Page Route**: `/get-started`
- **Navbar Button**: "Get Started" (top right)
- **Footer Button**: "Get Started" (Get in Touch section)

## Testing the API

You can also test the API directly:

```bash
curl -X POST \
  'https://iqxiznpmsuthmzosocfq.supabase.co/rest/v1/contact_form_submissions' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'apikey: YOUR_ANON_KEY' \
  -d '{
    "company_name": "Test Company",
    "contact_person": "John Doe",
    "email": "john@example.com",
    "phone": "+91 9876543210",
    "address": "123 Main St",
    "city": "Mumbai",
    "state": "Maharashtra",
    "postal_code": "400001",
    "company_type": "logistics",
    "message": "Interested in your services"
  }'
```

## Troubleshooting

### Issue: CORS Error
**Solution**: Supabase REST API allows CORS from all origins by default. No additional configuration needed.

### Issue: 401 Unauthorized
**Solution**: Verify the anon key is correct in `.env` file

### Issue: 404 Not Found
**Solution**: Ensure the `contact_form_submissions` table exists in your Supabase database

### Issue: Form not submitting
1. Check browser console for errors
2. Verify Supabase credentials in `.env`
3. Ensure the table exists with correct schema

## Security Notes

- The anon key is used for public read/write operations
- Row Level Security (RLS) is enabled on the table
- Policies allow public inserts (for form submissions)
- For production, consider adding rate limiting or email validation

## Production Deployment

1. Keep the same Supabase credentials in production
2. The form will automatically use the production Supabase instance
3. Consider enabling email notifications in Supabase for new submissions
4. Regularly backup your submissions data

## Support

For more information:
- [Supabase Documentation](https://supabase.com/docs)
- [REST API Reference](https://supabase.com/docs/guides/api)
