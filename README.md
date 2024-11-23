## Blog Frontend

Built using nextjs/typecript

```bash
Server side repo - https://github.com/rahul-sharma13/nextBlog
```



## Getting Started

```bash
clone this repository - git clone https://github.com/rahul-sharma13/nextBlog-client.git
```

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```bash
App directory - consists of the layout and root page of the project

component - consists of all the component used, while ui inside the component directory is used for common components

hooks - for custom hooks

lib - utils.ts(shadcn file)

types - used for file with type declarations

middleware.ts - for using middlewares in next

other than this most of the files are for configuration of shadcn or tailwind or next js
```

## Tech Used

```bash
Axios - provides more default settings than fetch(better option would be to using it with react-query for client side caching and easy management of states)

shadcn and tailwind - shadcn is highly customisable library, makes it easy to Used

moment(module) - to get dates
```
