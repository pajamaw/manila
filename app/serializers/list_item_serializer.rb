class ListItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :latitude, :longitude, :gmapkey, :date, :description, :list_id, :user
end
