import pg from "pg"
import { connectionString } from "../creds.js"

const { Client } = pg

export async function connectDb() {
  const client = new Client({
    connectionString: connectionString,
  })
  await client.connect()
    .catch(console.error)
  return client
}


export function disconnect(client) {
  client.end()
}