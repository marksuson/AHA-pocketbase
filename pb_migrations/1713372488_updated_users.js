/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "id = @request.auth.id || (@collection.teams.created_by ?= id && @collection.teams.members ~ @request.auth.id) || (@collection.teams.created_by ?= @request.auth.id && @collection.teams.members.id ?= id)"
  collection.viewRule = "id = @request.auth.id || (@collection.teams.created_by ?= id && @collection.teams.members ~ @request.auth.id) || (@collection.teams.created_by ?= @request.auth.id && @collection.teams.members.id ?= id)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "id = @request.auth.id"
  collection.viewRule = "id = @request.auth.id"

  return dao.saveCollection(collection)
})
