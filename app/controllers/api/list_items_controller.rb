  class Api::ListItemsController < ApplicationController

    def index
      render json: list.list_items
    end

    def show
      render json: list.list_items
    end

    def create
      list_item = list.list_items.create(list_items_params)
      render json: list.list_items
    end

    def update 
      list_item.update_attributes(list_items_params)
      render nothing: true, status: 204
    end

    def destroy
      list_item.destroy
      render nothing: true, status: 204
    end

    private

    def list
      @list ||= List.find(params[:list_id])
    end

    def list_item
      @list_item ||= list.list_items.find(params[:id])
    end

    def list_items_params
      params.require(:list_item).permit(:title, :location, :date, :description, :completed, :list_id)
    end
  end
