class ListItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :date, :description, :completed, :list
end
