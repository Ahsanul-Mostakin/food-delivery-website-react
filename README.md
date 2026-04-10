# 🍔 FoodZone — Food Delivery Web App
 
A full-stack food delivery application built with the **MERN Stack**, featuring JWT authentication, real-time cart management, and order persistence.
 
🌐 **Live Demo**: [https://mern-foodzone.onrender.com](https://mern-foodzone.onrender.com) &nbsp;|&nbsp; 🔧 **API**: [foodzone-backend-6005.onrender.com](https://foodzone-backend-6005.onrender.com)
 
---
 
## 📸 Screenshots
 
<img width="1365" alt="Home" src="https://github.com/user-attachments/assets/a2eb5e59-966c-4cd2-adc5-0af114ef2e3a" />
<img width="1353" alt="Menu" src="https://github.com/user-attachments/assets/b9f8e9ea-4030-4304-a620-0c317f29be46" />
<img width="1365" alt="Cart" src="https://github.com/user-attachments/assets/ffdcc421-8822-4d56-830d-29f5aec1917a" />
<img width="1358" alt="Order" src="https://github.com/user-attachments/assets/34a9c175-d765-4172-8b94-98e629941ffa" />
<img width="1361" alt="Auth" src="https://github.com/user-attachments/assets/d1b43871-a661-4318-ba13-d9323b2deb8a" />
<img width="1234" alt="Mobile" src="https://github.com/user-attachments/assets/4bd7471e-c507-4280-9d04-713117285528" />
<img width="1365" alt="Orders" src="https://github.com/user-attachments/assets/b512538a-a5d0-492f-97d1-611e2948918d" />
 
---
 
## ✨ Features
 
- 🔐 **JWT Authentication** — Register, login, and protected routes
- 🛒 **Cart System** — Add/remove items, adjust quantities, live totals
- 📦 **Order Placement** — Orders saved to MongoDB with full pricing breakdown
- 🔍 **Search & Filter** — Filter dishes by category or name
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile
 
---
 
## 🛠️ Tech Stack
 
| Frontend | Backend |
|----------|---------|
| React.js + React Router | Node.js + Express.js |
| Redux Toolkit | MongoDB + Mongoose |
| TailwindCSS | JWT + bcryptjs |
| Deployed on **Render** | Deployed on **Render** |
 
---
 
## 🔌 API Endpoints
 
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login & receive JWT |
| POST | `/api/order/place` | Place order *(protected)* |
| GET | `/api/order/my-orders` | Get order history *(protected)* |
 
---
 
## 🚀 Run Locally
 
```bash
# Clone
git clone https://github.com/your-username/food-delivery-website.git
 
# Backend
cd backend && npm install
# Create .env with MONGO_URI and JWT_SECRET
node server.js
 
# Frontend
cd frontend && npm install && npm run dev
```
 
---
 
## 📄 License
 
MIT — open source and free to use.
