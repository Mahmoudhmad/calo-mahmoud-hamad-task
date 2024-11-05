# Next.js & Node.js/Express.js Job Queue Application

This project consists of a backend service built with Node.js and Express.js, and a frontend client using Next.js. The application allows users to create "job" requests, which retrieve a random image from Unsplash's food category with a delayed execution. The client interface displays the job status and results when available.

## Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [Estimated Time](#estimated-time)

---

## Setup Instructions

### Prerequisites

- Node.js v20.12.2 (recommended)
- Next.js v15

### Step 1: Clone the Repository

```bash
git clone https://github.com/Mahmoudhmad/cole-mahmoud-hamad-task.git
```

### Step 1: Installation

<!-- Frontend -->

```bash
cd frontend
npm install
```

### .env.example

NEXT_PUBLIC_BACKEND_URL = http://localhost:4444/api/v1

<!-- backend -->

```bash
cd backend
npm install
```

### .env.example backend:

UNSPLASH_ACCESS_KEY=cmpGAjKVn9fP0BwjVLt4Pf7zAD-jk0ty1PaKXdzUheE
UNSPLASH_SECRET_KEY=D2wUeOyXFwKqxcFLy0JeOux7tWusn1VNaNexecAOBsg
UNSPLASH_APPLICATION_ID=672298

### Estimated time:

<!-- Estimated Spent Time -->

POST on /jobs to create a new job and return its ID to the client: 30 minutes
GET on /jobs to return a list of jobs, with status or result: 15 minutes
GET on /jobs/{jobId} to return the specific job’s status or result: 15 minutes
Create a client with a single page to display list of jobs: 30 hour
Add functionality to create a new job from the client: 5 minutes
Client should fetch and display job results as soon as resolved: 10 minutes
Implement delayed execution for job (random delay 5 seconds to 5 minutes): 10 minutes
Total Estimated Time: ~2 hours
