/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ae2ll2lyaioivw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aslderbv",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "not started",
        "started",
        "in progress",
        "almost finished",
        "done",
        "on going",
        "on hold",
        "archived"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ae2ll2lyaioivw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aslderbv",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Planned",
        "Active",
        "Ongoing",
        "Complete",
        "Archived",
        "OnHold",
        "Failed"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
