# AxifleetX Contact Form - SQL Setup Guide

## Database Setup

### For PostgreSQL

```sql
-- Create contacts table
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'spam')),
  source VARCHAR(100) DEFAULT 'contact_form',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notes TEXT
);

-- Create index on email for faster lookups
CREATE INDEX idx_contacts_email ON contacts(email);

-- Create index on created_at for sorting/filtering by date
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);

-- Create index on status for filtering
CREATE INDEX idx_contacts_status ON contacts(status);
```

### For MySQL

```sql
-- Create contacts table
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(255),
  message LONGTEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'spam')),
  source VARCHAR(100) DEFAULT 'contact_form',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  notes LONGTEXT,
  INDEX idx_email (email),
  INDEX idx_created_at (created_at DESC),
  INDEX idx_status (status)
);
```

### For SQLite

```sql
-- Create contacts table
CREATE TABLE contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'spam')),
  source TEXT DEFAULT 'contact_form',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notes TEXT
);

-- Create indexes
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX idx_contacts_status ON contacts(status);
```

## Table Schema

| Column | Type | Description |
|--------|------|-------------|
| id | INT/SERIAL | Primary key |
| name | VARCHAR(255) | Contact's full name |
| email | VARCHAR(255) | Email address (required) |
| phone | VARCHAR(20) | Phone number (optional) |
| company | VARCHAR(255) | Company name (optional) |
| message | TEXT | Contact message (required) |
| status | VARCHAR(50) | Status: new, contacted, converted, spam |
| source | VARCHAR(100) | Lead source (e.g., 'contact_form') |
| created_at | TIMESTAMP | Record creation time |
| updated_at | TIMESTAMP | Last update time |
| notes | TEXT | Internal notes for sales team |

## Integration Steps

### 1. Database Connection Setup

Update your `.env` file with database credentials:

```env
# PostgreSQL Example
DATABASE_URL=postgresql://username:password@localhost:5432/axifleetx

# MySQL Example
DATABASE_URL=mysql://username:password@localhost:3306/axifleetx

# SQLite Example
DATABASE_URL=sqlite:./data/axifleetx.db
```

### 2. Install Database Client (Choose One)

**For PostgreSQL:**
```bash
pnpm add pg
pnpm add -D @types/pg
```

**For MySQL:**
```bash
pnpm add mysql2
```

**For SQLite:**
```bash
pnpm add better-sqlite3
```

### 3. Update Backend Route with Database Integration

Replace the current `server/routes/contact.ts` with one of these implementations:

#### PostgreSQL Version

```typescript
import { RequestHandler } from "express";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body as ContactRequest;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required",
      });
    }

    const query = `
      INSERT INTO contacts (name, email, phone, company, message, status, source)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id;
    `;

    const result = await pool.query(query, [
      name,
      email,
      phone || null,
      company || null,
      message,
      "new",
      "contact_form",
    ]);

    console.log("Contact saved:", result.rows[0].id);

    res.json({
      success: true,
      message: "Thank you for your interest. We'll contact you soon!",
      id: result.rows[0].id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ error: "Failed to process your request" });
  }
};
```

#### MySQL Version

```typescript
import { RequestHandler } from "express";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  connectionString: process.env.DATABASE_URL,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body as ContactRequest;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required",
      });
    }

    const connection = await pool.getConnection();

    const query = `
      INSERT INTO contacts (name, email, phone, company, message, status, source)
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    const [result] = await connection.execute(query, [
      name,
      email,
      phone || null,
      company || null,
      message,
      "new",
      "contact_form",
    ]);

    connection.release();

    console.log("Contact saved:", (result as any).insertId);

    res.json({
      success: true,
      message: "Thank you for your interest. We'll contact you soon!",
      id: (result as any).insertId,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ error: "Failed to process your request" });
  }
};
```

#### SQLite Version

```typescript
import { RequestHandler } from "express";
import Database from "better-sqlite3";

const db = new Database(process.env.DATABASE_URL || "./data/axifleetx.db");

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body as ContactRequest;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required",
      });
    }

    const stmt = db.prepare(`
      INSERT INTO contacts (name, email, phone, company, message, status, source)
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `);

    const result = stmt.run(
      name,
      email,
      phone || null,
      company || null,
      message,
      "new",
      "contact_form"
    );

    console.log("Contact saved with ID:", result.lastInsertRowid);

    res.json({
      success: true,
      message: "Thank you for your interest. We'll contact you soon!",
      id: result.lastInsertRowid,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ error: "Failed to process your request" });
  }
};
```

## Optional: Email Notification Setup

Add email notifications when a contact form is submitted:

```typescript
// Add to handleContact function
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// After saving to database:
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.ADMIN_EMAIL,
  subject: `New Contact Form Submission from ${name}`,
  html: `
    <h2>New Contact Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    <p><strong>Company:</strong> ${company || "N/A"}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
});
```

## Database Queries for Admin Dashboard

```sql
-- Get all new contacts
SELECT * FROM contacts WHERE status = 'new' ORDER BY created_at DESC;

-- Get contacts from last 7 days
SELECT * FROM contacts WHERE created_at >= NOW() - INTERVAL '7 days' ORDER BY created_at DESC;

-- Count by status
SELECT status, COUNT(*) as count FROM contacts GROUP BY status;

-- Search by email
SELECT * FROM contacts WHERE email LIKE '%example%';

-- Mark as contacted
UPDATE contacts SET status = 'contacted' WHERE id = ?;

-- Delete old records (keep 2 years)
DELETE FROM contacts WHERE created_at < NOW() - INTERVAL '2 years';
```

## Testing the API

```bash
curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 98765 43210",
    "company": "Tech Corp",
    "message": "Interested in enterprise leasing"
  }'
```

## Security Considerations

1. **Input Validation**: Always validate on both client and server
2. **Rate Limiting**: Add rate limiting to prevent spam
3. **Email Verification**: Consider verifying emails before marking as contacted
4. **GDPR Compliance**: Implement data deletion after specified period
5. **Encryption**: Store sensitive data encrypted at rest
6. **XSS Prevention**: Sanitize message content before storage/display

## Next Steps

1. Choose your database system
2. Create the table using the SQL provided
3. Install the database client library
4. Update the contact.ts route with your chosen implementation
5. Add environment variables to .env
6. Test the form submission
7. Set up admin dashboard to view/manage contacts
