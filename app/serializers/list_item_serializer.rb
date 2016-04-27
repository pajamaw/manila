class ListItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :date, :description, :list_id, :user
end
