class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :user
  has_many :list_items, serializer: ListItemSerializer
end
