# NEXT SQL CLIENT 💻

A Next-Js and Tailwind-CSS-based Web Application to run SQL Queries on the go and fetch data easily. This client allows users to select queries or write it in an editor. The data obtained can be filtered and downloaded as CSV.

## Live Demo 👨‍💻

[![image](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Yash-Raj-50/next-sql-client)

The project is deployed using Vercel and is live at [Next SQL Client](https://next-sql-client.vercel.app/) . Check it out !!

## Tech Stack 👩‍🔧

[![image](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)[![image]( 	https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)[![image](https://img.shields.io/badge/Ant%20Design-1890FF?style=for-the-badge&logo=antdesign&logoColor=white)](https://ant.design/)

I have chosen Next Js 14.0.3 as the frontend framework for our project and used Tailwind CSS for styling the website. Further, I sourced several components from Antd components.

## Dependencies 🛠️

- antd components
- react-ace
- react-csv

## Features ⚡️

✅ Users can choose the table they want to query.  
✅ Users can fetch all the columns or keep or remove columns of their choice.  
✅ Users can filter the search results using keywords.  
✅ The filtered search result can downloaded as CSV.  
✅ The structure of Data can be visualised on the right pane.  
✅ Expandable and modular design of the project.  

## Planned Features (for future versions) 🗓️

- Custom Table Import for Users
- More SQL commands functionalities
- Switchable Dark mode

## Page Load Time ⏰

<a href="https://drive.google.com/uc?export=view&id=1TOYmmKoh7TmYJlq80k7ISx1iQPL-VXZh"><img src="https://drive.google.com/uc?export=view&id=1TOYmmKoh7TmYJlq80k7ISx1iQPL-VXZh" style="width: 500px; max-width: 100%; height: auto" title="Page Load time measured using Lighthouse" />

I measured the load times of the website using Google Lighthouse. The performance ratings were good and the content load time ranged between 0.3s to 0.7s for the desktop.

## Steps taken for faster load times ➕

- Used Next Js instead of React Js since the earlier one is faster and provides server-side and client-side rendering abilities.
- Deployed the site through Vercel, since Next Js is maintained by Vercel itself.
- Scrutnized the code to keep only the essential code and followed best-practices of coding.

## Running on Local Machine

Clone the repo first and then run the development server through:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

##

Made with ❤️ & ⚡ by Yash Raj
