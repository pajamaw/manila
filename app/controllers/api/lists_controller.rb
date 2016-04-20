class Api::ListController <Api::BaseController

  def index
    render json: List.all
  end

  def show
    render json: list
  end

  def create 
    new_list = current_user.list.create!(list_params)
    render json: new_list
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
    params.require(:list).permit(:title)
  end
end