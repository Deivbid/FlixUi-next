# Flix UI

🚀 Full-stack web application built with TypeScript, Next.js, Prisma, MongoDB, and Tailwind CSS. The app allows users to browse and stream movies and TV shows with ease, while also providing a personalized and secure user experience.

## Features

- **User authentication:** Users can sign up, log in, and log out of the app using their Google or Github account. The app uses NextAuth and cookie-based authentication to ensure user data is kept secure.

- **Responsive design:** App is fully responsive, ensuring a seamless experience for users on any device.

- **Database integration:** The app is integrated with Prisma and MongoDB to provide users with access to a wide range of movies and TV shows. The app uses controllers and APIs to manage data and serve it to the frontend.

- **Tailwind CSS:** The app uses Tailwind CSS to create detail-oriented effects and animations, providing users with a visually pleasing experience.

- **State management:** Zustand is used to manage state in the app, making it easy to keep track of user data and provide a seamless user experience.

- **Data fetching:** The app uses SWR for data fetching, making it fast and efficient.

## Live Demo

[Live Demo](https://flix-ui-next.vercel.app/)

## Getting started

To get started with My Netflix Clone, follow these steps:

1. Clone the repo
2. Install the dependencies using `npm install`
3. Create and fill `.env` file

```js
DATABASE_URL= // Your real databaseUrl
GOOGLE_CLIENT_ID= // optional
GOOGLE_CLIENT_SECRET= // optional
GITHUB_ID= // optional
GITHUB_SECRET= //optional
NEXTAUTH_JWT_SECRET= //whatever you want to put here
NEXTAUTH_SECRET= // same as above
```

4. Start the development server using `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser to start using the app

## Screenshots

![Home page](/public/images/Home.png)
_The home page provides users with a list of popular movies and TV shows._

![Login page](/public/images/Login.png)
_Users can sign up, log in, and log out of the app using their Google or Github account._

## Contributing

Pull requests and bug reports are welcome! If you'd like to contribute to My Netflix Clone, please follow these steps:

1. Fork the repo
2. Create a new branch with your changes (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new pull request

## License

This app is licensed under the [MIT License](LICENSE.md).
