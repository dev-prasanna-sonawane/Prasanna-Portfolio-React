# My Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**.  
Showcase your projects, skills, and allow visitors to contact you directly via a styled contact form that sends emails using [EmailJS](https://www.emailjs.com/).

---

## ✨ Features

- **Responsive Design:** Looks great on all devices.
- **About Me Section:** Introduce yourself and your background.
- **Skills Section:** Highlight your technical skills.
- **Projects Section:** Showcase your best work with images and descriptions.
- **Contact Form:** Visitors can send you messages directly to your email via EmailJS.
- **Modern Styling:** Clean, customizable CSS.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure EmailJS for the Contact Form

1. [Sign up for EmailJS](https://www.emailjs.com/).
2. Create an **Email Service** (e.g., Gmail).
3. Create an **Email Template** with variables: `from_name`, `from_email`, `message`.
4. Get your **Service ID**, **Template ID**, and **User/Public Key** from the EmailJS dashboard.

### 4. Add Environment Variables

Create a `.env` file in your project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

**Note:**  
- Do **not** commit your `.env` file to version control.
- Restart the dev server after editing `.env`.

### 5. Run the App

```bash
npm run dev
```

---

## 🛠️ Project Structure

```
src/
  components/
    Main Components/
      AboutMe.jsx
      Contact.jsx
      Projects.jsx
      Skills.jsx
    Main.css
  assets/
    background-image.jpg
  App.jsx
  main.jsx
```

---

## 📝 Customization

- **Content:**  
  Edit the components in `src/components/Main Components/` to update your info, projects, and skills.

- **Styling:**  
  Modify `src/components/Main.css` for custom styles.

- **Images:**  
  Place your images in `src/assets/` and update the paths in your components.

---

## 🔒 Security

- Only public EmailJS keys are used in the frontend.
- Never expose private SMTP credentials or sensitive keys in your `.env` or frontend code.

---

## 🧩 Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [EmailJS](https://www.emailjs.com/)

---

## 📬 Contact

Feel free to use the contact form on the site, or reach out via the email provided in your About section.

---
