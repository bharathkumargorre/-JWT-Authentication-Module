# 🔐 JWT Authentication Module

A secure authentication REST API built with **Node.js**, **Express.js**, **MySQL**, **JWT**, and **bcrypt**.

---

## 🚀 Live Demo

(https://jwt-authentication-module.vercel.app/)
---

## 🚀 Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Update Profile
- Change Password
- Delete Account
- Password Hashing (bcrypt)
- Swagger API Documentation
- MySQL Database Integration

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- JWT
- bcrypt
- Swagger
- Docker

---

## 📂 Project Structure

```
auth-module/
│── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── validation/
│   ├── app.js
│   └── server.js
│
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/profile | Get Profile |
| PUT | /api/auth/profile | Update Profile |
| PUT | /api/auth/change-password | Change Password |
| DELETE | /api/auth/delete-account | Delete Account |

---

## ⚙️ Installation

```bash
git clone <repository-url>

cd auth-module

npm install

npm run dev
```

---

## 📖 Swagger Documentation

```
http://localhost:5000/api-docs
```

---

## 👨‍💻 Author

**Bharath Kumar Gorre**

- LinkedIn: https://linkedin.com/in/bharathkumargorre
- GitHub: https://github.com/bharathkumargorre
