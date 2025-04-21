# 🛠️ Project:FixMyRide (Bike Servicing Management API)

A robust RESTful backend API for managing customers, bikes, and service records at a bike servicing center.

---

## 🎯 Objective

Build an efficient and scalable backend system to handle:

- Customer management  
- Bike registrations  
- Service tracking and updates  

The system supports full CRUD operations along with special endpoints for assigning and completing service jobs.

---

## ⚙️ Tech Stack

- **Node.js**  
- **Express.js**  
- **TypeScript**  
- **Prisma ORM**  
- **PostgreSQL**

---

## 🚀 Features

### 🧍 Customer Management

- Add, retrieve, update, and delete customer records  
- UUID-based identification  
- Auto-generated timestamps  

### 🏍️ Bike Management

- Link bikes to specific customers  
- Manage brands, models, and manufacturing years  
- Fetch specific or all bikes  

### 🧾 Service Record Management

- Create and fetch service records  
- Track service status (`pending`, `in_progress`, `done`)  
- Complete service jobs with optional completion date  

### 📅 Overdue Services

- Fetch services older than 7 days with `pending` or `in-progress` status  
- Helps prioritize delayed work  

### 🔥 Error Handling

- Unified and clean error structure  
- Includes HTTP status and developer stack trace (in dev mode)  

---

## 📁 Project Structure

├── src │ ├── app │ │ ├── modules │ │ │ ├── bike │ │ │ ├── customer │ │ │ └── serviceRecord │ │ ├── middleware │ │ ├── routes │ │ ├── utils │ │ ├── shared │ │ └── errorHandlers │ └── server.ts ├── prisma │ └── schema.prisma ├── .env ├── package.json ├── tsconfig.json └── README.md

---

## 📦 Setup Guide

1. Clone the repository  
2. Install dependencies  
   - `npm install`  
3. Setup `.env` with your PostgreSQL database URL  
   - Example: `DATABASE_URL="postgresql://user:pass@localhost:5432/FixMyRide"`  
4. Generate Prisma client  
   - `npx prisma generate`  
5. Apply DB migrations  
   - `npx prisma migrate dev --name init`  
6. Start the development server  
   - `npm run dev`  

---

## 🌐 Live API

> Hosted on: [Your Render/Railway link here]

---

## ✅ Key Highlights

- Clean code structure using TypeScript  
- Modular routing and controller layers  
- Follows REST API best practices  
- Fully typed with Prisma and request validation  
- Easily extendable for admin panels or auth in the future  

---

## 👨‍💻 Developer Tips

- Use [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/) for testing endpoints  
- Add logging with `morgan` or `winston` for production  
- Use `prisma studio` (`npx prisma studio`) to view and interact with DB  

---

Feel free to enhance or integrate with frontend/dashboard platforms.  
Happy coding!  
