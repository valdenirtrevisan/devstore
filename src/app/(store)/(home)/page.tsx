export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return <h1>ola mundo</h1>
}
