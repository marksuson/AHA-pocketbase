/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6ujvmdcgvw0mfp1",
    "created": "2024-04-17 14:07:34.308Z",
    "updated": "2024-04-17 14:07:34.308Z",
    "name": "invites",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xcvnel9h",
        "name": "team",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "g0k0yhtc8pusj8l",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "p4np9o3s",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id = team.created_by || team.members ~ @request.auth.id || @request.auth.email = email",
    "viewRule": "@request.auth.id = team.created_by || team.members ~ @request.auth.id || @request.auth.email = email",
    "createRule": "@request.auth.id = team.created_by || team.members ~ @request.auth.id",
    "updateRule": "@request.auth.id = team.created_by || team.members ~ @request.auth.id || @request.auth.email = email",
    "deleteRule": "@request.auth.id = team.created_by || team.members ~ @request.auth.id || @request.auth.email = email",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6ujvmdcgvw0mfp1");

  return dao.deleteCollection(collection);
})
