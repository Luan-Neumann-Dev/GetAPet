# 🐕 Get a Pet
 
> Full-stack pet adoption platform — list pets, schedule visits, and manage the entire adoption cycle with JWT authentication, image uploads, and a protected REST API.
 
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)
 
<div align="center">
 
![Preview 1](https://github.com/user-attachments/assets/c6f604f3-9fe0-4487-92ad-0ba8f56f4daf)
![Preview 2](https://github.com/user-attachments/assets/e25f3768-9f4b-4fec-9726-695a0f163ade)
![Preview 3](https://github.com/user-attachments/assets/373d4715-767d-4321-b304-a85e128a49bf)
 
**[🐛 Report Bug](https://github.com/Luan-Neumann-Dev/GetAPet/issues)**
 
</div>
 
---
 
## 📋 Table of Contents
 
- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Database Schema](#-database-schema)
- [API Documentation](#-api-documentation)
- [Challenges & Solutions](#-challenges--solutions)
- [What I Learned](#-what-i-learned)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Author](#-author)
 
---

## 🎯 About The Project
 
Get a Pet is a full-stack web platform that connects people who want to adopt pets with those who have pets available for adoption. Users can register, create listings for their pets with multiple photos, and manage the full adoption lifecycle — from scheduling visits to concluding the adoption.
 
The project was built to go beyond simple CRUD applications and tackle real-world concerns: secure authentication with JWT, protected API routes, file upload handling, and a global auth state shared across the entire frontend via Context API.
 
Every route that modifies data is protected by a `verifyToken` middleware on the backend. The frontend mirrors this by checking auth state before rendering sensitive pages, keeping both layers consistent.
 
### Why I Built This
 
The goal was to build a complete full-stack application from scratch — designing the data models, implementing authentication, handling file uploads, and connecting everything to a React frontend. Get a Pet covers the full lifecycle of a real feature: from user registration to a concluded adoption, with proper authorization checks at every step.
 
---

## ✨ Features
 
### Core Functionality
- 🐾 **Pet listings** — Register pets with name, age, weight, color, and multiple photos
- 📅 **Visit scheduling** — Interested users can schedule a visit to meet a pet; the owner's contact info is returned on confirmation
- ✅ **Adoption conclusion** — Owners can mark an adoption as complete, making the pet unavailable
- ✏️ **Pet management** — Owners can edit or delete their own listings at any time
- 👤 **User profile** — Update personal info and profile picture
 
### User Experience
- Flash messages for feedback on every action (success and error)
- Pets marked as unavailable are visually distinguished on the listing
- Conditional UI based on auth state — navbar and pages adapt to logged-in vs. guest users
- Dedicated dashboard pages: "My Pets" and "My Adoptions"
 
### Technical Features
- JWT authentication with token stored on the client and sent via `Authorization` header
- `verifyToken` middleware protecting all write operations on the API
- Ownership checks before any update or delete — users can only modify their own data
- Multiple image upload per pet via Multer, served as static files from the backend
- Global auth state via React Context API + custom `useAuth` hook
- Event bus pattern (`useFlashMessage`) for cross-component flash messages without prop drilling
 
---

## 🛠️ Tech Stack
 
**Frontend:**
- React 18 — UI and component structure
- React Router 6 — Client-side routing and protected routes
- Context API — Global authentication state
- Axios — HTTP client with base URL configuration
- React Icons — UI icon library
- CSS Modules — Scoped per-component styles
 
**Backend:**
- Node.js + Express — REST API and middleware pipeline
- MongoDB + Mongoose — Database and ODM
- JWT (jsonwebtoken) — Stateless authentication
- bcrypt — Password hashing
- Multer — Multipart form data and image upload handling
- CORS — Cross-origin configuration for local dev
 
**Tools:**
- Vite — Frontend dev server and build tool
- Nodemon — Backend auto-restart on file changes
 
---

## 🚀 Getting Started
 
### Prerequisites
 
- Node.js 18+
- npm
- A running MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
 
### Installation
 
1. **Clone the repository**
```bash
git clone https://github.com/Luan-Neumann-Dev/get-a-pet.git
cd GetAPet
```
 
2. **Install backend dependencies**
```bash
cd backend
npm install
```
 
3. **Configure the database connection**
 
Open `backend/db/conn.js` and set your MongoDB connection string:
```js
mongoose.connect('your_mongodb_connection_string')
```
 
4. **Start the backend server**
```bash
npm start
# Runs on http://localhost:5000
```
 
5. **Install frontend dependencies** (in a new terminal)
```bash
cd frontend
npm install
```
 
6. **Start the frontend dev server**
```bash
npm run dev
# Runs on http://localhost:5173
```
 
---

## 📁 Project Structure
 
```
get-a-pet/
│
├── backend/
│   ├── controllers/
│   │   ├── UserController.js     # Register, login, profile management
│   │   └── PetController.js      # Full pet CRUD + schedule + conclude
│   ├── helpers/
│   │   ├── create-user-token.js  # JWT generation and response
│   │   ├── verify-token.js       # Auth middleware for protected routes
│   │   ├── get-token.js          # Extracts token from Authorization header
│   │   ├── get-user-by-token.js  # Resolves user from token
│   │   └── image-upload.js       # Multer configuration
│   ├── models/
│   │   ├── User.js               # User schema
│   │   └── Pet.js                # Pet schema
│   ├── routes/
│   │   ├── UserRoutes.js
│   │   └── PetRoutes.js
│   ├── db/conn.js                # MongoDB connection
│   └── index.js                  # Express app entry point
│
└── frontend/
    └── src/
        ├── components/
        │   ├── form/             # Input, Select, PetForm
        │   └── layout/           # Navbar, Footer, Message, RoundedImage
        ├── pages/
        │   ├── Auth/             # Login, Register
        │   ├── Pet/              # AddPet, EditPet, PetDetails, MyPets, MyAdoptions
        │   └── User/             # Profile
        ├── context/
        │   └── UserContext.jsx   # Global auth state
        ├── hooks/
        │   ├── useAuth.jsx       # Auth state consumer hook
        │   └── useFlashMessage.jsx  # Flash message event bus
        ├── utils/
        │   ├── api.js            # Axios instance with base URL
        │   └── bus.js            # Event emitter for flash messages
        └── App.jsx               # Router and layout setup
```
 
---

## 🏗️ Architecture
 
### Data Flow
 
```
React (Context API) → Axios (api.js) → Express Router → Middleware (verifyToken) → Controller → Mongoose → MongoDB
```
 
### Auth Flow
 
```
User submits login → UserController validates credentials → bcrypt compares password
→ JWT signed and returned → Frontend stores token → Sent in Authorization header on every request
→ verifyToken middleware decodes token → Controller resolves user via getUserByToken
```
 
### Adoption Cycle
 
```
Owner creates pet (available: true)
→ Visitor schedules visit (adopter set on pet document)
→ Owner concludes adoption (available: false)
```
 
---

 
## 🗄️ Database Schema
 
### `User`
```
- name        String  (required)
- email       String  (required)
- password    String  (required, bcrypt hashed)
- phone       String  (required)
- image       String  (filename, optional)
- timestamps
```
 
### `Pet`
```
- name        String  (required)
- age         Number  (required)
- weight      Number  (required)
- color       String  (required)
- images      Array   (filenames, required)
- available   Boolean (default: true)
- user        Object  { _id, name, image, phone }
- adopter     Object  { _id, name, image }
- timestamps
```
 
### Relationships
 
```
User (1) ──→ (N) Pet  [as owner via pet.user._id]
User (1) ──→ (N) Pet  [as adopter via pet.adopter._id]
```
 
---
 
## 📚 API Documentation
 
### Authentication
 
```http
POST /users/register
POST /users/login
```
 
### Users
 
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/users/checkUser` | Get current user from token | No |
| GET | `/users/:id` | Get user by ID | No |
| PATCH | `/users/edit/:id` | Update profile + photo | Yes |
 
### Pets
 
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/pets` | List all pets | No |
| GET | `/pets/:id` | Get pet details | No |
| POST | `/pets/create` | Create new pet listing | Yes |
| PATCH | `/pets/:id` | Update pet | Yes (owner only) |
| DELETE | `/pets/:id` | Remove pet | Yes (owner only) |
| GET | `/pets/mypets` | List authenticated user's pets | Yes |
| GET | `/pets/myadoptions` | List user's scheduled adoptions | Yes |
| PATCH | `/pets/schedule/:id` | Schedule a visit | Yes |
| PATCH | `/pets/conclude/:id` | Conclude adoption | Yes (owner only) |
 
### Example Request
 
```bash
curl -X POST http://localhost:5000/users/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "yourpassword"}'
```
 
---
 
## 💡 Challenges & Solutions
 
### Challenge 1: Shared auth state across the entire frontend
 
**Problem:** Multiple pages and components needed to know if the user was logged in, who they were, and react to changes in real time (login, logout, profile update).
 
**Solution:** Implemented a `UserContext` with React's Context API, wrapping the entire app. A custom `useAuth` hook exposes auth state and the token cleanly to any component.
 
```jsx
const { authenticated, user } = useAuth()
```
 
**Result:** No prop drilling for auth state. Any component can consume auth context directly.
 
---
 
### Challenge 2: Cross-component flash messages without prop drilling
 
**Problem:** Flash messages needed to be triggered from deep inside a form component and displayed in a layout component at the top of the tree — with no shared parent to pass props through.
 
**Solution:** Built a lightweight event bus using Node's `EventEmitter` (via the `events` package). The `useFlashMessage` hook emits events, and the `Message` component subscribes to them independently.
 
```js
// Emit from any component
const { createMessage } = useFlashMessage()
createMessage({ type: 'success', msg: 'Pet criado com sucesso!' })
```
 
**Result:** Fully decoupled flash message system with no prop drilling, working across any component depth.
 
---
 
### Challenge 3: Ownership authorization on every write operation
 
**Problem:** Any authenticated user could technically call `PATCH /pets/:id` or `DELETE /pets/:id` on a pet they don't own.
 
**Solution:** After validating the JWT with `verifyToken`, every write controller resolves the requesting user from the token and compares their `_id` against the pet's `user._id` before allowing the operation.
 
```js
if (pet.user._id.toString() !== user._id.toString()) {
    return res.status(422).json({ message: "Acesso negado." })
}
```
 
**Result:** Users can only modify or delete resources they own, regardless of the ID passed in the URL.
 
---
 
## 📚 What I Learned
 
**Technical Skills:**
- **Full-stack integration:** Connecting a React frontend to an Express REST API with Axios, managing base URLs and auth headers centrally via an Axios instance
- **JWT authentication:** Generating tokens on login/register, verifying them in middleware, and extracting user identity on protected routes
- **File upload pipeline:** Handling `multipart/form-data` with Multer, storing files on disk, and serving them as static assets from Express
- **MongoDB data modeling:** Embedding related data (user info inside pet documents) as a deliberate denormalization for read performance
 
**Best Practices:**
- Centralizing auth logic in middleware instead of repeating checks across controllers
- Separating concerns with helper functions (`getToken`, `getUserByToken`, `createUserToken`) to keep controllers clean
- Using Context API for global state instead of lifting state up through unrelated component layers
 
**Soft Skills:**
- Planning a full-stack feature end-to-end before writing code — modeling the data first, then the API, then the UI
- Recognizing when embedding vs. referencing in MongoDB is the right call
 
---
 
## 🗺️ Roadmap
 
### Planned Features
- [ ] Search and filter pets by species, age, or location
- [ ] Real-time chat between owner and potential adopter
- [ ] Email notifications when a visit is scheduled
- [ ] Pagination on the pet listing page
 
### Future Improvements
- [ ] Migrate to TypeScript on both frontend and backend
- [ ] Add input validation with Zod or Joi on the API
- [ ] Replace the hardcoded JWT secret with a proper environment variable
- [ ] Add unit tests for controllers and helpers
 
---
 
## 🔐 Security
 
- Passwords hashed with bcrypt (12 salt rounds) — never stored in plain text
- JWT used for stateless authentication — no sessions or cookies
- All write operations protected by `verifyToken` middleware
- Ownership verified on every update and delete before any DB operation
- Passwords excluded from all API responses via `select('-password')` and manual `undefined` assignment
 
---
 
## 📄 License
 
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
 
## 🤝 Contributing
 
Contributions are welcome! Feel free to open an issue or submit a Pull Request.
 
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
 
---
 
## 👤 Author
 
**Luan Neumann**
 
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luan-neumann-dev/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Luan-Neumann-Dev)
 
---
 
<div align="center">
 
**⭐ Star this repository if you found it helpful!**
 
Made with ❤️ and ☕ by [Luan Neumann](https://github.com/Luan-Neumann-Dev)
 
</div>
 
