## Getting Started

This is the completed source code for the issue tracker project I build following mosh hamedani Ultimate Next.js series. But, I added some other features like theme switch, status change and user assigned issues list. I also used mongodb instead of mysql.

To get started, follow these steps:

1. Clone this repository to your local machine. 
2. In the project folder, rename **.env.example** to **.env** (no period after). 
3. Set **all** the environment variables according to the instructions I've included in the file. If you don't set them properly, the application is not going to work.
4. Run `npm install` to install the dependencies.
5. Run `npx prisma db push` to generate your database tables.
6. Run `npm run dev` to start the web server. 