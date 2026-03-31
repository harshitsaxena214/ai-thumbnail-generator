# 🎨 AI Thumbnail Generator

Generate eye-catching thumbnails using AI in seconds. This project uses modern web technologies with a clean full-stack setup.

🔗 **Repository:** https://github.com/harshitsaxena214/ai-thumbnail-generator.git

---

## 🚀 Tech Stack

- **Frontend:** React  
- **Backend:** Node.js + Express  
- **Language:** TypeScript  
- **AI Model:** Gemini (Image Generation)  
- **Cloud Storage:** Cloudinary  
- **Database:** MongoDB  

---

## ✨ Features

- AI-powered thumbnail generation  
- Secure authentication (bcrypt hashing)  
- Cloud-based image storage (Cloudinary)  
- Clean and responsive UI  
- Full-stack TypeScript support  

---

## ⚙️ Setup Guide

Follow these steps carefully to run the project locally.

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/harshitsaxena214/ai-thumbnail-generator.git
cd ai-thumbnail-generator
```

### 2️⃣ Setup Google Cloud & Gemini API

- Search for **Google Cloud free credits**  
- Create a **Google Cloud account**  
- Create a **new project** in GCP  
- Go to **Google AI Studio**  
- Import your GCP project  
- Generate a **Gemini API key**

⚠️ **Important:**  
Use a **paid API key**. Free tier only supports text, not image generation.

---

### 3️⃣ Setup Cloudinary

- Create an account on Cloudinary  
- Get your:
  - Cloud Name  
  - API Key  
  - API Secret
- Generate the Cloudinary link using this format "cloudinary://API_KEY:API_SECRET@CLOUD_NAME"

---

### 4️⃣ Environment Variables

- Refer to `.env.example` inside the **server** folder  
- Add all required environment variables accordingly  
- Do the same setup for the **client** side  

---

### 5️⃣ Run the Backend

```bash
cd server
npm install
npm run dev
```

### 6️⃣ Run the Frontend

```bash
cd client
npm install
npm run dev
```

## 🌐 Running the App

After starting both frontend and backend:

- Open your browser  
- Visit: `http://localhost:5173` (or the port shown in terminal)
