# 📘 React Notes

## 🟦 What is React?

React is a **JavaScript library** for building **user interfaces**, primarily for **web applications**. It allows developers to create reusable UI components efficiently.

---

## ❓ Why React?

- ✅ **Most popular** frontend library in the world.
- ✅ **Easy to learn and use**, especially for those with JavaScript background.
- ✅ **Declarative** – you describe what you want, React takes care of how.
- ✅ Uses **Virtual DOM** to enhance performance.
- ✅ Implements a **Diffing Algorithm** to efficiently update the UI.
- ✅ Can build **both web and mobile apps** (via React Native).
- ✅ Huge **job market demand** and strong community support.

---

## ⚙️ Virtual DOM & Performance

- The **Virtual DOM** is a lightweight copy of the actual DOM.
- React updates the virtual DOM first, compares changes using the **Diffing Algorithm**, and then updates the real DOM **only where needed**, which makes it fast.

---

## 🧩 Framework vs Library

| Feature         | Framework                          | Library                         |
|----------------|-------------------------------------|----------------------------------|
| Control Flow    | Controls how your app is structured | You control how to use it       |
| Flexibility     | Less flexible, more opinionated     | More flexible, less opinionated |
| Size            | Generally heavier                   | Lightweight                     |
| Examples        | Angular, Django                     | React, Lodash                   |

---

### ⚠️ Is React a Library or Framework?

While React is **officially a library**, in practice it feels like a **framework**, because:

- You almost always use it with other libraries:
  - `react-router-dom` (routing)
  - `redux` or `zustand` (state management)
  - `axios` (HTTP requests)
  - `styled-components` or `tailwind` (styling)
- The **React ecosystem** (tools, conventions, best practices) gives it framework-like structure.

So, React is a **library** at its core, but often behaves like a **framework** in real-world development.

---

## ✅ Summary

- React is great for building UI with **components** and **state management**.
- It helps improve performance using **Virtual DOM** and **diffing**.
- While technically a **library**, the **React ecosystem** gives it the power and structure of a **framework**.

