/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1myvwmhus76hsfv")

  collection.listRule = "project.created_by = @request.auth.id  || project.team.created_by ~ @request.auth.id || project.team.members ~ @request.auth.id"
  collection.createRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1myvwmhus76hsfv")

  collection.listRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
