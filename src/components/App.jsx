import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { ContactsList } from 'pages/ContactsList';
import { SignUp } from 'pages/SignUp';
import { Login } from 'pages/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsList />} />
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

// Книга контактів
// Додай у застосунок «Книги контактів» можливість реєстрації користувачів та роботу з приватними колекціями контактів.

// Додай маршрутизацію та кілька сторінок:

// !!! /register - публічний маршрут реєстрації нового користувача з формою

// !!! /login - публічний маршрут логіна існуючого користувача з формою

// !!! /contacts - приватний маршрут для роботи з колекцією контактів користувача

// !!! Додай навігаційні посилання для переходу маршрутами.

// !!! Додай компонент <UserMenu>, що складається з пошти користувача і кнопки Logout.

// Використовуй готовий живий бекенд з документацією за посиланням.
// !!! Додай публічні і приватні маршрути.
// Попрацюй над гарним оформленням інтерфейсу, можна використовувати бібліотеку компонентів, наприклад React Bootstrap, Material-UI та інші.
