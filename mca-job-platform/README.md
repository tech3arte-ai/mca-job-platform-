# MCA Job Platform

A comprehensive job platform for Medical Sales Representatives (MCAs) and employers (pharmacies/pharmaceutical companies) in Ghana.

## Features

### For MCA Applicants
- User registration with profile creation
- Job browsing and search functionality
- Application submission and tracking
- Interview scheduling
- Document upload for verification

### For Employers (Pharmacies/Pharma Companies)
- **FREE registration** for pharmacies and pharmaceutical companies
- Job posting (100 GHS per job post)
- Applicant management
- Interview scheduling
- Candidate communication

### Payment Structure
- **MCA Registration**: 50 GHS (one-time fee)
- **Pharmacy/Employer Registration**: FREE
- **Job Posting**: 100 GHS per job post

### Security & Validation
- Comprehensive form validation
- Password matching verification
- Minimum password length requirements (6 characters)
- Required field validation based on user role
- Secure payment processing via Paystack

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Payment Gateway**: Paystack

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Backend API server running on port 5000 (or update `VITE_API_URL`)
- Paystack account for payment processing (optional for development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mca-job-platform
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Update the environment variables in `.env`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_test_key_here
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── layout/       # Layout components (DashboardLayout, etc.)
│   └── ui/           # Reusable UI components (Button, Input, Card, etc.)
├── pages/
│   ├── admin/        # Admin dashboard pages
│   ├── auth/         # Authentication pages (Login, Register, Payment)
│   ├── employer/     # Employer dashboard pages
│   ├── jobs/         # Job listing and detail pages
│   └── mca/          # MCA dashboard pages
├── services/         # API service layer
├── store/            # Zustand state management
├── types/            # TypeScript type definitions
└── utils/            # Utility functions and helpers
```

## Payment Integration

The platform uses Paystack for secure payment processing. To configure:

1. Sign up for a Paystack account at [paystack.com](https://paystack.com)
2. Get your API keys from the Paystack dashboard
3. Add your public key to `.env`:
   ```env
   VITE_PAYSTACK_PUBLIC_KEY=pk_test_xxxxxxxxxxxxxxxxxxxx
   ```

### Payment Flow

1. **MCA Registration**: After registration, users are redirected to the payment page to pay 50 GHS
2. **Employer Registration**: Free - users are redirected directly to their dashboard
3. **Job Posting**: Employers pay 100 GHS per job post

## Form Validation

The registration form includes comprehensive validation:

- **Password Match**: Ensures password and confirm password fields match
- **Minimum Length**: Password must be at least 6 characters
- **Required Fields**: 
  - MCA: Phone number is required
  - Employer: Company name is required
- **Email Format**: Valid email address required
- **Error Handling**: Clear error messages displayed to users

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000/api` |
| `VITE_PAYSTACK_PUBLIC_KEY` | Paystack public key for payments | Test key placeholder |

## License

MIT
