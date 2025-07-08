# Restaurant-management


**🚀 Features**
🔐 User signup & login (JWT auth)

🍽️ Add and list food items

🛒 Place food orders

📦 View and manage order status

🧾 Total bill generation after order

✅ Proper error handling and validations



**🛠️ Tech Stack**
Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication: JWT, bcryptjs

Environment: dotenv

**📁 Project Structure**

restaurant-backend/
│
├── controllers/       # Business logic
│   ├── authController.js
│   ├── foodController.js
│   └── orderController.js
│
├── models/            # Mongoose schemas
│   ├── User.js
│   ├── Food.js
│   └── Order.js
│
├── routes/            # API endpoints
│   ├── authRoutes.js
│   ├── foodRoutes.js
│   └── orderRoutes.js
│
├── config/            # DB connection
│   └── db.js
│
├── .env               # Environment variables
├── .gitignore
├── package.json
└── server.js


**🧪 API Endpoints**
🔐 Auth
POST /api/auth/signup — Register a new user

POST /api/auth/login — Login and get JWT token

🍔 Food
POST /api/food/add — Add new food item

GET /api/food — Get list of all food items

📦 Orders
POST /api/order — Place an order

GET /api/order — Get all orders

PUT /api/order/:id/deliver — Mark order as delivered


**🚀 Getting Started**

bash
Copy
Edit
# 1. Clone the repo
git clone https://github.com/chavanakash/Restaurant-management.git
cd restaurant-backend

# 2. Install dependencies
npm install

# 3. Add your environment variables
cp .env.example .env
# Then edit .env with your own values

# 4. Start the server
node server.js
