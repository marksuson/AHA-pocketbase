/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ae2ll2lyaioivw")

  collection.listRule = "created_by = @request.auth.id "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ae2ll2lyaioivw")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
