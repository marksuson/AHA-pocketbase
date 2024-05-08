/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0k0yhtc8pusj8l")

  collection.updateRule = "@request.auth.id = created_by || members ~ @request.auth.id || (@collection.invites.team ?= id && @collection.invites.email ~ @request.auth.email)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0k0yhtc8pusj8l")

  collection.updateRule = "@request.auth.id = created_by"

  return dao.saveCollection(collection)
})
