class ListItem < ActiveRecord::Base
  serialize :title, :location, :date, :description, :completed, :list_id
  belongs_to :list
  belongs_to :user, through: :list
end
