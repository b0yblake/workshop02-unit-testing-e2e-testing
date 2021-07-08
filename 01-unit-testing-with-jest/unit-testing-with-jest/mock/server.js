import { Server, createServer, Model, Response } from 'miragejs'
import { message } from './fixtures/db.json' 

// export function makeServer({ environment = "development" } = {}) {
export function makeServer({ environment = "development" } = {}) {

  let server = createServer({
    environment,

    seeds(server) {

      server.db.loadData({
        message
      });

    },

    routes() {
      this.urlPrefix = "http://localhost:3001"
      this.namespace = "api"
      this.timing = 1500

      this.get("/message", (schema) => schema.db.message)
    }
  })

  return server

}