/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ae2ll2lyaioivw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1ooyk8ux",
    "name": "team",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "g0k0yhtc8pusj8l",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ae2ll2lyaioivw")

  // remove
  collection.schema.removeField("1ooyk8ux")

  return dao.saveCollection(collection)
})
