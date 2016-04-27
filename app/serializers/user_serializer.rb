class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_many :lists, serializer: ListSerializer
  has_many :list_items, serializer: ListItemSerializer
end
