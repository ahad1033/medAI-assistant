# 🧠 MedAI Assistant

**MedAI Assistant** is a modular AI-powered healthcare assistant built with **Next.js 15**, **Vercel AI SDK**, **Tailwind CSS**, and **ShadCN UI**. It provides personalized, interactive AI services for medical use cases such as symptom checking, report analysis, nutrition guidance, and more — all in one modern, responsive application.

Live Demo: [https://medai-assistant-two.vercel.app/](https://medai-assistant-two.vercel.app/)

---

## 📌 Features

- 🏠 **Homepage** with clean UI and service cards
- 💬 **Dynamic Chat Pages** powered by Vercel AI SDK (`/chat/[service]`)
- ⚙️ **AI Personality Customization** for each health service
- 🌙 **Dark/Light Theme Toggle** using ShadCN Theme Provider
- 📜 **Chat History** per session with markdown formatting
- 📱 **Fully Responsive** and mobile-friendly UI
- 🔒 **(Optional)** Authentication with NextAuth.js and persistent chat history via MongoDB

---

## 🧩 Modular AI Services

Each service card on the homepage leads to a unique AI interaction page, tailored with custom system prompts:

| Service                 | Route                           | System Role Example                                                               |
| ----------------------- | ------------------------------- | --------------------------------------------------------------------------------- |
| Symptom Checker         | `/chat/symptom-checker`         | "You are a careful medical assistant helping a user understand their symptoms..." |
| Medical Report Analyzer | `/chat/medical-report-analyzer` | "You assist users in interpreting medical reports with caution and clarity..."    |
| Nutrition Assistant     | `/chat/nutrition-assistant`     | "You provide personalized dietary advice based on user inputs..."                 |
| Health Tracker          | `/chat/health-tracker`          | "You track health stats and give suggestions for improvement..."                  |
| Emergency Guide         | `/chat/emergency-guide`         | "You guide users through common emergency scenarios with calm and clarity..."     |

Each service dynamically configures its assistant behavior using conditional system prompts.

---

## 🛠️ Tech Stack

### Frontend:

- **Next.js 15** with **App Router**
- **Tailwind CSS** for utility-first styling
- **ShadCN UI** for modern UI components
- **Vercel AI SDK** (`ai` package) for AI-powered chat experiences
- **React Markdown** for rendering AI responses

### Backend/AI:

- **OpenAI/GPT-4/Anthropic (via Vercel AI SDK)** (streaming support)
- **Custom System Prompts** based on dynamic route param

### Optional Integrations:

- **NextAuth.js** for authentication
- **MongoDB + Mongoose** for chat persistence and user management
- **Vercel** for deployment

---

## 🖥️ Pages Overview

### `/`

- Hero section with app value proposition
- Service card grid (each navigates to a unique chat)
- "Why Choose MedAI" + "How It Works"
- Pricing, Testimonials, and CTA
- Responsive Header and Footer

### `/chat/[service]`

- Dynamic AI chat interface
- Displays service-specific assistant behavior
- Scrollable chat history with markdown rendering
- Input area with streaming response support
- System prompt injected conditionally

---

## 🧠 AI Interaction Logic

This project uses the `useChat()` hook from the **Vercel AI SDK** to manage AI conversations with:

- **Streaming AI Responses**
- **Custom System Prompts** per service
- **Markdown Support** for formatted output
- **Lightweight Message Management** via Vercel Edge Functions (no backend setup required for basic use)

Example system prompt for "Symptom Checker":

````ts
"You are a careful medical assistant helping a user understand their symptoms. Ask follow-up questions to clarify symptoms and provide possible causes with disclaimers."


## Getting Started

```bash
git clone https://github.com/ahad1033/medAI-assistant

cd medai-assistant

npm install

npm run dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
