# MAVY---RealTime-Video-Sharing-Platform
Mavy is a smart video-sharing platform that helps people record, stream, and share videos instantly. Unlike regular tools, it doesn’t depend on YouTube or other services—it uses its own system to stream videos in real-time.


**Mavy** is a full-stack SaaS platform that allows users to **record, stream, and share videos in real time** using a secure and scalable system. It includes **AI features** like **transcription**, **summarization**, and **metadata generation**, making it ideal for businesses, educators, content creators, and teams.

## 🚀 Features

- ⚡ **Real-time Video Streaming** via WebSockets (Socket.io)
- 🧠 **AI-Powered Transcriptions** using Whisper AI
- 📝 **Automatic Title, Summary & Description Generation** using OpenAI
- 🔒 **Secure Authentication** with Clerk
- 💾 **Cloud Storage & Streaming** using AWS S3 + CloudFront
- 🖥️ **Desktop App** built with Electron.js for native recording
- 🔔 **Real-Time Notifications** & Viewer Activity Tracking
- 💳 **Subscription Payments** powered by Stripe
- ⚙️ **Server-side Caching** with React Query

---

## 📦 Tech Stack

| Layer          | Technology |
|----------------|------------|
| Frontend       | Next.js, Tailwind CSS, React Query |
| Desktop App    | Electron.js |
| Backend        | Express.js, Socket.io |
| AI Models      | OpenAI GPT APIs, Whisper AI |
| Authentication | Clerk |
| Database       | PostgreSQL (NeonDB) |
| File Storage   | AWS S3 |
| Video Streaming| AWS CloudFront |
| Payments       | Stripe |

---

## 🔗 Related Repositories

Here are other repositories related to this project:

- 🔵 [MAVY - RealTime Video Sharing Web App (Next.js)]([[https://github.com/Vinayak820/MAVY---RealTime-Video-Sharing-Platform](https://github.com/Vinayak820/MAVY---RealTime-Video-Sharing-Platform.git)](https://github.com/Vinayak820/MAVY---RealTime-Video-Sharing-Platform))
- 🟣 [MAVY Desktop App (Electron.js)]([https://github.com/Vinayak820/MAVY-Desktop-App](https://github.com/Vinayak820/Mavy---Electron-Application.git)) 
- 🟢 [MAVY Server (Express.js)](https://github.com/Vinayak820/MAVY-Server) *(replace with actual link if different)*

---

## 🛠️ How It Works

1. **User Authentication**
   - Users sign up or log in using Clerk.
   - User info is stored in PostgreSQL (NeonDB).

2. **Video Recording (Desktop App)**
   - Electron.js app accesses camera, mic, and screen.
   - Video chunks are sent in real time via WebSockets.

3. **Video Storage & Streaming**
   - Express server receives video chunks and stores them in AWS S3.
   - Videos are streamed securely through AWS CloudFront.

4. **AI Enhancements**
   - Whisper AI transcribes the video.
   - OpenAI generates the video’s title, description, and summary.

5. **User Interface**
   - Videos can be played back, shared, or downloaded from the web interface.
   - Activity logs and viewer updates shown in real time.

6. **Subscription System**
   - Stripe manages plans and payments for Pro & Free users.
