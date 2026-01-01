urCV.ai
A React + TypeScript resume builder with AI-enhanced analysis, extraction, and export features. The app provides live preview, templates, AI resume analysis, and export to PDF/Word/image. The project meta is defined in index.html.

Key features
Interactive resume builder with live preview and templates.
AI resume analysis, enhancement, and chat assistant.
Resume extraction from uploaded files (PDF, DOCX, TXT).
Export resume to Word, PDF, or image formats.
Tech stack
React + TypeScript (TSX components).
Tailwind CSS and shadcn UI components.
docx, jsPDF, html2canvas for document generation.
Groq SDK used for AI/chat features.
Mammoth for DOCX parsing.
Getting started
Short instructions to run locally.

# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
Project structure
src/pages — page entry points (Home, Builder, Templates).
src/components — UI and feature components (resume forms, preview, chatbot).
src/services — document generation, file parsing, and AI/groq integrations.
Important notes
The repository includes client-side AI integration code. Review and secure any API keys before deployment.
File parsing uses basic PDF/text extraction; consider stronger PDF parsers for production.
Contributing
Fork, create a feature branch, and open a pull request.
Run linters and tests before submitting.
License
Specify your license here (e.g., MIT).

If you want, I can generate a full README.md file with more details (installation, environment variables, screenshots, and contribution guidelines).
