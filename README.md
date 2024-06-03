# Urine Strip Analyzer

This repository contains a web application that allows users to upload an image of their urine strip and identify the colors on the strip. Each strip will have 10 colors. The image is processed using OpenCV, and the results are returned as a JSON with 10 colors (RGB values).

## Features

- Upload an image through a web interface.
- Process the image to identify 10 distinct colors using OpenCV.
- Display the RGB values of the identified colors.

## Technologies Used

- Backend: Django, Django REST Framework, OpenCV
- Frontend: React
- CORS Handling: `django-cors-headers`

## Setup Instructions

### Prerequisites

- Python 3.x
- Node.js and npm
- Virtual environment tool (e.g., `virtualenv`)

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/urine-strip-analyzer.git
   cd urine-strip-analyzer
   
2. **Install the backend dependencies:**

   ```bash
   pip install -r requirements.txt
   
3. **Apply database migrations:**

   ```bash
   python manage.py migrate
3. **Start the backend server:**

   ```bash
   python manage.py runserver
### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend/urineStrip
2. **Install the frontend dependencies:**

   ```bash
   npm install

3. **Start the frontend development server:**

   ```bash
   npm run dev
### Project Structure

urine-strip/
├
│   ├── api/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── urinestrip/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── manage.py
│   └── requirements.txt
└── frontend/
    ├── public/
    ├── src/
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── index.css
    │   ├── index.js
    │   ├── logo.svg
    │   ├── reportWebVitals.js
    │   ├── setupTests.js
    │   └── Upload.js
    ├── package.json
    ├── README.md
    └── .gitignore
