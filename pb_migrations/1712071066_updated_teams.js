/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0k0yhtc8pusj8l")

  collection.listRule = "@request.auth.id = created_by || members ~ @request.auth.id"
  collection.viewRule = "@request.auth.id = created_by || members ~ @request.auth.id"
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id = created_by"
  collection.deleteRule = "@request.auth.id = created_by"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0k0yhtc8pusj8l")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
