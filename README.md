# UndetectAI

A web application for detecting AI-generated images and videos. This project consists of a FastAPI backend for detection processing and a React frontend for user interaction.

## Project Structure

```
undetectAI/
├── backend/                 # FastAPI application
│   └── app/
│       ├── main.py         # FastAPI app setup and endpoints
│       ├── detector.py      # AI detection logic
│       ├── utils.py         # Utility functions
│       └── uploads/         # Uploaded file storage
├── frontend/                # React + TypeScript application
│   ├── src/
│   │   ├── App.tsx         # Main app component
│   │   ├── api.ts          # API client
│   │   ├── main.tsx        # React entry point
│   │   ├── assets/         # Static assets
│   │   └── components/     # React components
│   ├── public/             # Public assets
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.ts      # Vite configuration
│   └── tsconfig.json       # TypeScript configuration
└── README.md               # This file
```

## Features

- **Image Detection**: Upload and analyze images to detect AI-generated content
- **Video Detection**: Process video files for AI-generated content detection
- **Responsive UI**: Modern React frontend with TypeScript support
- **REST API**: FastAPI backend with CORS support for easy integration

## Prerequisites

- Python 3.8+ (for backend)
- Node.js 16+ (for frontend)
- npm or yarn (for frontend package management)

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (optional but recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install fastapi uvicorn python-multipart
```

4. Run the FastAPI server:
```bash
uvicorn app.main:app --reload
```

The backend will be available at `http://localhost:8000`

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (or the port specified by Vite)

## API Endpoints

### Image Detection
- **Endpoint**: `POST /detect-image`
- **Parameters**: File upload (multipart/form-data)
- **Returns**: Detection results for the uploaded image

### Video Detection
- **Endpoint**: `POST /detect-video`
- **Parameters**: File upload (multipart/form-data)
- **Returns**: Detection results for the uploaded video

## Development

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend Development
- Use `--reload` flag with uvicorn for hot reload during development
- Check `app/detector.py` for detection logic implementation

## API Configuration

The backend includes CORS middleware configured to accept requests from all origins. You can modify this in `backend/app/main.py` for production use:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## File Uploads

Uploaded files are stored in the `uploads/` directory. Files are renamed with a UUID prefix to avoid conflicts.

## Technologies Used

### Backend
- FastAPI - Modern web framework
- Uvicorn - ASGI server
- Python 3.8+

### Frontend
- React 19.2.6
- TypeScript
- Vite
- Axios
- ESLint

## License

[Add your license information here]

## Contributing

[Add contribution guidelines here]

## Support

For issues or questions, please create an issue in the repository.
