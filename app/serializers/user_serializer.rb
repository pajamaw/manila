class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :lists, serializer: ListSerializer
  has_many :list_items, serializer: ListItemSerializer, through: :lists, serializer: ListSerializer
end
