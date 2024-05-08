/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7u67k0d0r18bwbf")

  collection.listRule = "project.created_by = @request.auth.id"
  collection.viewRule = "project.created_by = @request.auth.id"
  collection.createRule = "project.created_by = @request.auth.id"
  collection.updateRule = "project.created_by = @request.auth.id"
  collection.deleteRule = "project.created_by = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7u67k0d0r18bwbf")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
