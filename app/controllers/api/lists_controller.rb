module Api
    class ListsController <ApplicationController
    def index
      @lists = List.all
      render json: @lists
    end

    def show
      render json: list
    end

    def create 
      list = List.new(list_params)
      if list.save
        respond_to do |format|
          format.json {render json: list}
        end
      end
    end

    def update
      list.update_attributes(list_params)
      render nothing: true
    end

    def destroy
      list.destroy
      render nothing: true
    end

    private
    def list
      @list ||= List.find(params[:id])
    end

    def list_params
      params.require(:list).permit(:title, :list_items => [])
    end
  end
end
